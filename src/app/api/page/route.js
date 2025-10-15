import { NextResponse } from "next/server";
import { ConnectDb } from "../../helper/db";
import pageModel from "../../helper/models/page";
import serviceCategoryModel from "../../helper/models/serviceCategory"



export async function GET(req) {
  try {
    await ConnectDb();
    const {searchParams} = new URL(req.url);
    const category = searchParams?.get('category')
    const dbcategory = category?.split('-').map(word=>word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase()).join(" ")
    const page = searchParams.get('page')
    console.log("pages page>><M><",page);
    

    const res = await pageModel.find().sort({ title: 1 }).populate("category", "title");
    const service = await serviceCategoryModel.find({title:dbcategory})
    
    
    
    if (res.length==0) {
      return NextResponse.json(
        { success: false, message: "Fetching data failed" },
        { status: 404 }
      );
    }
    if(category && !page){ 
     
      const cleancategory = category.trim().replace(/['"]+/g,"").replace(/-/g," ").toLowerCase()
      
      const filterData = res.filter(item => item.category.title.trim().toLowerCase() == cleancategory)
        return NextResponse.json({
        success:true,
        message:'page fetched successfully by category filted',
        data:filterData,
        category:service 
      })
    
    }

    if(category && page){
       const cleancategory = category.trim().replace(/['"]+/g,"").replace(/-/g," ").toLowerCase()
       const cleanpage = page.trim().replace(/['"]+/g,"").replace(/-/g," ").toLowerCase()
      const filterdata = res.filter(item => item.category.title.trim().toLowerCase()===cleancategory && item.title.trim().toLowerCase()==cleanpage)
      return NextResponse.json({
        success:true,
        message:"fetched successfully from page filtered",
        data:filterdata
      })
    }
    return NextResponse.json(
      { success: true, message: "Page data fetched successfully!", data: res },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Fetching page details failed!" },
      { status: 500 }
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
