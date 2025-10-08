"use client"
import { useEffect, useState } from "react";
import FormCom from "../../component/FormCom"
import { FetchPageId } from "../../component/action";
import { Updatepage } from "../../component/action";
export default function Editpage({params}){

    const [IsinitialData,setIsinitialData] = useState({})
    useEffect(()=>{
        async function fetchpage(){
            const res = await FetchPageId(params.id)
            console.log(res.data,"ds res>>>>");
                if (res.success && res.data) {
      setIsinitialData(res.data); 
    }

        }
        fetchpage()

    },[])
  const handleSubmit = async (formData) => {
    try {
        console.log("caliin up function");
        
      const res = await Updatepage({ data: formData, params });
      if (res.success) {
        alert("Page updated successfully!");
      }
    } catch (error) {
      alert("Update failed!");
    }
  };
     
    return(
        <div>
            <FormCom onSubmit={handleSubmit} initalData={IsinitialData} mode="edit" />
        
        </div>
    )
}