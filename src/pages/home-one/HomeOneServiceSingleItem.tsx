import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";

type Props = {
  title: string;
  text: string;
  buttonLInk: string;
  hoverImage?: string;
};

const HomeOneServiceSingleItem = ({ title, text, buttonLInk, hoverImage }: Props) => {
  return (
    <div className="appear-down hover-image group/card relative flex justify-between gap-6 max-sm:flex-col sm:items-center">
      <div className="flex justify-between gap-4 max-md:flex-col sm:gap-6 md:items-center md:gap-10 xxl:gap-25 ">
        <p className="h3 max-w-[220px] font-semibold text-black-2 relative z-30">{title}</p>
        <div className="hidden h-16 w-px bg-white-3/80 md:block"></div>
        <SectionText className="max-w-[416px] relative z-30" text={text} />
      </div>
      <RoundedLink buttonText="View Details" link={buttonLInk} className="z-40 relative"/>

      <div className={cn("case-study-hover pointer-events-none absolute top-1/2 z-20 hidden  h-80 w-60 -translate-y-1/2 overflow-hidden rounded-md bg-cover bg-no-repeat opacity-0 group-hover/card:opacity-100 md:block", hoverImage)}></div>
    </div>
  );
};

export default HomeOneServiceSingleItem;
