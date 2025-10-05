"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchData, deleteData } from "./action";
import { useEffect, useState } from "react";
import Image from "next/image";
import {  EditIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Category() {
  const [category, setcategory] = useState([]);
  const [isloading,setisloading] = useState(false)
  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      console.log(data);
      
      setcategory(data);
    }

    loadData();
  }, []);
  const deleteHandler = async (id)=>{
    console.log('delete');
    
setisloading(true)
  try {
    const  data = await deleteData(id)
    setisloading(false)
    
  } catch (error) {
    console.log(error);
    
    
  }
  finally{
    setisloading(false)
  }

    
  }

  return (
    <div className=" p-7  ">
      <h1 className="h3 mx-auto w-fit font-semibold">All Categories</h1>
      <div className="flex justify-end"> <Link href={'/admin/category/add-new-category'} ><Button className=" text-white-1" >Add New Category</Button></Link> </div>
      <div className="mt-4" >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]  ">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Discription</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {category.map((item, id) => {
              return (
                <TableRow key={id} className="  ">
                  <TableCell className=" ">
                    {" "}
                    <div className=" h-full w-[70%] overflow-hidden rounded-lg">
                      <Image
                        width={250}
                        height={250}
                        alt={item.title}
                        src={item.featureImage}
                        className=" h-full w-full object-contain object-center "
                      />
                    </div>{" "}
                  </TableCell>
                  <TableCell> {item.title} </TableCell>
                  <TableCell className="">
                    {" "}
                    {item.discription?.split(" ").slice(0, 10).join(" ") +
                      (item.description?.split(" ").length > 10 ? "..." : "")}
                  </TableCell>
                  <TableCell className=" w-24 ">
                    <div className="flex w-full justify-between ">
                      <EditIcon   />
                      <Trash2 onClick={()=>{deleteHandler(item._id)}}  />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
