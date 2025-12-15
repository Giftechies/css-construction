// utils/resendEmailService.js

import { resend } from "@/lib/resend"

/**
 * Sends an OTP email via Resend API
 * @param {string} email - Recipient email
 * @param {string} otp - OTP to send
 * @param {boolean} isResend - Whether this is a resend
 * @param {number} expiryMinutes - OTP expiry minutes
 */
export async function sendOTPEmail(email, otp, isResend = false, expiryMinutes = 5) {
  try {
    const subject = isResend
      ? "Your OTP Has Been Resent"
      : "Your Login OTP Code";

    const html = `
      <p>${isResend ? "Here is your new OTP:" : "Your one-time password is:"}</p>
      <h2>${otp}</h2>
      <p>This code expires in ${expiryMinutes} minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL, // must be a verified sender/domain
      to: [email],
      subject,
      html,
    });

    if (error) {
      console.error("Resend API error:", error);
      return false;
    }

    console.log(`Sent OTP via Resend to ${email}, id:`, data.id);
    return true;
  } catch (err) {
    console.error("Resend email failed:", err);
    return false;
  }
}
