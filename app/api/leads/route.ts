import { NextResponse } from "next/server";
import { z } from "zod";

import { createSupabaseServerClient } from "@/lib/supabase/server";

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional().default(""),
  message: z.string().min(12, "Message is required"),
  locale: z.string().optional().default("es"),
  pagePath: z.string().optional().default("/contact"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = leadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid form data",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, company, message, locale, pagePath } = parsed.data;

    const supabase = createSupabaseServerClient();

    const { error } = await supabase.from("leads").insert({
      name,
      email,
      company: company || null,
      message,
      source: "website",
      locale,
      page_path: pagePath,
    });

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        {
          ok: false,
          error: "Could not save lead",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead route error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unexpected server error",
      },
      { status: 500 }
    );
  }
}