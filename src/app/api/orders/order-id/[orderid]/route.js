import { NextResponse } from "next/server"
import Order from "@/app/helper/models/order"
import { ConnectDb } from "@/app/helper/db"



export  async function GET(req,{params}){
    try {
        await ConnectDb();
        const {orderid} =  params;
        if(!orderid){
            return NextResponse.json({
                success:false,
                mesaage:'Order is required!'
            },{status:500})
        }
        const order = await Order.findById(orderid);

        if(!order){
            return NextResponse.json({
                success:false,
                message:"Order not found!"
            },{status:404})
        }

        return NextResponse.json({
            success:true,
            message:'Order found successfully!',
            data:order
        },{status:200})
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error.message || ' something went worng!!'
        },{status:500})
        
    }
}

export async function PUT(req,{params}){
    try {
        await ConnectDb();

        const {orderid} = await params;
        if(!orderid){
            return  NextResponse.json({
                success:false,
                message:'order id required'
            },{status:200})
        };
        const {status} = await req.json()

        const order = await Order.findByIdAndUpdate(orderid,{
            adminOrderStatus:status
        },{new:true})

        if(!order){
            return NextResponse.json({
                success:false,
                message:'order not found'
            },{status:500})
        };

        return NextResponse.json({
            success:true,
            message:'Order update successfully',
            data:order
        },{status:200})
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error.message
        },{status:500})
        
    }
}