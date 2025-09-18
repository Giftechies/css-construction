import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { joinOurTeamData } from "../../../public/data/joinOurTeamData";
import AboutChooseCard from "../about-us/AboutChooseCard";

const WhyJoinOurTeam = () => {
  return (
    <section className="spy120px overflow-hidden fade-wrapper relative">
      <div className="container">
        <SectionSubTitle text="Why Join Our Team" className="text-center" />
        <SectionTitle
          text="Why Choose Us"
          className="h2 mt-3 text-center font-semibold"
        />
        <SectionText
          text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
          className="fade-top mx-auto mt-5 max-w-[519px] text-center"
        />
        <div className="spt60px grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {joinOurTeamData.map((card, index) => (
            <AboutChooseCard key={index} {...card} />
          ))}
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default WhyJoinOurTeam;
