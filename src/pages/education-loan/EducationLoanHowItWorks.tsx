import image from "@/../public/images/education-loan/education-loan-how-it-work.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { cn } from "@/utils/cn";
import {
  IconCurrencyDollarBrunei,
  IconHighlight,
  IconSend,
  IconShieldCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import EducationLoanHowItWorkCard from "./EducationLoanHowItWorkCard";

const EducationLoanHowItWorks = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "spy120px fade-wrapper relative overflow-hidden",
        className,
      )}
    >
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-7">
            <SectionSubTitle text="A Better Way to Get Loan" />
            <SectionTitle text="How it Works" className="h2 mt-5" />
            <SectionText
              text=" Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills"
              className="mt-3 max-w-[519px]"
            />
            <div className="spt60px grid max-xl:gap-6  min-[500px]:grid-cols-2 xl:gap-x-6 xl:gap-y-15">
              <EducationLoanHowItWorkCard
                icon={<IconHighlight className="size-6 sm:size-8" />}
                title="Fill The Form"
                text="Banks set interest rates based on factors like the federal funds rate demand for savings."
              />
              <EducationLoanHowItWorkCard
                icon={<IconShieldCheck className="size-6 sm:size-8" />}
                title="Get Pre-qualified"
                text="Online and mobile banking provide convenient access to your accounts, "
              />
              <EducationLoanHowItWorkCard
                icon={<IconSend className="size-6 sm:size-8" />}
                title="Send Decuments"
                text="The Federal Deposit Insurance  deposits in participating banks depositor per. "
              />
              <EducationLoanHowItWorkCard
                icon={<IconCurrencyDollarBrunei className="size-6 sm:size-8" />}
                title="Get a Loan"
                text="while a savings account is for storing money and earning interest."
              />
            </div>
          </div>
          <div className="col-start-1 col-end-13 row-start-1 overflow-hidden lg:col-start-8">
            <Image
              src={image}
              width={524}
              height={726}
              alt="How it works image"
              className="appear-down max-sm:max-w-72 sm:max-lg:max-w-96"
            />
          </div>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default EducationLoanHowItWorks;
