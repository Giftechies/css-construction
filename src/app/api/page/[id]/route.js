import { NextResponse } from "next/server";
import { ConnectDb } from "../../../helper/db";
import pageModel from "../../../helper/models/page";

export async function PUT(req, { params }) {
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
      category, // ✅ include category
    } = await req.json();

    const updatedPage = await pageModel.findByIdAndUpdate(
      params.id,
      { title, slug, shortcontent, content, pageimage, imagealt, metadiscription, metatitle, category },
      { new: true, runValidators: true }
    );

    if (!updatedPage) {
      return NextResponse.json(
        { success: false, message: "Page does not exist" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Page updated successfully!", data: updatedPage },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Updating page failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  await ConnectDb();
  try {
    const deletedPage = await pageModel.findByIdAndDelete(params.id);
    if (!deletedPage) {
      return NextResponse.json(
        { success: false, message: "Page does not exist" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Page deleted successfully!", data: deletedPage },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Deleting page failed" },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  await ConnectDb();
  try {
    const page = await pageModel.findById(params.id).populate("category", "title");
    if (!page) {
      return NextResponse.json(
        { success: false, message: "Page does not exist" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Page found successfully!", data: page },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Fetching page failed" },
      { status: 500 }
    );
  }
}
