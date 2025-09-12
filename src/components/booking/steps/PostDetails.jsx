"use client";
import SectionInnerTitle from "@/components/shared/SectionInnerTitle";
import { cn } from "@/utils/cn";
import { IconPhoneCall } from "@tabler/icons-react";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const PostDetails = () => {
  const { register, control,watch } = useFormContext();
  const selected = watch('permitOnHighway')
  const selectedPostcode = watch("postcodeArea");
  console.log("code>>>>>>>>",selectedPostcode);
  

  return (
    <div className=" space-y-8 ">
      <SectionInnerTitle
        text="Step 2: Please Indicate your skip requirements below"
        className="text-center"
      />

      <div className=" flex justify-between gap-8 ">
        {/* Full Postcode */}
        <div className=" w-1/2">
          <label className="mb-2 block text-sm font-medium">
            Full Postcode
          </label>
         <div className="flex postcode overflow-hidden " >
             <span className="  top-[2.1rem] left-4 py-1 border-r-2 border-primary/50  pr-2   " >{selectedPostcode}</span>
             <input
            type="number"
            {...register("fullPostcode", {
              required: "Full postcode is required",
            })}
            className=" text-white-3 px-2  "
          />
         </div>
        
        </div>

        {/* Delivery Date */}
        <div className=" w-1/2  ">
          <label className="mb-2 block text-sm font-medium">
            Delivery Date
          </label>
          <input
            type="date"
            {...register("deliveryDate", {
              required: "Delivery date is required",
            })}
            className=" date  "
        
          />
        </div>
      </div>

      <div className="relative min-h-32  w-full rounded-lg border-2 border-primary px-10 py-10  ">
        <span className="  absolute -top-[1.3rem] left-4 rounded-full bg-primary px-4 py-2 font-semibold text-white-1 ">
          Permit check
        </span>
        {/* <SectionInnerTitle text="" /> */}
        <span className=" h3 mb-8 block font-semibold ">
          Will the skip be placed on a public highway?
        </span>
        <div className="space-x-4">
         
          <label className={cn(" h5 rounded-full border-2 border-primary  px-4  py-2 font-semibold  ",{"bg-primary/10 text-primary":selected==="Yes"})}>
            <input
              type="radio"
              value="Yes"
              {...register("permitOnHighway", {
                required: "Please select an option",
              })}
            //   className="mr-2"
               className=" mr-2 appearance-none w-3 h-3 border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary transition"
            />
            Yes
          </label>
           <label className={cn(" h5 rounded-full border-2 border-primary  px-4  py-2 font-semibold  ",{  "bg-primary/10 text-primary" : selected==='No'})}>
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

          {selected==='Yes' && 
          <div className=" w-[95%] bg-zinc-200  mt-8  rounded-lg p-6 font-semibold" >
            <h4>As your skip requires a licence to be kept on the road. Please call the number below so we can get the correct information from you. </h4>
            <span className=" text-primary flex gap-2 h4  mt-2   font-oswald " ><a href="tel:#"><IconPhoneCall className= " h-10 w-12 " /></a>1234657</span>
          </div>  }
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Job Type</label>

        <select
          {...register("jobType", { required: "Job type is required" })}
          className="w-full rounded border px-3 py-2"
        >
          <option value="">-- Select Job Type --</option>
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
