import image1 from "@/../public/images/education-loan/loan-everyone-1.png";
import image2 from "@/../public/images/education-loan/loan-everyone-2.png";
import RoundedLink from "@/components/link/RoundedLink";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

const EducationLoanEveryOne = () => {
  return (
    <section className="spy120px fade-wrapper relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 grid-cols-7 gap-4 sm:grid lg:col-end-9 xl:col-end-8 xxl:gap-6">
            <Image
              src={image1}
              width={416}
              height={503}
              alt="Education Loan for everyone one"
              className="appear-down col-start-1 col-end-5"
            />
            <Image
              src={image2}
              width={306}
              height={503}
              alt="Education Loan for everyone two"
              className="appear-down col-start-5 col-end-8 max-sm:mt-3"
            />
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-9">
            <SectionSubTitle text="Varied offers for boundless ambitions" />
            <SectionTitle
              text="Educations loans for everyone"
              className="h2 mt-3 max-w-[350px]"
            />
            <SectionText
              text="Get education loan offers at great interest rates"
              className="spt24px fade-top"
            />
            <ul className="spt32px fade-top flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <IconCircleCheck />{" "}
                <span className="m-text text-black-1">
                  No SSN or credit history required
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconCircleCheck />{" "}
                <span className="m-text text-black-1">
                  Checking for rate won&apos;t impact credit score
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconCircleCheck />{" "}
                <span className="m-text text-black-1">No prepayment fees</span>
              </li>
            </ul>
            <RoundedLink
              buttonText="Apply now"
              link="/contact-us"
              className="smt40px"
            />
          </div>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default EducationLoanEveryOne;
