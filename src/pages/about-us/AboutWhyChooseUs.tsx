import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { whyChooseUsData } from "../../../public/data/whychooseUsData";
import AboutChooseCard from "./AboutChooseCard";

const AboutWhyChooseUs = () => {
  return (
    <section className="spy120px fade-wrapper bg-white-4">
      <div className="container">
        <SectionSubTitle text="Why Us" className="text-center" />
        <SectionTitle
          text="Why Choose Us"
          className="h2 mt-3 text-center font-semibold"
        />
        <SectionText
          text=" Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
          className="fade-top mx-auto mt-5 max-w-[519px] text-center"
        />
        <div className="spt60px grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyChooseUsData.map((card, index) => (
            <AboutChooseCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
