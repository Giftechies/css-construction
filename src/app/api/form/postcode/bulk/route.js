import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import Postcode from "../../../../helper/models/postcode";
import { ConnectDb } from "../../../../helper/db";

export async function POST(req) {
  try {
    // 1️⃣ Connect to MongoDB
    await ConnectDb();

    // 2️⃣ Get uploaded file
    const data = await req.formData();
    const file = data.get("file");
    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // 3️⃣ Parse Excel
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    if (!rows.length || !rows[0].postcode) {
      return NextResponse.json(
        { success: false, error: "Excel must have a 'postcode' column" },
        { status: 400 }
      );
    }

    // 4️⃣ Map Excel rows to Postcode documents
    const docs = rows.map((r) => ({ postcode: r.postcode }));

    // 5️⃣ Check existing postcodes in DB
    const existing = await Postcode.find({
      postcode: { $in: docs.map((d) => d.postcode) },
    }).select("postcode");

    const existingPostcodes = existing.map((e) => e.postcode);

    // 6️⃣ Separate new and duplicate postcodes
    const newDocs = docs.filter((d) => !existingPostcodes.includes(d.postcode));
    const skippedDocs = docs.filter((d) => existingPostcodes.includes(d.postcode));

    // 7️⃣ Insert only new postcodes
    let insertedDocs = [];
    if (newDocs.length > 0) {
      insertedDocs = await Postcode.insertMany(newDocs, { ordered: false });
    }

    // 8️⃣ Return report
    return NextResponse.json({
      success: true,
      total: docs.length,
      inserted: insertedDocs.length,
      skipped: skippedDocs.map((d) => d.postcode),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Bulk import failed" },
      { status: 500 }
    );
  }
}
