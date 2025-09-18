import SectionText from "@/components/shared/SectionText";
import { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  title: string;
  text: string;
};

const EducationLoanHowItWorkCard = ({ icon, title, text }: Props) => {
  return (
    <div className="fade-top">
      <div className=" w-fit rounded-full border border-black-4 p-2 sm:p-[14px]">
        {icon}
      </div>
      <h5 className="h5 spt24px font-medium">{title}</h5>
      <SectionText text={text} className="mt-3 max-w-[240px]" />
    </div>
  );
};

export default EducationLoanHowItWorkCard;
