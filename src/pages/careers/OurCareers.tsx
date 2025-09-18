import BorderVerticalThree from "@/components/shared/BorderVerticalThree";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import OurCAreersSingleItem from "./OurCAreersSingleItem";

const OurCareers = () => {
  return (
    <section className="spt120px spb120px fade-wrapper bg-white-4">
      <div className="container">
        {/* section header */}
        <div className="text-center">
          <SectionSubTitle text="Our Careers" />
          <SectionTitle text="Current Job Positions" className="h2 pt-5" />
          <SectionText
            text=" Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
            className="fade-top mx-auto mt-3 max-w-[519px]"
          />
        </div>

        {/* section body */}
        <div className="smt60px flex flex-col gap-6 md:gap-10">
          <OurCAreersSingleItem
            title="Boost your Payments"
            text="You could receive payments straight into your company bank account or open a Babuz merchant account and collect funds there."
            buttonLInk="/careers-details"
            hoverImage="bg-[url('/images/hover-image.png')]"
          />
          <BorderVerticalThree />
          <OurCAreersSingleItem
            title="Agent 
            Banking"
            text="Stay updated. check your bank account to manage funds and track transactions securely."
            buttonLInk="/careers-details"
            hoverImage="bg-[url('/images/hover-image-2.png')]"
          />
          <BorderVerticalThree />
          <OurCAreersSingleItem
            title="Savings 
            Account"
            text="While it may be more challenging, some banks offer loans for individuals with bad credit. However, interest rates and terms may not be as favorable."
            buttonLInk="/careers-details"
            hoverImage="bg-[url('/images/hover-image-3.png')]"
          />
          <BorderVerticalThree />
          <OurCAreersSingleItem
            title="Pay Out & Refund"
            text="You could receive payments straight into your company  Babuz merchant account and collect funds there."
            buttonLInk="/careers-details"
            hoverImage="bg-[url('/images/hover-image-4.png')]"
          />
          <BorderVerticalThree />
        </div>
      </div>
    </section>
  );
};

export default OurCareers;
