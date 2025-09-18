import { cn } from "@/utils/cn";

const MainHeadingText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={cn("xl-text text-black-3", className)}>{text}</p>;
};

export default MainHeadingText;
