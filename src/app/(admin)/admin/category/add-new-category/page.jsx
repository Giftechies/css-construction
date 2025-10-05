'use client'
import { useRouter } from "next/navigation"
import FormCom from "../component/FormCom"

export default function AddNew(){
  const route = useRouter()

  const CreateHandler = async (data)=>{
     try {
      const res = await fetch("/api/service-category",{
        method:"POST",
        body:JSON.stringify(data)
      })
      const resdata = await res.json()
      if(resdata.success){
        route.push('/admin/category')

      }
      console.log("dkjfds>>>",resdata);
      
      
    } catch (error) {
      console.log("formhandler>>>>",error);
      
      
    }
  }
  return(
    <FormCom onSubmit={CreateHandler} mode="create" />
  )
}