import { NextResponse } from "next/server";
import { ConnectDb } from "../../helper/db";
import pageModel from "../../helper/models/page";
import serviceCategoryModel from "../../helper/models/serviceCategory"
export async function GET(req) {
  try {
    await ConnectDb();
    console.log("API /api/page called");

    const res = await pageModel.find().sort({ title: 1 }).populate("category", "title");
    if (!res) {
      return NextResponse.json(
        { success: false, message: "Fetching data failed" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Page data fetched successfully!", data: res },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Fetching page details failed!" },
      { status: 404 }
    );
  }
}

export async function POST(req) {
  await ConnectDb();
  try {
    const {
      title,
      slug,
      shortcontent,
      content,
      pageimage,
      imagealt,
      metadiscription,
      metatitle,
      category, // ✅ category id
    } = await req.json();

    // Check if page already exists by title or slug
    const existPage = await pageModel.findOne({ $or: [{ title }, { slug }] });
    if (existPage) {
      return NextResponse.json(
        { success: false, message: "This page already exists!" },
        { status: 400 }
      );
    }

    // Create new page with category reference
    const res = await pageModel.create({
      title,
      slug,
      shortcontent,
      content,
      pageimage,
      imagealt,
      metadiscription,
      metatitle,
      category, // saved as ObjectId reference
    });

    if (!res) {
      return NextResponse.json(
        { success: false, message: "Creating page failed!" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Page created successfully!", data: res },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Create page failed!" },
      { status: 500 }
    );
  }
}
