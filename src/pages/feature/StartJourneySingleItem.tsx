import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import { IconSend } from "@tabler/icons-react";

type Props = {
  title: string;
  text: string;
  buttonLInk: string;
};

const StartJourneySingleItem = ({ title, text, buttonLInk }: Props) => {
  return (
    <div className="hover-image appear-down group/card relative flex justify-between gap-6 overflow-hidden max-sm:flex-col sm:items-center ">
      <div className="flex justify-between gap-4 max-md:flex-col sm:gap-6 md:items-center md:gap-10 xxl:gap-25 ">
        <div className="flex flex-col gap-7">
          <div className="w-fit rounded-full bg-primary p-[14px] text-white-1">
            <IconSend size={32} />
          </div>
          <h5 className="h3 font-semibold text-black-2 md:w-44 3xl:w-[257px]">
            {title}
          </h5>
        </div>
        <div className="hidden h-16 w-px bg-white-3/80 md:block"></div>
        <SectionText className="max-w-[416px]" text={text} />
      </div>
      <RoundedLink
        buttonText="View Details"
        link={buttonLInk}
        className="shrink-0"
      />
      <div className="case-study-hover pointer-events-none absolute top-1/2 z-20 hidden  size-40 -translate-y-1/2 overflow-hidden rounded-md bg-[url('/images/hover-image.png')] bg-cover bg-no-repeat opacity-0 group-hover/card:opacity-100 md:block"></div>
    </div>
  );
};

export default StartJourneySingleItem;
