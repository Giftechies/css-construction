"use client";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { useState } from "react";
import { faqData } from "../home-one/HomeOneFaq";
import HomeTwoSingleFaq from "../landing-two/HomeTwoSingleFaq";

const HomeTwoFaq = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <div className="spy120px relative overflow-hidden">
      <div className="container">
        <SectionSubTitle text="FAQ" className="text-center" />
        <SectionTitle
          text="Frequently ASked Questions"
          className="mt-3 text-center"
        />
        <div className="spt60px grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-5">
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
          <div className="flex flex-col justify-between gap-5">
            {faqData?.map(({ question, answer }, index) => (
              <HomeTwoSingleFaq
                key={`faq2-${question}`}
                id={`faq2-${index}`}
                question={question}
                answer={answer}
                dropDown={dropDown}
                setDropDown={setDropDown}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoFaq;
