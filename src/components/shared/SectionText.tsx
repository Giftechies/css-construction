import { cn } from  "../../lib/utils";

const SectionText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={cn("m-text text-black-3 text-center font-[500] tracking-wider ", className)}>{text}</p>;
};

export default SectionText;
