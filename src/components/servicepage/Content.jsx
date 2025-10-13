"use client"
import { Dot, Section } from "lucide-react";
import Sidebar from "./Sidebar";
import SectionTitle from "../shared/SectionTitle";
import { useState } from "react";

export default function Content({data=[]}){
 
  

    return(
      <section className="   " >
        <main className="container   grid grid-cols-12 py-10 gap-15  " >
            <div className=" col-span-9 "  >
          
           <div dangerouslySetInnerHTML={{ __html: data.content }} className="editor" />
            </div>

            {/* sider bar */}
            <Sidebar className={"sticky top-0 right-0 h-fit col-span-3 "} />
        </main>
      </section>
    )
}