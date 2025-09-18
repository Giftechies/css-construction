import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  title: string;
  text: string;
  icon: ReactElement;
  className?: string;
};

const HomeThreeServiceCard = ({ title, text, className, icon }: Props) => {
  return (
    <div
      className={cn(
        "group theme-transition-3 relative  border border-white-1 hover:border-[var(--primary)] p-8 text-white-1 hover:bg-[var(--primary)] hover:text-black-4",
        className,
      )}
    >
     <div className="text-[var(--primary)] group-hover:text-black-2 "  > {icon}</div>
      <h5 className="h5 spt24px font-medium group-hover:text-black-4">
        {title}
      </h5>
      <SectionText
        text={text}
        className="mt-3 text-balance  group-hover:text-black-2"
      />
      <Link
        href={`/services`}
        className="m-text theme-transition-3 mt-10 flex items-center gap-3 font-medium group-hover:text-black-4"
      >
        <span>Learn More</span>
        <IconArrowRight className="theme-transition-3 group-hover:-rotate-45" />
      </Link>
    </div>
  );
};

export default HomeThreeServiceCard;
