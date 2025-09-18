"use client";

import { useEffect, useState } from "react";

export default function AboutPlace({ register, errors, setValue, getValues }) {
  const bedrooms = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5+" },
  ];
const [selected, setSelected] = useState("");

useEffect(() => {
    const current = getValues ? getValues("bedrooms") : "";
    if (current) setSelected(current);
  }, [getValues]); 

  const handleBedroomClick = (value) => {
    setSelected(value);
    setValue("bedrooms", value);
  };


  return (
    <div className="place-form">
      <h2 className="h2 ">Tell us a bit about your place</h2>
      <p className="h6 text-gray-400">This helps us estimate your move size.</p>

      <p className="h5 mt-6">Number of bedrooms</p>
      <div className="flex gap-4 mt-4">
        {bedrooms.map((bedroom, index) => {
         

          return (
            <div
              key={index}
              onClick={() => handleBedroomClick(bedroom.value)}
              className={`size-10 border rounded-full flex items-center justify-center text-lg font-medium cursor-pointer
                ${selected===bedroom.value ? "bg-gray-600 text-white-1" : "bg-gray-200 hover:bg-gray-100"}`}
            >
              {bedroom.value}
            </div>
          );
        })}
      </div>

      {/* Hidden input to connect with react-hook-form */}
      <input type="hidden" {...register("bedrooms", { required: true })} />

      {errors.bedrooms && (
        <p className="text-red-500 text-sm mt-2">Please select number of bedrooms.</p>
      )}
    </div>
  );
}
