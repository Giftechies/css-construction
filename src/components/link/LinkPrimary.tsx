import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

/**
 * Button component for primary action
 */

type LinkPrimaryProps = {
  className?: string;
  text: string;
  link: string;
};
const LinkPrimary = ({
  className,
  text,
  link,
}: LinkPrimaryProps): JSX.Element => {
  return (
    <Link
      href={`${link}`}
      className={cn(
        "spy12px spx24px l-text group relative inline-flex items-center justify-center overflow-hidden  p-4 px-6 py-3  text-white-4 shadow-md transition duration-300 ease-out",
        className,
      )}
    >
      <span className="text-white ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-accent-2 duration-300 group-hover:translate-x-0">
        <IconArrowRight />
      </span>
      <span className="ease absolute flex h-full w-full transform items-center justify-center text-white-4 transition-all duration-300 group-hover:translate-x-full">
        {text}
      </span>
      <span className="l-text invisible relative">{text}</span>
    </Link>
  );
};

export default LinkPrimary;
