"use client";
import LInkArrow from "@/components/link/LInkArrow";
import BorderVerticalThree from "@/components/shared/BorderVerticalThree";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import HomeOneServiceSingleItem from "./HomeOneServiceSingleItem";

const HomeOneService = () => {
  return (
    <section className="spt120px spb120px fade-wrapper overflow-hidden bg-white-4">
      <div className="container">
        {/* section header */}
        <div className="flex justify-between gap-6 max-md:flex-col md:items-center">
          <div className="max-w-[416px]">
            <SectionSubTitle text="Services" />
            <SectionTitle text="Our Featured Products." className="pt-3" />
          </div>
          <div className="max-w-[340px] max-md:flex max-md:flex-col max-md:gap-4 md:self-end">
            <LInkArrow
              linkText="All Services"
              link="/services"
              className="max-md:order-2 md:place-content-end"
              roundClassName="max-md:size-10"
            />
            <SectionText
              text="Online and mobile banking provide convenient access to your accounts, "
              className="md:spt40px"
            />
          </div>
        </div>
        {/* section body */}
        <div className="smt60px flex flex-col gap-6 md:gap-10">
          <HomeOneServiceSingleItem
            title="Boost your Payments"
            text="You could receive payments straight into your company bank account or open a Babuz merchant account and collect funds there."
            buttonLInk="/service-details"
            hoverImage="bg-[url('/images/hover-image.png')]"
          />
          <BorderVerticalThree />
          <HomeOneServiceSingleItem
            title="Agent 
            Banking"
            text="Stay updated. check your bank account to manage funds and track transactions securely."
            buttonLInk="/service-details"
            hoverImage="bg-[url('/images/hover-image-2.png')]"
          />
          <BorderVerticalThree />
          <HomeOneServiceSingleItem
            title="Savings 
            Account"
            text="While it may be more challenging, some banks offer loans for individuals with bad credit. However, interest rates and terms may not be as favorable."
            buttonLInk="/service-details"
            hoverImage="bg-[url('/images/hover-image-3.png')]"
          />
          <BorderVerticalThree />
          <HomeOneServiceSingleItem
            title="Pay Out & Refund"
            text="You could receive payments straight into your company  Babuz merchant account and collect funds there."
            buttonLInk="/service-details"
            hoverImage="bg-[url('/images/hover-image-4.png')]"
          />
          <BorderVerticalThree />
        </div>
      </div>
    </section>
  );
};

export default HomeOneService;
