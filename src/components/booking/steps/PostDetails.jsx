"use client";
import SectionInnerTitle from "@/components/shared/SectionInnerTitle";
import { cn } from "@/utils/cn";
import { IconPhoneCall } from "@tabler/icons-react";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function PostDetails  () {
  const { register,watch } = useFormContext();
  const selected = watch('permitOnHighway')
  const selectedPostcode = watch("postcodeArea");
  

  return (
    <div className=" space-y-8 ">
      <h5 className="  h5 text-center " ><span className="  font-semibold text-primary " >Step 2:</span> Please Indicate your skip requirements below</h5>

      <div className=" flex justify-between gap-8 ">
        {/* Full Postcode */}
        <div className=" w-1/2">
          <label className="mb-2 block h6 text-primary font-semibold">
            Full Postcode
          </label>
         <div className="flex postcode overflow-hidden " >
             <span className="  top-[2.1rem] left-4 py-1 border-r-2 border-primary/50  pr-2   " >{selectedPostcode}</span>
             <input
            type="text"
            {...register("fullPostcode", {
              required: "Full postcode is required",
            })}
            className=" text-black-4 font-medium tracking-wider  px-2 placeholder-black-3/80 w-full  "
            placeholder="ef3"
          />
         </div>
        
        </div>

        {/* Delivery Date */}
        <div className=" w-1/2  ">
          <label className="mb-2 block h6 text-primary  font-semibold">
            Delivery Date
          </label>
          <input
            type="date"
            {...register("deliveryDate", {
              required: "Delivery date is required",
            })}
            className=" date !py-3  "
              onFocus={(e) => e.target.showPicker?.()}
        
          />
        </div>
      </div>

      <div className="relative min-h-32  w-full rounded-3xl border-2 border-primary px-10 py-10  ">
        <span className="  absolute -top-[1.3rem] left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-2 font-semibold text-white-1 ">
          Permit check
        </span>
        {/* <SectionInnerTitle text="" /> */}
        <span className=" h5 mb-8 block font-semibold text-center ">
          Will the skip be placed on a public highway?
        </span>
        <div className=" flex flex-col items-center justify-center ">
         
          <div className="flex  gap-4" >
            <label className={cn(" h6 rounded-full border-2 border-primary  px-6  py-2 font-semibold  ",{"bg-primary/10 text-primary":selected==="Yes"})}>
            <input
              type="radio"
              value="Yes"
              {...register("permitOnHighway", {
                required: "Please select an option",
              })}
               className=" mr-2 appearance-none w-3 h-3 border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary transition"
            />
            Yes
          </label>
           <label className={cn(" h6 rounded-full border-2 border-primary  px-6  py-2 font-semibold  ",{  "bg-primary/10 text-primary" : selected==='No'})}>
            <input
              type="radio"
              value="No"
              {...register("permitOnHighway", {
                required: "Please select an option",
              })}
              className=" mr-2 appearance-none w-3 h-3 border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary transition "
            />
            No
          </label>
          </div>

          {selected==='Yes' && 
          <div className=" w-[95%] bg-zinc-100  mt-8  rounded-lg p-6 font-semibold" >
            <span className=" font-medium " >As your skip requires a licence to be kept on the road. Please call the number below so we can get the correct information from you. </span>
            <a href="tel:#"><span className=" text-primary flex gap-2 h4  mt-3   font-oswald " ><IconPhoneCall size={35} />1234657</span></a>
          </div>  }
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Job Type</label>

        <select
          {...register("jobType", { required: "Job type is required" })}
          className="w-full rounded-full outline-none  border tracking-wider px-4 focus:border-primary py-2"
        >
          <option value="">-- Select Job Type --</option>
          <option value="skip-delivery">Skip Delivery</option>
          <option value="roll-on-roll-off">Roll on Roll off</option>
          <option value="collection">Skip Collection</option>
          <option value="exchange">Skip Exchange</option>
          <option value="wait-and-load">Skip Wait and load</option>
          <option value="waste-removal">Transit Waste Removal</option>
        </select>
      </div>
    </div>
  );
};
