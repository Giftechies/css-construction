import image from "@/../public/images/personal-loan/research.png";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const PersonalLoanResearch = () => {
  return (
    <section className="spy120px fade-wrapper bg-white-4">
      <div className="container">
        <Image
          src={image}
          width={1296}
          height={600}
          alt="Personal Loan research"
          className="appear-down"
        />
        <div className="spt60px grid grid-cols-12 gap-6">
          <SectionTitle
            text="Research & Processing."
            className="h2 col-start-1 col-end-13 md:col-end-5"
          />
          <div className="col-start-1 col-end-13 md:col-start-5 lg:col-start-6">
            <SectionText
              text="In the world of banking, teams are the backbone of success. Their collective efforts ensure that banks can provide financial services that empower individuals and businesses to achieve their goals. By the importance of teamwork and culture of collaboration,"
              className="fade-top"
            />
          </div>
        </div>

        <div className="spt24px grid-cols-12 gap-3 max-sm:flex max-sm:flex-col sm:grid sm:gap-6">
          <div className="fade-top col-start-1 col-end-7 flex items-center gap-5 md:col-start-5 md:col-end-9 lg:col-start-6">
            <div className="flex flex-col gap-3">
              <p className="m-text text-black-3">Project Name:</p>
              <p className="m-text text-black-3">Duration:</p>
              <p className="m-text text-black-3">Clients:</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="m-text">Business Loan</p>
              <p className="m-text">25 Months.</p>
              <p className="m-text">Kharis Dopis</p>
            </div>
          </div>
          <div className="fade-top col-start-7 col-end-13 flex items-center gap-5 md:col-start-9">
            <div className="flex flex-col gap-3">
              <p className="m-text text-black-3">Budget:</p>
              <p className="m-text text-black-3">Category:</p>
              <p className="m-text text-black-3">Location:</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="m-text">$6874 Only</p>
              <p className="m-text">Business</p>
              <p className="m-text">Spain, Barcelona</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalLoanResearch;
