import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  title: string;
  text: string;
  icon: ReactElement;
  className?: string;
};

const HomeTwoServiceCard = ({ title, text, className, icon }: Props) => {
  return (
    <div
      className={cn(
        "spx40px group theme-transition-3 relative py-10 sm:py-15 xxl:pb-[105px] xxl:pt-15 text-black-4",
        className,
      )}
    >
      {icon}
      <h5 className="h5 spt24px font-medium">{title}</h5>
      <SectionText text={text} className="mt-3 text-balance" />
      <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center bg-primary/60 opacity-0 group-hover:visible  group-hover:h-full group-hover:opacity-100">
        <Link href={`/service`} className="bg-primary p-3 ">
          <IconArrowUpRight stroke={1} className="size-10 text-white-1" />
        </Link>
      </div>
    </div>
  );
};

export default HomeTwoServiceCard;
