import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.25.76";

const BodySchema = z.object({
  pagePath: z.string().min(1).max(255).regex(/^\//),
  visitorId: z.string().min(16).max(128),
  referrer: z.string().url().max(500).optional().or(z.literal("")),
  deviceType: z.enum(["mobile", "tablet", "desktop"]),
});

const toHex = (buffer: ArrayBuffer) =>
  [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => null);
    const parsed = BodySchema.safeParse(body);

    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Analytics backend is not configured");
    }

    const userAgent = req.headers.get("user-agent") ?? "";
    const visitorHash = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(`${parsed.data.visitorId}:${userAgent}`)
    );
    const referrerHost = parsed.data.referrer ? new URL(parsed.data.referrer).hostname.slice(0, 120) : null;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error } = await supabase.from("analytics_events").insert({
      visitor_key: toHex(visitorHash),
      page_path: parsed.data.pagePath,
      referrer_host: referrerHost,
      device_type: parsed.data.deviceType,
    });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error tracking analytics:", error);
    return new Response(JSON.stringify({ error: "Analytics tracking failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});