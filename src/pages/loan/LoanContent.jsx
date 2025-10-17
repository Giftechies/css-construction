"use client"
import loan1 from "@/../public/img/innerimg/project1.webp";
import loan2 from "@/../public/img/innerimg/project2.avif";
import loan3 from "@/../public/img/innerimg/skip-hire.jpg";
import loan4 from "@/../public/img/innerimg/project4.avif";
import loan5 from "@/../public/img/innerimg/project6.webp";
import loan6 from "@/../public/img/innerimg/project1.webp";
import RoundedLink from "@/components/link/Round";
import {  IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const LoanContent = () => {
  const [ispopopen, setIspopopen] = useState(false);
  const [imgpath, setimgpath] = useState("");

  const closed = () => {
    setIspopopen(false);
  };

  const open = (link) => {
    setIspopopen(true);
    setimgpath(link.src); // pass the src for popup
  };

  return (
    <section className=" mt-4 relative" id="scrollPosition">
      <div className="container">
        <div className="grid items-center gap-6 max-sm:justify-center sm:grid-cols-3">
          {/* First Column */}
          <div className="flex   w-fit flex-col gap-6">
            <div
              onClick={() => open(loan1)}
              className="group theme-transition-3 relative cursor-pointer w-full "
            >
              <Image
                src={loan1}
                width={416}
                height={425}
                alt="loan image one"
                className=" w-full sm:w-[416px] h-[425px] object-cover object-center "
              />
              {/* hover content */}
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse  sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                {/* <p className="h3 font-medium text-white-1">Education Loan</p> */}
              </div>
            </div>

            <div
              onClick={() => open(loan2)}
              className="group theme-transition-3 relative cursor-pointer"
            >
              <Image
                src={loan2}
                width={416}
                height={278}
                alt="loan image two"
                 className=" w-[416px] h-[278px] object-cover object-center "
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse  sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                {/* <p className="h3 font-medium text-white-1">Business Loan</p> */}
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex w-fit flex-col gap-6">
            <div
              onClick={() => open(loan3)}
              className="group theme-transition-3 relative cursor-pointer"
            >
              <Image
                src={loan3}
                width={416}
                height={300}
                alt="loan image three"
                 className=" w-[416px] h-[300px] object-cover object-center "
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                {/* <p className="h3 font-medium text-white-1">Car Loan</p> */}
              </div>
            </div>

            <div
              onClick={() => open(loan4)}
              className="group theme-transition-3 relative cursor-pointer"
            >
              <Image
                src={loan4}
                width={416}
                height={403}
                alt="loan image four"
                 className=" w-[416px] h-[403px] object-cover object-center "
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                {/* <p className="h3 font-medium text-white-1">Home Loan</p> */}
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex w-fit flex-col gap-6">
            <div
              onClick={() => open(loan5)}
              className="group theme-transition-3 relative cursor-pointer"
            >
              <Image
                src={loan5}
                width={416}
                height={195}
                alt="loan image five"
                 className=" w-[416px] h-[195px] object-cover object-center "
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="View"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent hover:text-black-4"
                />
                {/* <p className="h3 font-medium text-white-1">Personal Loan</p> */}
              </div>
            </div>

            <div
              onClick={() => open(loan6)}
              className="group theme-transition-3 relative cursor-pointer"
            >
              <Image
                src={loan6}
                width={416}
                height={508}
                alt="loan image six"
                 className=" w-[416px] h-[508px] object-cover object-center "
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-[linear-gradient(0deg,#005655_0%,rgba(9,91,90,0.20)_100%)] opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse  sm:flex-col xxl:gap-8">
                <RoundedLink
                  buttonText="view"
                  className="border-primary bg-primary text-white-1 hover:border-accent-3 hover:bg-transparent  hover:text-black-4"
                />
                {/* <p className="h3 font-medium text-white-1">Business Loan</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {ispopopen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  ">
          <div className=" absolute inset-0 z-0 bg-black-4/60 " ></div>
         
          <div className="w-[90%] h-[90%] z-30 relative">
            <img
              src={imgpath}
              className="w-full h-full object-center object-cover"
              alt="Popup Loan"
            />
             <IconX  onClick={closed} className="absolute top-2 right-4 rounded-full bg-white-1 size-8 md:size-12 group-hover:rotate-90 theme-transition-3 text-primary " />
          </div>
        </div>
      )}
    </section>
  );
};

export default LoanContent;
