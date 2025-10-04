"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {ImageHandler} from "@/app/controllers/ImageHandler"

export default function Addnew(){
    const [title,settitle] = useState()
    const [slug,setslug] = useState()
    const [discription,setdiscription] = useState()
    const [featureimage,setfeatureimage] = useState()
    const [formData,setformData] = useState()
    console.log(title);
    
 
    const formhandler = (e)=>{
        e.preventDefault();
    }
    useEffect(()=>{
        if(title){
            const slugText = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g,"-")
        .replace(/[^a-z0-9-]/g,"")
        setslug(slugText)
        }

    },[title])
   const handleImageChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const res = await ImageHandler(file);
    if (res.success) {
      setfeatureimage(res.filePath); // preview uploaded image
    } else {
      console.error("Upload failed:", res.message);
    }
  } catch (err) {
    console.error("Error uploading image:", err);
  }
};
        return (
        <div className=" bg-zinc-600  p-7 " >
            <h1 className=" w-fit mx-auto h3 " >Add New Category</h1>
            <div className=" w-full h-full border mt-7">
                <form onSubmit={formhandler}  className=" grid grid-cols-12 "  >
                 <div className=" col-span-7 flex  flex-col gap-4 " >
                       <Input id="title" placeholder="Title" type="text" name="title"  value={title} onChange={(e)=>{settitle(e.target.value)}}  />
                    <Input id="slug" placeholder="Slug" type="text" name="slug" value={slug}  />
                    <textarea id="description" placeholder="Description" type="textarea" name="discription"  value={discription} onChange={(e)=>{setdiscription(e.target.value)}}    />
                 </div>
                <div className=" border col-span-5" >
                        <Input id="featureimage" placeholder="Featureimage" type="file" accept="image/*" name="featureimage" onChange={handleImageChange}   />
                        <img src={featureimage} alt="" />
                    <Button>Add New Category</Button>
                </div>
                </form>

            </div>

        </div>
    )
}