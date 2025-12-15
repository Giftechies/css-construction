// utils/resendEmailService.js

import { resend } from "@/lib/resend"

/**
 * Sends an OTP email via Resend API, styled for "Electra Store",
 * with the OTP also visible in the email subject.
 *
 * @param {string} email - Recipient email address.
 * @param {string} otp - The one-time password (OTP) to be sent.
 * @param {boolean} [isResend=false] - Flag indicating if this is a resend request.
 * @param {number} [expiryMinutes=15] - The number of minutes until the OTP expires.
 * @returns {Promise<boolean>} - True if the email was sent successfully, false otherwise.
 */
export async function sendOTPEmail(email, otp, isResend = false, expiryMinutes = 15) {
  try {
    // 1. Determine Email Subject (NOW INCLUDES OTP)
    const companyName = "CSS Construction";
    const subjectPrefix = isResend 
      ? `[${companyName}] New Verification Code: `
      : `[${companyName}] Your Verification Code: `;
      
    // The OTP is appended to the subject for visibility
    const subject = `${subjectPrefix}${otp}`; 

    // 2. Construct Email HTML Body (Styled to match the image)
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${companyName} Verification</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff; text-align: center;">

          <div style="max-width: 600px; margin: 40px auto; padding: 20px; border-radius: 8px; background-color: #ffffff;">

              <h1 style="font-size: 18px; color: #000000; margin-bottom: 30px; font-weight: normal;">${companyName}</h1>

              <p style="font-size: 16px; color: #000000; margin-top: 50px; margin-bottom: 5px;">Your verification code:</p>
              
              <div style="font-size: 40px; font-weight: bold; color: #000000; letter-spacing: 5px; margin: 10px 0;">
                  ${otp}
              </div>

              <p style="font-size: 14px; color: #000000; margin-top: 30px; margin-bottom: 50px;">
                  This code can only be used once. It expires in ${expiryMinutes} minutes.
              </p>

              <div style="margin-top: 50px; border-top: 1px solid #eeeeee;">
                  <p style="font-size: 14px; color: #777777; margin-top: 20px; margin-bottom: 10px;">&copy; ${companyName}</p>
                  <p style="font-size: 12px; margin: 0; padding-bottom: 10px;">
                      <a href="#" style="color: #007bff; text-decoration: none; margin-right: 15px;">Privacy policy</a>
                      <a href="#" style="color: #007bff; text-decoration: none;">Terms of service</a>
                  </p>
              </div>

          </div>
      </body>
      </html>
    `;

    // 3. Send Email via Resend
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