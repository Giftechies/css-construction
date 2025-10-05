"use client"
import { useEffect,useState } from "react";
import FormCom from "../../component/FormCom"
import { useRouter } from "next/navigation";



export default function Edit({params}){
    const id = params.id;
    const route = useRouter()
    const [initalData, setinitalData] = useState({})
     async function fetchSingleService(){
        try {
            const res = await fetch(`/api/service-category/${id}`,{
                method:"GET",
            })
         const data = await res.json()
         if(data.success){
        console.log(data);
        setinitalData(data.data)
        

         }

        } catch (error) {
            console.log(error);
            
            
        }
     }
     useEffect(()=>{
        fetchSingleService()

     },[id])

    const EditHandler = async (formdata)=>{
        try {
            const res = await fetch(`/api/service-category/${id}`,{
                method:'PUT',
                body:JSON.stringify(formdata)
            })
            const data = await res.json()
            if(data.success){
                route.push('/admin/category')

            }
            
        } catch (error) {
            console.log(error);
            
            
        }

    }

    return(
        <div>
            <FormCom mode="edit" onSubmit={EditHandler} initalData={initalData} />
        </div>
    )
}