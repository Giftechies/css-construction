import { NextResponse } from "next/server";
import {ConnectDb} from "../../helper/db"
import serviceCategoryModel from "../../helper/models/serviceCategory";

export  async function POST(req){
    try {
         await ConnectDb();
        const {title,slug,featureImage,discription } = await req.json()
        const existTitle = await serviceCategoryModel.findOne({title,slug})
        if(existTitle){
            return NextResponse.json({
                success:false,
                message:"Category is already exist",
                
            })
        }

        const res = await serviceCategoryModel.create({title,slug,featureImage,discription})
        if(res){
            return NextResponse.json({
                success:true,
                message:"Category is created successfully",
                 data:res
            })
        }
        
    } catch (error) {
        console.log("error at post in servicecategory",error);
        
        return NextResponse.json({
            success:false,
            message:"failed to create category",
            error:error
        })
        
    }
}


export  async function GET(req){
    try {
        await ConnectDb();
        const res = await serviceCategoryModel.find().sort({title:1})
        if(res){
            return NextResponse.json({
                success:true,
                message:"services is fetched successfully!",
                data:res
            })
        }
        
    } catch (error) {
        console.log("error at get in servicecategory",error);
        console.log("SERVICE ERROR >>>", error.message);
console.log("STACK >>>", error.stack);

        
        return NextResponse.json({
            success:false,
            message:"feching data is failed",
            error:error
        })
        
    }
}

export  async function PUT(req){
    try {
        await ConnectDb();
         const {title,slug,featureImage,discription,_id } = await req.json()
         const  existService = await serviceCategoryModel.findById(_id)
          if(!existService){
            return NextResponse.json({
                success:false,
                message:"Updating failed,service not exist",
            })

          }

          existService.title = title || existService.title
          existService.slug = slug || existService.slug
          existService.featureImage = featureImage || existService.featureImage
          existService.discription = discription || existService.discription
       const updatedService = await existService.save();

       return NextResponse.json({
        success:true,
        message:"Service update successfully!",
        data:updatedService
       })


        
    } catch (error) {
            console.log("error at put in servicecategory",error);
        
        return NextResponse.json({
            success:false,
            message:"Service updating is failed",
            error:error
        })
        
    }
}

export async function DELETE(req) {

    try {
        await ConnectDb()

        const {_id} = await req.json()
        if(!_id){
            return NextResponse.json({
                success:false,
                message:"Did not recived id"
            })
        }
        
        const existService = await serviceCategoryModel.findById(_id)
        if(!existService){
            return NextResponse.json({
                success:false,
                message:"service not exist"
            })
        }
        const deletedservice = await serviceCategoryModel.findByIdAndDelete(_id)
         if (!deletedservice) {
      return NextResponse.json({
        success: false,
        message: "Service not found or already deleted",
      });
        }
           return NextResponse.json({
      success: true,
      message: "Service deleted successfully",
      data: deletedservice,
    })
        
    } catch (error) {
           console.log("error at delete in servicecategory",error);
        
        return NextResponse.json({
            success:false,
            message:"Service deleting is failed",
            error:error
        })
        
    }
    
}