import { NextResponse } from "next/server";
import { ConnectDb } from "../../../helper/db";
import pageModel from "../../../helper/models/page";
import serviceCategoryModel from "@/app/helper/models/serviceCategory"

export async function GET() {
  try {
    await ConnectDb();

    const pages = await pageModel
      .find()
      .populate("category", "title")
      .sort({ title: 1 });

    if (!pages || pages.length === 0) {
      return NextResponse.json(
        { success: false, message: "No pages found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "All pages fetched successfully",
      data: pages,
    });
  } catch (error) {
    console.error("Fetching all pages error:", error);
    return NextResponse.json(
      { success: false, message: "Fetching all pages failed" },
      { status: 500 }
    );
  }
}
