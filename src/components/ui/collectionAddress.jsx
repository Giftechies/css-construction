"use client"
import { cn } from "@/lib/utils";
import { IconMapPinExclamation } from "@tabler/icons-react";
import { Mail, Map, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function collectionAddress({ className }) {
  return (
    <section className={cn("  mx-auto  ", className)}>
      <h3 className=" capitalize  h3 font-semibold mb-4 mt-2 ">Do you have any Questions!</h3>
      <main className="grid grid-cols-1 gap-4 md:mt-12 ">
        <div className=" p-4  flex flex-col gap-2  ">
            <div className="flex gap-4 h5 items-center  text-primary " ><PhoneCall size={25} /> Call </div>
            <span className=" h6  font-semibold " ><a href="tel:0208 574 6333">0208 574 6333</a></span>
         
        </div>
        <div className=" p-4  flex flex-col gap-2  ">
            <div className="flex gap-4 h5 items-center  text-primary " ><Mail size={25} /> Email </div>
            <span className=" h6 font-semibold !tracking-tight " ><a href="mailto:info@csserv.uk">info@csserv.uk</a></span>
        </div>
        <div className=" p-4  flex flex-col gap-2  ">
            <div className="flex gap-4 h5 items-center  text-primary " ><IconMapPinExclamation size={25} />Invoicing Address </div>
          <Link
      href="https://www.google.com/maps?q=GK+Depot,+Trout+Road,+West+Drayton,+UB7+7SN"
      target="_blank"              // 🆕 opens in new tab
      rel="noopener noreferrer"   // 🔐 security best practice
      className="h6 font-semibold !tracking-tight "
    >
      
    
      GK Depot, Trout Road, West Drayton, UB7 7SN
    </Link>
        </div>
       
      </main>
    </section>
  );
}
