import { NextResponse } from "next/server";
import { resend } from "../../../lib/resend";

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, data } = body || {};

    // Validate request payload
    if (!type || !data || typeof data !== "object") {
      return NextResponse.json(
        { error: "Invalid request: Missing or malformed 'type' or 'data'." },
        { status: 400 }
      );
    }

    // Determine subject dynamically
    const subject =
      type === "contact"
        ? "📩 New Contact Form Submission"
        : "🚛 New Skip Collection Request";

    // Generate clean HTML
    const html = `
      <h2 style="font-family: sans-serif; color: #333;">${subject}</h2>
      <ul style="font-family: sans-serif; line-height: 1.6;">
        ${Object.entries(data)
          .map(
            ([key, value]) =>
              `<li><strong style="text-transform: capitalize;">${key}:</strong> ${
                value || "N/A"
              }</li>`
          )
          .join("")}
      </ul>
    `;

    // Send email via Resend
    const email = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject,
      html,
    });

    // Ensure Resend returned a valid response
    if (!email?.id) {
      console.error("Resend email send failed:", email);
      return NextResponse.json(
        { error: "Failed to send email via Resend." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, email });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown server error occurred.",
      },
      { status: 500 }
    );
  }
}
