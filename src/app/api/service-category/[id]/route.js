import { NextResponse } from "next/server";
import {ConnectDb} from "../../../helper/db"
import serviceCategoryModel from "../../../helper/models/serviceCategory";


export  async function GET(req,{params}){
    try {
        await ConnectDb();
        const res = await serviceCategoryModel.findById(params.id)
        if(!res){
            return NextResponse.json({
                success:false,
                message:"Services not found!",
                data:res
            },{status:404})
        }
           return NextResponse.json({
                success:true,
                message:"services is fetched successfully!",
                data:res
            },{status:200})
        
    } catch (error) {
        console.log("error at get in servicecategory",error);
        
        return NextResponse.json({
            success:false,
            message:"feching data is failed",
            error:error
        })
        
    }
}

export  async function PUT(req,{params}){
    try {
        await ConnectDb();
         const {title,slug,featureImage,discription,} = await req.json()
         const  existService = await serviceCategoryModel.findByIdAndUpdate(params.id,{title,slug,featureImage,discription,},  { new: true, runValidators: true })
          if(!existService){
            return NextResponse.json({
                success:false,
                message:"Updating failed,service not exist",
            })

          }

       return NextResponse.json({
        success:true,
        message:"Service update successfully!",
        data:existService
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

export async function DELETE(req,{params}) {

    try {
        await ConnectDb()
        const existService = await serviceCategoryModel.findByIdAndDelete(params.id)
        if(!existService){
            return NextResponse.json({
                success:false,
                message:"service not exist"
            })
        }
           return NextResponse.json({
      success: true,
      message: "Service deleted successfully",
      data: existService,
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