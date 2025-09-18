import { cn } from "@/utils/cn";

const SectionInnerTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h5 className={cn("h3 font-medium", className)}>{text}</h5>;
};

export default SectionInnerTitle;
