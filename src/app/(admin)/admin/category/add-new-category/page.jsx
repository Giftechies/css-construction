"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ImageHandler } from "@/app/controllers/ImageHandler";
import Image from "next/image";
import { CrossIcon, X } from "lucide-react";


export default function Addnew() {
  const [title, settitle] = useState();
  const [slug, setslug] = useState();
  const [discription, setdiscription] = useState();
  const [featureImage, setfeatureimage] = useState();

  const formhandler = async (e) => {
    e.preventDefault();
    const formData = {title,slug,discription,featureImage};

    try {
      const res = await fetch("/api/service-category",{
        method:"POST",
        body:JSON.stringify(formData)
      })
      const data = await res.json()
      console.log("dkjfds>>>",data);
      
      
    } catch (error) {
      console.log("formhandler>>>>",error);
      
      
    }
    
  };
  useEffect(() => {
    if (title) {
      const slugText = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      setslug(slugText);
    }
  }, [title]);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file)return

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

  const ImageRemover = ()=>{
    setfeatureimage(null)
  };
  return (
    <div className="   p-7 ">
      <h1 className=" h3 mx-auto w-fit ">Add New Category</h1>
      <div className=" mt-7 h-full w-full  ">
        <form onSubmit={formhandler} className=" grid grid-cols-12 gap-7 ">
          <div className=" col-span-7 flex  flex-col gap-6 ">
           <span  >
             <label htmlFor="title">Title</label>
            <Input
              id="title"
              placeholder="Title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
           </span>

           <span>
            <label htmlFor="slug">Slug</label>
             <Input
              id="slug"
              placeholder="Slug"
              type="text"
              name="slug"
              value={slug}
            />
           </span>
           <span className="flex flex-col" >
            <label htmlFor="discription">Discription</label>
             <textarea
              id="description"
              placeholder="Discription"
              type="textarea"
              name="discription"
              value={discription}
              onChange={(e) => {
                setdiscription(e.target.value);
              }}
              className=" min-h-64 border-2 rounded-lg p-3 "
            />
           </span>
          </div>
          <div className=" col-span-5 flex flex-col justify-between items-end ">
          {!featureImage ?   <span className={`w-full`} >
              <label>Feature Image</label>
              <Input
              id="featureImage"
              placeholder="Featureimage"
              type="file"
              accept="image/*"
              name="featureImage"
              onChange={handleImageChange}
              className="w-full"
            />
            </span>
            :
            <div className="  w-full h-64  relative " >
              <label htmlFor="">Feature Image</label>
              <Image alt="Feature Image" width={250} height={250} src={featureImage} className=" w-full h-full object-cover object-center " />
              <span className=" absolute top-10 p-2 bg-white-1 rounded-full right-5 " onClick={ImageRemover} ><X/></span>
            </div>
            
            }
          
            <Button className=" w-fit text-white-1 " >Add New Category</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
