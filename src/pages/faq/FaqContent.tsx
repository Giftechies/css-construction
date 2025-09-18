"use client";
import SectionText from "@/components/shared/SectionText";
import { useState } from "react";
import { faqData } from "../home-one/HomeOneFaq";
import HomeTwoSingleFaq from "../landing-two/HomeTwoSingleFaq";

const FaqContent = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <section className="spy120px fade-wrapper relative" id="scrollPosition">
      <div className="container">
        <div className="flex justify-between gap-6 max-lg:flex-wrap">
          <h3 className="d2 title-animation max-w-[596px] font-medium">
            Frequently asked question
          </h3>
          <SectionText
            text="Get answers to all questions you have and boost your knowledge so you can save, invest and spend smarter. "
            className="fade-top max-w-[416px]"
          />
        </div>
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
                key={`faq-two-${question}`}
                id={`faq-two-${index}`}
                question={question}
                answer={answer}
                dropDown={dropDown}
                setDropDown={setDropDown}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContent;
