"use client";
import faq from "@/../public/img/innerimg/faq.jpg";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import Image from "next/image";
import { useState } from "react";
import { faqData } from "../home-one/HomeOneFaq";
import HomeTwoSingleFaq from "../landing-two/HomeTwoSingleFaq";
import SectionTitle from "@/components/shared/SectionTitle";

const EducationLoanFaq = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <section className="  py-24 bg-primary/5 relative overflow-hidden">
      <div className="container  ">
        {" "}
        <div className=" grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-7">
            <SectionSubTitle className=""  text="FAQ" />
            <SectionTitle  className="h1 text-left  text-black-2 pt-3 " text=" General Skip Hire" />
            
            <div className="smt32px flex flex-col gap-5">
              {faqData?.map(({ question, answer }, index) => (
                <HomeTwoSingleFaq
                  key={`faq-${question}`}
                  id={`faq-${index}`}
                  question={question}
                  answer={answer}
                  dropDown={dropDown}
                  setDropDown={setDropDown}
                />
              ))}
            </div>
          </div>
          <div className="col-start-1 col-end-13 max-lg:row-start-1 lg:col-start-8 ">
            <Image
              src={faq}
              width={526}
              height={526}

              alt="faq img"
              className=" w-full h-full object-center object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLoanFaq;
