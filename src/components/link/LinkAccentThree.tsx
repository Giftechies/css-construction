import { cn } from "@/utils/cn";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  link: string;
  linkText: string;
  className?: string;
};

const LinkAccentThree = ({ link, linkText, className }: Props) => {
  return (
    <Link
      href={`${link}`}
      className={cn(
        "l-text group w-fit theme-transition-3 flex items-center gap-3 rounded-xl bg-accent-3 px-6 py-3 font-medium",
        className,
      )}
    >
      {linkText}{" "}
      <IconArrowUpRight className="theme-transition-3 group-hover:rotate-45" />
    </Link>
  );
};

export default LinkAccentThree;
