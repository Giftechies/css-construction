"use client";
import image4 from "@/../public/images/education-loan/education-faq.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import Image from "next/image";
import { useState } from "react";
import { faqData } from "../home-one/HomeOneFaq";
import HomeTwoSingleFaq from "../landing-two/HomeTwoSingleFaq";

const EducationLoanFaq = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <section className=" bg-primary/5 relative overflow-hidden">
      <div className="container">
        {" "}
        <div className="smt120px grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-7">
            <SectionSubTitle className="font-oswald"  text="FAQ" />
            <h3 className="h3 mt-5 font-medium">General Skip Hire</h3>
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
              src={image4}
              width={526}
              height={526}
              alt="Service details four"
            />
          </div>
        </div>
      </div>
      {/* <Lines /> */}
    </section>
  );
};

export default EducationLoanFaq;
