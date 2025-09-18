import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { cn } from "@/utils/cn";
import { whyChooseUsData } from "../../../public/data/whychooseUsData";
import AboutChooseCard from "../about-us/AboutChooseCard";

const BusinessHowItWork = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "spy120px fade-wrapper relative overflow-hidden bg-white-4",
        className,
      )}
    >
      <div className="container">
        <SectionSubTitle
          text="A Better Way to Get Loan"
          className="text-center"
        />
        <SectionTitle
          text="How it Works"
          className="h2 mt-3 text-center font-semibold"
        />
        <SectionText
          text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
          className="fade-top mx-auto mt-5 max-w-[519px] text-center"
        />
        <div className="spt60px grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyChooseUsData.map((card, index) => (
            <AboutChooseCard key={index} {...card} className="rounded-none " />
          ))}
        </div>
      </div>
      {className === "bg-white-1" ? <Lines /> : ""}
    </section>
  );
};

export default BusinessHowItWork;
