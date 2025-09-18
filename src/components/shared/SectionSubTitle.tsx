import { cn } from "@/utils/cn";

const SectionSubTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h5
      className={cn(
        " title-animation  font-oswald  h4  capitalize font-[700] tracking-wider leading-[20px]  text-primary",
        className,
      )}
    >
      {text}
    </h5>
  );
};

export default SectionSubTitle;
