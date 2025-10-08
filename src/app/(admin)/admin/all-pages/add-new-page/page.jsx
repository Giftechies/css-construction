"use client" 
import { useRouter } from "next/navigation";
 import FormCom from "../component/FormCom";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function AllPages(){

    const route = useRouter()
    const [isloader,setIsloader] = useState(false)
    const createHandler = async (data)=>{


       try {
        setIsloader(true)
         const res =  await fetch("/api/page",{
             method:"POST",
             body:JSON.stringify(data)
         })
         const responed= await res.json()
         console.log("page create",responed);
         if(responed.success){
            setIsloader(false)
            route.push("/admin/all-pages")
 
         }
       } catch (error) {
console.log(error);

       }finally{
        setIsloader(false)
       }

        

    }
    return(
        <div className="relative" >
          {isloader &&   <div className=" absolute inset-0 w-full h-full bg-black-4/50 z-50 flex items-center justify-center " ><Loader2 className="size-16 animate-spin text-primary z-50" /></div>}
            <FormCom onSubmit={createHandler}  />
        </div>
    )
}