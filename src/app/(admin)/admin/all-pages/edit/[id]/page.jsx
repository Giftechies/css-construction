"use client"
import { useEffect } from "react";
import FormCom from "../../component/FormCom"

export default function AllPages(){

    // useEffect(()=>{

    // })

    const  handlesubmit = async (data)=>{
        console.log(data);
        
    }
     
    return(
        <div>
            <FormCom onSubmit={handlesubmit} />
        
        </div>
    )
}