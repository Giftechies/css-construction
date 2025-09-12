"use client";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { POSTCODE } from "@/components/booking/data/PostCode";
import SectionInnerTitle from "@/components/shared/SectionInnerTitle";

export const  PostCode=()=> {
  const { control } = useFormContext();

  return (
    <div>
    <div className=""  > 
         <SectionInnerTitle text="Step 1: Select the postcode area where your skip will be delivered."  />
         
    </div>

      <Controller
        name="postcodeArea"
        control={control}
        rules={{required:"Please select a postcode"}}
        render={({ field,fieldState }) => (
          <div className=" space-y-2  flex justify-center flex-col  mt-6" >
            <label className="block font-bold h6  text-center ">
              Postcode*
            </label>
            <select
              {...field}
              className=" border rounded mx-auto  sm:w-[70%] px-3 py-2"
            >
              <option value="">-- Select a postcode --</option>
              {POSTCODE.map((pc, idx) => (
                <option key={idx} value={pc}>
                  {pc}
                </option>
              ))}
            </select>
              {/* Show validation error */}
      {fieldState.error && (
        <p className="text-red-500  mx-auto text-sm mt-2">{fieldState.error.message}</p>
      )}
          </div>
        )}
      />
    </div>
  );
}
