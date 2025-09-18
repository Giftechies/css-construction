import SectionText from "@/components/shared/SectionText";
import { sliderData } from "../../../public/data/ourTeamData";
import HomeOneTeamCard from "../home-one/HomeOneTeamCard";

const OurTeamContent = () => {
  return (
    <section className="spy120px" id="scrollPosition">
      <div className="container">
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          <div className="col-start-1 col-end-13 sm:col-end-4">
            <h3 className="d2 font-medium">Talented Team</h3>
          </div>
          <SectionText
            text="We’re a diverse team that works as fancies attention to details, enjoys beers on Friday nights and aspires to design the dent in the universe."
            className="col-start-1 col-end-13 sm:col-start-6 lg:col-start-9"
          />
        </div>
        <div className="smt60px grid  gap-5 gap-x-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {sliderData?.slice(0, 6)?.map((item, index) => (
            <div key={`our-team-page${index}`} className="appear-down">
              <HomeOneTeamCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamContent;
