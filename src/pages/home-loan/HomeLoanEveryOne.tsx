import image from "@/../public/images/home-loan/home-loan-everyone.png";

import RoundedLink from "@/components/link/RoundedLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

const HomeLoanEveryOne = () => {
  return (
    <section className="spy120px fade-wrapper relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 grid-cols-7 gap-4 lg:col-end-9 xl:col-end-8 xxl:gap-6">
            <Image
              src={image}
              width={746}
              height={503}
              alt="Home Loan for everyone"
              className="appear-down"
            />
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-9">
            <SectionSubTitle text="Varied offers for boundless ambitions" />
            <SectionTitle
              text="Home loans
              for everyone"
              className="h2 mt-3 max-w-[380px]"
            />
            <SectionText
              text="Get home loan offers at great interest rates"
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

            <RoundedLink buttonText="Apply now" link="/contact" className="smt40px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanEveryOne;
