import multer from "multer";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Disable body parsing for multer
export const config = { api: { bodyParser: false } };

// Ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

export async function POST(req) {
  return new Promise((resolve) => {
    upload.single("file")(req, {}, (err) => {
      if (err) {
        console.error(err);
        return resolve(NextResponse.json({ success: false, message: err.message }));
      }

      const file = req.file;
      if (!file) return resolve(NextResponse.json({ success: false, message: "No file uploaded" }));

      // Return URL path for frontend
      const filePath = `/uploads/${file.filename}`;

      resolve(
        NextResponse.json({
          success: true,
          message: "File uploaded successfully",
          filePath,
        })
      );
    });
  });
}
