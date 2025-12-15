
// api/auth/otp/generate/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

import { ConnectDb } from '@/app/helper/db';
import userModel from '@/app/helper/models/user';
import OtpCode from '@/app/helper/models/OtpCode';
import { sendOTPEmail } from '@/lib/emailServices';

const OTP_EXPIRY_MINUTES = 5;
const OTP_LENGTH = 6;
const BCRYPT_SALT_ROUNDS = 10;
const EMAIL_COOLDOWN_SECONDS = 60;

export async function POST(request) {
  try {
    await ConnectDb();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    // USER MUST EXIST (as requested)
    const user = await userModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "user does not exist." },
        { status: 404 }
      );
    }

    // Cooldown - prevent spamming multiple OTPs
    const recentOtp = await OtpCode.findOne({
      userId: user._id,
      createdAt: { $gt: new Date(Date.now() - EMAIL_COOLDOWN_SECONDS * 1000) }
    });

    if (recentOtp) {
      return NextResponse.json(
        { success: true, message: "OTP already sent. Please wait." },
        { status: 200 }
      );
    }

    // Create OTP
    const otp = crypto.randomInt(
      10 ** (OTP_LENGTH - 1),
      10 ** OTP_LENGTH
    ).toString();

    const hashedOtp = await bcrypt.hash(otp, BCRYPT_SALT_ROUNDS);
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

    await OtpCode.deleteMany({ userId: user._id });

    await OtpCode.create({
      userId: user._id,
      hashedOtpCode: hashedOtp,
      expiresAt,
    });

    const data = await sendOTPEmail(email, otp,);

    console.log(data);
     if(!data){
      throw new Error("Something went wrong!");
      
     }
      
    return NextResponse.json(
      { success: true, message: "OTP sent to your email." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
