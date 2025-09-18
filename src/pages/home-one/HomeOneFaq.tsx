"use client";
import faqCoin from "@/../public/images/home-one/faq-coin.png";
import faqDonate from "@/../public/images/home-one/faq-donat.png";
import faqImage from "@/../public/images/home-one/faq-image.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import SingleFaq from "./SingleFaq";

export const faqData = [
{
  question: "What is skip hire and why should I use it in London?",
  answer:
    "Skip hire is the service of providing large containers for the safe disposal of waste from domestic and commercial projects, including clearances, renovations, and construction sites. It is a cost-effective, convenient solution, especially for residents and businesses in London where waste disposal regulations are strict.",
},
{
  question: "What areas and postcodes do you cover?",
  answer:
    "We offer skip hire, waste clearance, and materials supply in all London boroughs and postcodes, including Central (EC, WC), North (N, NW, EN), East (E, IG, RM), South (SE, SW, CR, BR), and West London (W, UB, TW, HA).",
},
{
  question: "How long can I keep the skip for?",
  answer:
    "Standard hire periods range from 7 to 14 days. Longer or shorter terms can be arranged to suit your needs; please discuss this when booking your skip.",
},
{
  question: "What sizes of skips are available?",
  answer:
    "Our skip range starts at 4-yard mini skips (for garden and household waste), going up to 16-yard maxi skips for bulky or heavy materials, and 20–40-yard roll-on roll-off skips for large commercial sites.",
},
{
  question: "Do I need a permit for a skip on the road?",
  answer:
    "Yes, if your skip will be located on a public highway or road, a council-issued skip permit is required. We can arrange the permit on your behalf; costs and durations vary depending on borough regulations.",
},


];

const HomeOneFaq = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <div className="spy120px relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 items-center justify-between gap-6">
          <div className="col-start-1 max-lg:col-end-13 lg:col-end-8 xl:col-end-7">
            <SectionSubTitle text="FAQ" />
            <SectionTitle text="Frequently ASked Questions" />
            <div className="spt60px">
              <div className="flex flex-col justify-between gap-8">
                {faqData?.map(({ question, answer }, index) => (
                  <SingleFaq
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
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-8 xl:col-start-9">
            <Image
              src={faqImage}
              width={457}
              height={476}
              alt="faq image"
              className="max-lg:mx-auto max-lg:block"
            />
          </div>
        </div>
      </div>
      <Lines />
      <Image
        src={faqDonate}
        width={219}
        height={200}
        alt="faq donate"
        className="absolute right-5 top-5 max-lg:size-20 animate-spin-slow sm:right-20 sm:top-16 lg:max-4xl:size-40 shrink-0 4xl:right-[132px] 4xl:top-[74px]"
      />
      <Image
        src={faqCoin}
        width={229}
        height={193}
        alt="faq coin"
        className="absolute bottom-[87px] left-0 hidden 4xl:block"
      />
    </div>
  );
};

export default HomeOneFaq;
