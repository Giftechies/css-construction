import robot from "@/../public/images/robote.png";
import image from "@/../public/images/wealth-management.png";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const WealthManagement = () => {
  return (
    <section className="spy120px fade-wrapper bg-white-4">
      <div className="container">
        <SectionTitle
          text="Wealth Management Services. Secure Your Financial Future"
          className="h2 max-w-[702px]"
        />
        <div className="spt40px grid-cols-12 items-center gap-6 lg:grid">
          <Image
            src={robot}
            width={383}
            height={324}
            alt="robot"
            className="col-start-1 col-end-5 max-lg:hidden"
          />
          <div className="col-start-5 col-end-13">
            <div className="overflow-hidden">
              <Image
                src={image}
                width={856}
                height={450}
                alt="Section Image"
                className="appear-down"
              />
            </div>
            <div className="spt32px grid gap-4 sm:grid-cols-2 sm:gap-6">
              <SectionText
                text="The focus on sustainability and ethical banking  growing. Explore how banks are incorporating Environmental, Social, and Governance (ESG) principles into their operations and investment strategies."
                className="fade-top"
              />
              <SectionText
                text="Modern consumers expect personalized experiences. Learn how banks are leveraging data analytics to tailor their services to individual customer needs, "
                className="fade-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthManagement;
