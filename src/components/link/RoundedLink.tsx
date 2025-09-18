import { cn } from "@/utils/cn";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const RoundedLink = ({
  link,
  buttonText,
  className,
  arrowIconClass,
}: {
  link: string;
  buttonText: string;
  className?: string;
  arrowIconClass?: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className={cn(
        "alter-btn btn-anim group/link relative z-10 inline-flex size-[140px] shrink-0 items-center justify-center gap-4 overflow-hidden rounded-full border border-black-3  font-semibold text-black-4 hover:border-accent-3 ",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center ">
        <IconArrowUpRight size={40} />{" "}
        <p className="capitalize">{buttonText}</p>
      </div>
      <span className="pointer-events-none absolute z-[-1] h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[var(--primary)] duration-700 group-hover/link:w-[calc(100%*2.25)] group-hover/link:pt-[calc(100%*2.25)]"></span>
    </Link>
  );
};

export default RoundedLink;
