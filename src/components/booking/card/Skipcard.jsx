"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";

export const Skipcard = ({item,onClick}) => {
  const [tones, settones] = useState(item.tones);
  const baseprice = 640;

  const substractTones = () => {
    if (tones > 5) {
      settones((e) => e - 1);
    }
  };
  const AddTones = () => {
    settones((e) => e + 1);
  };

 const totalprice = item.baseprice + item.toneprice * tones;


  return (
    <div  className=" min-h-[25rem]  w-[18rem] rounded-xl shadow-md  bg-white-1   p-6  ">
      <div className="img  mx-auto w-full overflow-hidden rounded-3xl ">
        <img
          src="/img/innerimg/truck.jpg"
          alt=""
          className=" theme-transition-3  size-full object-cover object-center group-hover:scale-[1.1] "
        />
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-4   ">
        {/* titile */}
        <div>
          <span className=" h5 font-oswald font-semibold  text-primary group-hover:text-white-1 ">
          {item.label}
          </span>
        </div>
        {/* tones */}
        <div className="flex items-center gap-2   ">
          {/* - */}
          <div className=" flex items-center border rounded gap-2 px-1 text-black-3 h6  " >
            <button onClick={substractTones} className=" h-full border-r pr-1 ">
              <IconMinus size={15} className="  " />{" "}
            </button>
            {/* tone */}
            <span className="">{tones}</span>
            {/* + */}
            <button onClick={AddTones} className="border-l pl-1   ">
              <IconPlus size={15} className="  " />{" "}
            </button>
          </div>
          <span className=" h6 " >/Tones</span>
        </div>

        <div className=" h6 rounded-full px-4 py-2 group-hover:text-white-1 ">
          <span>£</span>
          <span>{totalprice}</span>
          <span>(+ VAT)</span>
        </div>
        <button onClick={onClick} className=" rounded-full bg-primary/80 px-4 py-2  text-white-1 group-hover:bg-white-1 group-hover:text-primary ">
          Buy Now
        </button>
      </div>
    </div>
  );
};
