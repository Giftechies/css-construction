"use client"
import { cn } from "@/lib/utils";
import { IconMapPinExclamation } from "@tabler/icons-react";
import { Mail, Map, PhoneCall } from "lucide-react";

export default function collectionAddress({ className }) {
  return (
    <section className={cn(" ml-auto  ", className)}>
      <h3 className=" capitalize  h4 mb-4 mt-2 ">Do you have any Questions!</h3>
      <main className="grid grid-cols-2 gap-4 mt-12 ">
        <div className=" p-4  flex flex-col gap-2  ">
            <div className="flex gap-4 h5 items-center " ><PhoneCall size={25} /> Call </div>
            <span className=" h6 text-primary font-semibold " ><a href="tel:12346789">12346789</a></span>
         
        </div>
        <div className=" p-4  flex flex-col gap-2  ">
            <div className="flex gap-4 h5 items-center " ><Mail size={25} /> Email </div>
            <span className=" h6 text-primary font-semibold !tracking-tight " ><a href="mailto:cssconstruction@gmail.com">cssconstruction@gmail.com</a></span>
        </div>
        <div className=" p-4  flex flex-col gap-2  ">
            <div className="flex gap-4 h5 items-center " ><IconMapPinExclamation size={25} />Invoicing Address </div>
            <span className=" h6 text-primary font-semibold !tracking-tight " >42 High Street
Croydon, <br /> CR0 1AA</span>
        </div>
        <div className=" p-4  flex flex-col gap-2  ">
            <div className="flex gap-4 h5 items-center " ><IconMapPinExclamation size={25} />Yard Address </div>
            <span className=" h6 text-primary font-semibold !tracking-tight " >42 High Street Croydon, <br /> CR0 1AA</span>
        </div>
      </main>
    </section>
  );
}
