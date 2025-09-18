import { cn } from "@/utils/cn";
import Link from "next/link";

type ListItemProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const ListItem = ({ href, className, children }: ListItemProps) => {
  return (
    <li>
      <Link
        href={`${href}`}
        className={cn(
          "m-text theme-transition-3 text-white-3 hover:tracking-wide hover:text-accent-3",
          className,
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default ListItem;
