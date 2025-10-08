"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Cardskip({ item, isSelected, onClick }) {
  return (
    <div 
      className={cn(
        " group min-h-[16rem]  w-[18rem] cursor-pointer space-y-8  rounded-xl  shadow-md  bg-white-1 p-8  ",
        { "bg-primary/10 ": isSelected },
      )}
    >
      <div className="img  mx-auto w-full overflow-hidden rounded-3xl ">
        <img
          src="/img/innerimg/truck.jpg"
          alt=""
          className=" theme-transition-3  size-full object-cover object-center group-hover:scale-[1.1] "
        />
      </div>
      <div className="mt-4   flex flex-col items-center justify-center gap-4    ">
        <span className=" h5  font-bold  text-primary   ">
          {item.size && ` ${item.size}`}
          {item?.label}
        </span>
        <div className=" h6 rounded-full bg- px-4 py-2 ">
          <span>£{item.rate}(+ VAT)</span>
        </div>
        <button
          onClick={onClick}
          className=" rounded-full bg-primary/80 px-4 py-2  text-white-1  group-hover:bg-primary/90 "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
