"use client";
import { Input } from "../../../../../components/ui/input";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageHandler } from "@/app/controllers/ImageHandler";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const EditorClient = dynamic(
  () => import("../../../../../components/EditorClient"),
  {
    ssr: false,
  },
);

export default function FormCom({
  onSubmit,
  initalData = {},
  mode = "create",
}) {
  
  const [slug, setslug] = useState(initalData.slug || "");
  const [title, settitle] = useState(initalData.title || "");
  const [shortcontent, setshortcontent] = useState(initalData.shortcontent || "");
  const [content, setcontent] = useState(initalData.content || "");
  const [pageimage, setpageimage] = useState(initalData.pageimage || "");
  const [imagealt, setimagealt] = useState(initalData.imagealt || "");
  const [metatitle, setmetatitle] = useState(initalData.metatitle || "");
  const [metadiscription, setmetadiscription] = useState(initalData.metadiscription || "");
  const [category, setCategory] = useState(initalData.category || "");
  const [imageLoader, setImageLoader] = useState(false);

  // ✅ Category state
  const [categories, setCategories] = useState([]);

  // ✅ Fetch categories
  useEffect(() => {
  async function loadcategory(){
    const res = await fetch("/api/service-category",{method:"GET"})
    const data = await res.json()
    console.log("category",data.data);
    setCategories(data.data)
    
  }
  loadcategory()
  }, []);

  const Imagehanlder = async (e) => {
    e.preventDefault();
    setImageLoader(true);
    try {
      const file = e.target.files[0];
      const res = await ImageHandler(file);

      if (res.success && res.filePath) {
        setpageimage(res.filePath);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setImageLoader(false);
    }
  };

  const imageRemover = (e) => {
    e.preventDefault();
    setpageimage("");
  };

  const formhandler = (e) => {
    e.preventDefault();
    const payload = {
      title,
      slug,
      shortcontent,
      content,
      pageimage,
      imagealt,
      metatitle,
      metadiscription,
      category, // included
    };
    onSubmit(payload);
  };

  useEffect(() => {
    if (initalData && Object.keys(initalData).length > 0) {
      setslug(initalData.slug || "");
      settitle(initalData.title || "");
      setshortcontent(initalData.shortcontent || "");
      setcontent(initalData.content || "");
      setpageimage(initalData.pageimage || "");
      setimagealt(initalData.imagealt || "");
      setmetatitle(initalData.metatitle || "");
      setmetadiscription(initalData.metadiscription || "");
      setCategory(initalData.category || "");
    }
  }, [initalData, mode]);

  useEffect(() => {
    const createslug = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""); // fixed regex
    setslug(createslug);
  }, [title]);

  return (
    <div className="p-7">
      <h1 className="h3 mx-auto w-fit">
        {mode == "edit" ? "Update Page" : "Add New Page"}
      </h1>

      <form onSubmit={formhandler} className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-6 flex flex-col gap-4">
          <span>
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              value={title}
              name="title"
              onChange={(e) => settitle(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="slug">Slug</label>
            <Input
              type="text"
              value={slug}
              name="slug"
              onChange={(e) => setslug(e.target.value)}
            />
          </span>

          {/* ✅ Category dropdown */}
          <span className=" flex flex-col " >
            <label htmlFor="category">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border px-2 py-1"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </span>

          <span className="flex flex-col">
            <label htmlFor="shortcontent">Short Content</label>
            <textarea
              className="h-18 max-h-30 border-2"
              value={shortcontent}
              name="shortcontent"
              placeholder="write short content"
              onChange={(e) => setshortcontent(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="content">Content</label>
            <EditorClient
              value={content}
              onChange={(content) => setcontent(content)}
            />
          </span>
        </div>

        <div className="col-span-6 flex flex-col gap-4">
          <span>
            {!pageimage && !imageLoader ? (
              <span>
                <label htmlFor="">Image</label>
                <Input type="file" onChange={Imagehanlder} />
              </span>
            ) : imageLoader ? (
              <div className="h-56 w-full bg-gray-200 animate-pulse rounded-md"></div>
            ) : (
              <span>
                <label htmlFor="">Image</label>
                <div className="h-56 w-full overflow-hidden relative">
                  <Image
                    width={250}
                    height={250}
                    alt="h"
                    src={pageimage}
                    className="h-full w-full object-cover object-center"
                  />
                  <span
                    onClick={imageRemover}
                    className="absolute top-4 right-4 rounded-full cursor-pointer bg-white-1 p-1"
                  >
                    <X />
                  </span>
                </div>
              </span>
            )}
          </span>

          <span>
            <label htmlFor="imagealt">Image Alt</label>
            <Input
              type="text"
              value={imagealt}
              name="imagealt"
              onChange={(e) => setimagealt(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="metatitle">Meta Title</label>
            <Input
              type="text"
              value={metatitle}
              name="metatitle"
              onChange={(e) => setmetatitle(e.target.value)}
            />
          </span>

          <span className="flex-col flex">
            <label htmlFor="metadiscription">Meta Description</label>
            <textarea
              className="border h-30"
              type="text"
              value={metadiscription}
              name="metadiscription"
              onChange={(e) => setmetadiscription(e.target.value)}
            />
          </span>

          <div className="flex justify-end">
            <Button className="w-fit text-white-1">
              {mode == "edit" ? "Update Page" : "Add Page"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
