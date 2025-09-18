import RoundedLink from "@/components/link/RoundedLink";
import { cn } from "@/utils/cn";
import { IconCalendarTime, IconMapPin } from "@tabler/icons-react";

type Props = {
  title: string;
  text: string;
  buttonLInk: string;
  hoverImage: string;
};

const OurCAreersSingleItem = ({
  title,
  text,
  buttonLInk,
  hoverImage,
}: Props) => {
  return (
    <div className="appear-down hover-image group/card relative flex justify-between gap-6 max-sm:flex-col sm:items-center">
      <div className="z-10 flex justify-between gap-4 max-md:flex-col sm:gap-6 md:items-center md:gap-10 xxl:gap-25 ">
        <p className="h2 max-w-[220px] font-semibold text-black-2">{title}</p>
        <div className="hidden h-16 w-px bg-white-3/80 md:block"></div>
        <div className="flex flex-col gap-4">
          <div className="m-text flex items-center gap-3 text-black-3">
            <IconMapPin className="text-primary" /> <p>Manhattan, New York</p>
          </div>
          <div className="m-text flex items-center gap-3 text-black-3">
            <IconCalendarTime className="text-primary" /> <p>21th July, 2023</p>
          </div>
        </div>
      </div>
      <RoundedLink
        buttonText="View Details"
        link={buttonLInk}
        className="relative z-10"
      />
      <div
        className={cn(
          "case-study-hover pointer-events-none absolute top-1/2 z-0 hidden  size-40 -translate-y-1/2 overflow-hidden rounded-md bg-cover bg-no-repeat opacity-0 group-hover/card:opacity-100 md:block",
          hoverImage,
        )}
      ></div>
    </div>
  );
};

export default OurCAreersSingleItem;
