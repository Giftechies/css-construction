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
import { useEffect, useState, useMemo } from "react";
import { Deletepage } from "./component/action";
import Link from "next/link";
import { ChevronLeft, ChevronRight, EditIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AllPages() {
  const [Pages, setPages] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    async function fetchpage() {
      const res = await fetch("/api/page/all", {
        method: "GET",
      });
      const data = await res.json();

      if (data.success) {
        setPages(data.data);
      }
    }
    fetchpage();
  }, []);

  const deleteHandler = async (id) => {
     const res=  await Deletepage(id);
     if(res.success){
      alert("Page deleted successfully")
      
     }
    setPages((prev) => prev.filter((page) => page._id !== id));
  };

  // Filtered pages based on search & category
  const filteredPages = useMemo(() => {
    return Pages.filter((page) => {
      const matchesSearch = page.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = filterCategory
        ? page.category?.title === filterCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [Pages, search, filterCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPages.length / perPage);
  const paginatedPages = filteredPages.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // Unique categories for filter dropdown
  const categories = [...new Set(Pages.map((p) => p.category?.title).filter(Boolean))];

  return (
    <div className="mx-auto w-10/12">
      <h1 className="h3 text-center font-semibold">All Pages</h1>

      <div className="flex flex-col sm:flex-row justify-between mt-4 mb-4 gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // reset page on search
            }}
            className="border px-3 py-2 rounded-lg"
          />
          <select
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value);
              setCurrentPage(1); // reset page on filter
            }}
            className="border px-3 py-2 rounded-lg"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <Link href={"/admin/all-pages/add-new-page"}>
            <Button className="text-white-1" >Add New Page</Button>
          </Link>
        </div>
      </div>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedPages.map((item, id) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">
                <div className="h-18 w-[70%] overflow-hidden rounded-lg">
                  <Image
                    height={200}
                    width={200}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                    src={item.pageimage}
                  />
                </div>
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.category?.title}</TableCell>
              <TableCell className="text-right">
                <div className="flex w-full justify-between">
                  <Link href={`/admin/all-pages/edit/${item._id}`}>
                    <EditIcon />
                  </Link>
                  <Trash2 onClick={() => deleteHandler(item._id)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <Button
            variant={"outline"}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className=""
        >
          <ChevronLeft/>
        </Button>
        <span className="px-3 py-2 rounded-lg border">
          {currentPage} / {totalPages || 1}
        </span>
        <Button
        variant={"outline"}
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className=""
        >
          <ChevronRight/>
        </Button>
      </div>
    </div>
  );
}
