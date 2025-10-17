// /app/api/page/route.js
import { NextResponse } from "next/server";
import { ConnectDb } from "../../helper/db";
import pageModel from "../../helper/models/page";
import serviceCategoryModel from "../../helper/models/serviceCategory";

// Helper to normalize strings (remove non-alphanumeric, lowercase)
const normalize = (str) =>
  str?.toLowerCase().replace(/[^a-z0-9]/g, "");

export async function GET(req) {
  try {
    await ConnectDb();

    const { searchParams } = new URL(req.url);
    const categoryQuery = searchParams.get("category");
    const pageQuery = searchParams.get("page");

    // Validate
    if (!categoryQuery) {
      return NextResponse.json(
        { success: false, message: "Category is required" },
        { status: 400 }
      );
    }

    // Fetch categories to populate
    const dbCategory = await serviceCategoryModel.find();
    const categoryObj = dbCategory.find(
      (cat) => normalize(cat.title) === normalize(categoryQuery)
    );

    if (!categoryObj) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }

    // Build Mongo query
    const query = { category: categoryObj._id };

    if (pageQuery) {
      // Find page by title if page param exists
      query.title = new RegExp(pageQuery.replace(/-/g, " "), "i"); // case-insensitive
    }

    const pages = await pageModel
      .find(query)
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
      message: "Pages fetched successfully",
      data: pages,
      category: [categoryObj],
    });
  } catch (error) {
    console.error("Fetching page error:", error);
    return NextResponse.json(
      { success: false, message: "Fetching page details failed" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await ConnectDb();

    const {
      title,
      slug,
      shortcontent,
      content,
      pageimage,
      imagealt,
      metadiscription,
      metatitle,
      category, // should be category _id
    } = await req.json();

    // Check if page already exists
    const existPage = await pageModel.findOne({
      $or: [{ title }, { slug }],
    });

    if (existPage) {
      return NextResponse.json(
        { success: false, message: "This page already exists!" },
        { status: 400 }
      );
    }

    const newPage = await pageModel.create({
      title,
      slug,
      shortcontent,
      content,
      pageimage,
      imagealt,
      metadiscription,
      metatitle,
      category,
    });

    return NextResponse.json({
      success: true,
      message: "Page created successfully",
      data: newPage,
    });
  } catch (error) {
    console.error("Create page error:", error);
    return NextResponse.json(
      { success: false, message: "Creating page failed" },
      { status: 500 }
    );
  }
}
