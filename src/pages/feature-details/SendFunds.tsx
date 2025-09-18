import sendFunds from "@/../public/images/send-fund.png";
import SectionText from "@/components/shared/SectionText";
import { IconBusinessplan, IconWallet } from "@tabler/icons-react";
import Image from "next/image";

const SendFunds = () => {
  return (
    <section className="spy120px fade-wrapper relative" id="scrollPosition">
      <div className="container grid grid-cols-12 gap-6">
        <h3 className="d2 title-animation col-start-1 col-end-13 font-medium lg:col-end-7 xl:col-end-6">
          Sending Funds from Anywhere Anytime
        </h3>
        <div className="col-start-1 col-end-13 flex flex-col gap-6 lg:col-start-7 xl:col-start-8">
          <div className="d2 col-start-1 col-end-6 font-medium">
            <SectionText
              text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
              className="fade-top"
            />
          </div>
          <div className="h-px w-full border-b border-white-3/20"></div>
          <div className="grid gap-5 xs:grid-cols-2 sm:gap-10">
            <div className="fade-top">
              <IconWallet className="size-10" />
              <h5 className="h5 mt-4 font-medium">Split The Necessities</h5>
              <SectionText
                text="Reduced Payments maintenance and processing"
                className="mt-3"
              />
            </div>
            <div className="fade-top">
              <IconBusinessplan className="size-10" />
              <h5 className="h5 mt-4 font-medium">Pay For Business</h5>
              <SectionText
                text="Reduced Payments maintenance and processing"
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="spt60px spb60px max-3xl:container">
        <Image
          src={sendFunds}
          width={1600}
          height={600}
          alt="send fund image"
          className="appear-down mx-auto block"
        />{" "}
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 md:col-end-8 lg:col-end-6">
            <h4 className="h2 title-animation font-semibold">
              Our Processing.
            </h4>
            <SectionText
              text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers pay bills."
              className="mt-3"
            />
          </div>
        </div>
        <div className="smt40px grid gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
          <div>
            <h5 className="h4 title-animation font-medium">Team working</h5>
            <SectionText
              text="Including salary, bonuses, and benefits like health insurance, retirement plans, and other perks."
              className="fade-top mt-3"
            />
          </div>
          <div>
            <h5 className="h4 title-animation font-medium">Collect Doc</h5>
            <SectionText
              text="Information on who the employee reports to and who reports to them, if applicable."
              className="fade-top mt-3"
            />
          </div>
          <div>
            <h5 className="h4 title-animation font-medium">Check & Finalize</h5>
            <SectionText
              text="Details about the work environment, requirements, and any specific working hours."
              className="fade-top mt-3"
            />
          </div>
          <div>
            <h5 className="h4 font-medium">Approved</h5>
            <SectionText
              text="They ensure that employers meet legal requirements and adhere to employment laws."
              className="fade-top mt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendFunds;
