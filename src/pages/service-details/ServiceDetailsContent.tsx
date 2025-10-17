"use client";
import image1 from "@/../public/images/service-details-1.png";
import image2 from "@/../public/images/service-details-2.png";
import image3 from "@/../public/images/service-details-3.png";
import image4 from "@/../public/images/service-details-4.png";
import RoundedLink from "@/components/link/RoundedLink";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import Image from "next/image";
import { useState } from "react";
import { faqData } from "../home-one/HomeOneFaq";
import HomeTwoSingleFaq from "../landing-two/HomeTwoSingleFaq";

const ServiceDetailsContent = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <section
      className="spy120px fade-wrapper relative overflow-hidden"
      id="scrollPosition"
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-6 max-xl:items-center">
          <div
            className="col-start-1 col-end-13 lg:col-end-5
           xl:col-end-4"
          >
            <h3 className="d2 title-animation font-medium">Agent Banking</h3>
          </div>
          <div className="col-start-1 col-end-13 grid grid-cols-7 gap-4 lg:col-start-6 xl:gap-6">
            <SectionText
              text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
              className="fade-top col-start-1 col-end-8 xl:col-end-5"
            />
            <SectionText
              text="Online and mobile banking provide access convenient access to your accounts,"
              className="fade-top col-start-1 col-end-8 xl:col-start-5"
            />
            <div className="col-start-1 col-end-8 h-px w-full bg-white-3/20"></div>
            <ul className="fade-top col-start-1 col-end-9 flex list-inside flex-col gap-3 sm:col-end-4 xl:col-end-3 xl:gap-4">
              <li className="m-text text-black-3">+ Saving Account</li>
              <li className="m-text text-black-3">+ Business Account</li>
              <li className="m-text text-black-3">+ Loan Facility</li>
            </ul>
            <ul className="fade-top col-start-1 col-end-8 flex list-inside flex-col gap-3 sm:col-start-4 xl:col-start-3 xl:col-end-6 xl:gap-4">
              <li className="m-text text-black-3">+ Multiple Accounts</li>
              <li className="m-text text-black-3">+ Expense Track</li>
              <li className="m-text text-black-3">+ International Account</li>
            </ul>
          </div>
        </div>
        <div className="smb60px smt60px grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-9">
            <Image
              src={image1}
              width={856}
              height={450}
              alt="Service DEtails image one"
              className="appear-down"
            />
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-9">
            {" "}
            <Image
              src={image2}
              width={416}
              height={450}
              alt="Service Details image two"
              className="appear-down"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 md:col-end-8 lg:col-end-6">
            <h4 className="h2 title-animation font-semibold">
              Our Processing.
            </h4>
            <SectionText
              text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers pay bills."
              className="fade-top mt-3"
            />
          </div>
        </div>
        <div className="smt40px grid gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
          <div>
            <h5 className="h4 title-animation font-medium">Team working</h5>
            <SectionText
              text="Including salary, bonuses, and benefits like health insurance, retirement plans, and other perks."
              className="fade-top mt-3"
            />
          </div>
          <div>
            <h5 className="h4 title-animation font-medium">Collect Doc</h5>
            <SectionText
              text="Information on who the employee reports to and who reports to them, if applicable."
              className="fade-top mt-3"
            />
          </div>
          <div>
            <h5 className="h4 font-medium">Check & Finalize</h5>
            <SectionText
              text="Details about the work environment, requirements, and any specific working hours."
              className="fade-top mt-3"
            />
          </div>
          <div>
            <h5 className="h4 font-medium">Approved</h5>
            <SectionText
              text="They ensure that employers meet legal requirements and adhere to employment laws."
              className="fade-top mt-3"
            />
          </div>
        </div>
        <div className="spt120px grid grid-cols-12 gap-6">
          <h4 className="h3 title-animation col-start-1 col-end-8 font-medium lg:col-end-7">
            Wealth Management Services. Secure Your Financial Future
          </h4>
        </div>
        <div className="smt60px grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-4 max-lg:hidden">
            <div className="size-[200px] rounded-full bg-accent-3"></div>
          </div>{" "}
          <div className="col-start-1 col-end-13 lg:col-start-4">
            <Image
              src={image3}
              width={966}
              height={450}
              alt="Image"
              className="appear-down"
            />
          </div>
        </div>
        <div className="spt32px grid grid-cols-12 gap-6">
          <SectionText
            text="The focus on sustainability and ethical banking  growing. Explore how banks are incorporating Environmental, Social, and Governance  into their operations and investment strategies."
            className="fade-top col-start-1 col-end-13 sm:col-end-9 lg:col-start-4"
          />
          <SectionText
            text="Modern consumers expect personalized experiences. Learn how banks are leveraging data analytics to tailor their services to individual customer needs, "
            className="col-start-1 col-end-13 sm:col-end-9 lg:col-start-9 lg:col-end-13"
          />
        </div>
        <div className="smt120px grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 overflow-hidden lg:col-end-6 xl:col-end-5">
            <Image
              src={image4}
              width={526}
              height={683}
              alt="Service details four"
              className="reveal-img parallax-img"
            />
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-6">
            <h3 className="h3 title-animation max-w-[285px] font-medium">
              Product making for friendly users
            </h3>
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
          <div className="smt120px col-start-1 col-end-13 flex justify-between max-sm:flex-col max-sm:gap-5 sm:items-center lg:col-start-2 lg:col-end-12">
            <div className="flex max-w-[505px] flex-col gap-5">
              <SectionSubTitle text="Work with us" />
              <h3 className="h2 title-animation font-semibold">
                We would love to hear more about your project
              </h3>
            </div>
            <RoundedLink
              buttonText="Let’s Talk Us"
              link="/contact-us"
              className="lg:size-[160px]"
            />
          </div>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default ServiceDetailsContent;
