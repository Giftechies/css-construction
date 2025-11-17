// /app/api/imagehandler/route.js
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" });
    }

    // Optional: limit file size (e.g., 2 MB)
    const MAX_SIZE = 1 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({
        success: false,
        message: "File is too large. Max 1 MB allowed.",
      });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${file.name}-${Date.now()}`;

    // Upload file to Vercel Blob
    const upload = await put(fileName, fileBuffer, {
      access: "public",     // file is publicly accessible
      contentType: file.type,
    });
    
    return NextResponse.json({
      success: true,
      filePath: upload.url, // public URL of uploaded file
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({
      success: false,
      message: "Upload failed",
      error: error.message,
    });
  }
}
