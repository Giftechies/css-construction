import BorderVerticalThree from "@/components/shared/BorderVerticalThree";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import StartJourneySingleItem from "./StartJourneySingleItem";

const StartNewJourney = () => {
  return (
    <section
      className="spt120px fade-wrapper spb120px bg-white-1"
      id="scrollPosition"
    >
      <div className="container">
        {/* section header */}
        <div className="flex justify-between gap-6 max-md:flex-col md:items-center">
          <div className="max-w-[600px]">
            <SectionTitle text="New journey Start From here" className="pt-3" />
          </div>
          <div className="max-w-[340px]">
            <SectionText
              text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
              className="md:spt40px fade-top"
            />
          </div>
        </div>
        {/* section body */}
        <div className="smt60px flex flex-col gap-6 md:gap-10">
          <StartJourneySingleItem
            title="Send Money"
            text="You could receive payments straight into your company bank account or open a Babuz merchant account and collect funds there."
            buttonLInk="/feature-details"
          />
          <BorderVerticalThree />
          <StartJourneySingleItem
            title="Bank Transfer"
            text="Stay updated. check your bank account to manage funds and track transactions securely."
            buttonLInk="/feature-details"
          />
          <BorderVerticalThree />
          <StartJourneySingleItem
            title="Interest Money"
            text="While it may be more challenging, some banks offer loans for individuals with bad credit. However, interest rates and terms may not be as favorable."
            buttonLInk="/feature-details"
          />
          <BorderVerticalThree />
          <StartJourneySingleItem
            title="Invest Money"
            text="You could receive payments straight into your company  Babuz merchant account and collect funds there."
            buttonLInk="/feature-details"
          />
          <BorderVerticalThree />
        </div>
      </div>
    </section>
  );
};

export default StartNewJourney;
