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
import Image from "next/image";
import { useEffect, useState } from "react";
import { Deletepage } from "./component/action";
import Link from "next/link";
import { EditIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AllPages() {
  const [Pages, setPages] = useState();

  useEffect(() => {
    async function fetchpage() {
      const res = await fetch("/api/page", {
        method: "GET",
      });
      const data = await res.json();
      console.log("dsfs",data);

      if (data.success) {
        setPages(data.data);
      }
    }
    fetchpage();
  }, []);
  console.log(Pages);

  const deleteHandler = async (id) => {
    const res = await Deletepage(id);
  };

  return (
    <div className=" mx-auto w-10/12   ">
      <h1 className=" h3 text-center font-semibold  ">All Pges</h1>
      <div className="flex justify-end text-white-1" ><Link  href={"/admin/all-pages/add-new-page"}><Button>Add New Page</Button></Link></div>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Image</TableHead>
            <TableHead>Titile</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right w-[100px]  ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { Pages && Pages.map((item, id) => {
            return (
              
              <TableRow>
                <TableCell className="font-medium">
                  <div className=" h-18 w-[70%] overflow-hidden rounded-lg ">
                    <Image
                      height={200}
                      width={200}
                      alt="kd"
                      className=" h-full w-full object-cover object-center  "
                      src={item.pageimage}
                    />
                  </div>
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell> {item.category?.title} </TableCell>
                <TableCell className="text-right">
                  <div className="flex w-full justify-between ">
                    <Link href={`/admin/all-pages/edit/${item._id}`}>
                      {" "}
                      <EditIcon />
                    </Link>
                    <Trash2
                      onClick={() => {
                        deleteHandler(item._id);
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
