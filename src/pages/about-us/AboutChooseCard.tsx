import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

type AboutChooseCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
};

const AboutChooseCard: React.FC<AboutChooseCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "sp32px till-card group theme-transition-3 rounded-xl bg-white-1 text-black-4 shadow-custom1 hover:bg-primary hover:text-white-1  ",
        className,
      )}
    >
      <div className="theme-transition-3 w-fit rounded-full border border-black-4 bg-transparent p-[14px] text-black-4 group-hover:border-white-1 group-hover:bg-white-1 group-hover:text-primary">
        {icon}
      </div>
      <h5 className="h5 smt24px font-medium">{title}</h5>
      <SectionText
        text={description}
        className="theme-transition-3 mt-3 group-hover:!text-white-2"
      />
    </div>
  );
};

export default AboutChooseCard;
