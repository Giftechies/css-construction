import image2 from "@/../public/images/business-loan/document-1.png";
import image1 from "@/../public/images/business-loan/document-2.png";
import RoundedLink from "@/components/link/RoundedLink";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

const DocumentRequired = () => {
  return (
    <section className="spy120px fade-wrapper relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 lg:col-start-1 lg:col-end-6">
            <SectionSubTitle text="Business loan" />
            <SectionTitle
              text="Documents Required after Digital Approval"
              className="h2 mt-3 "
            />
            <SectionText
              text="This section provides an overview of what banking is and its importance in the financial system."
              className="spt24px fade-top"
            />
            <ul className="spt32px flex flex-col gap-4">
              <li className="appear-down flex items-center gap-3">
                <IconCircleCheck />{" "}
                <span className="m-text text-black-1">
                  Same day approval and multiple funding options
                </span>
              </li>
              <li className="appear-down flex items-center gap-3">
                <IconCircleCheck />{" "}
                <span className="m-text text-black-1">
                  Access loans without origination fees
                </span>
              </li>
              <li className="appear-down flex items-center gap-3">
                <IconCircleCheck />{" "}
                <span className="m-text text-black-1">
                  Borrow up to $250,000
                </span>
              </li>
            </ul>

            <RoundedLink
              buttonText="Apply now"
              link="/contact-us"
              className="smt40px"
            />
          </div>
          <div className="col-start-1 col-end-13 grid-cols-7 gap-4 max-lg:row-start-1 sm:grid lg:col-start-6 lg:col-end-13 xxl:gap-6">
            <div className="col-start-1 col-end-4 overflow-hidden">
              <Image
                src={image2}
                width={306}
                height={503}
                alt="Business Loan for everyone two"
                className="reveal-img parallax-img "
              />
            </div>
            <div className="col-start-4 col-end-8 overflow-hidden max-sm:mt-3">
              <Image
                src={image1}
                width={416}
                height={503}
                alt="business Loan for everyone one "
                className="reveal-img parallax-img"
              />
            </div>
          </div>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default DocumentRequired;
