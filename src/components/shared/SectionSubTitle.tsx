import { cn } from "../../lib/utils";

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
        " title-animation  font-manrope  h6  capitalize font-[700] tracking-wider leading-[20px]  text-primary",
        className,
      )}
    >
      {text}
    </h5>
  );
};

export default SectionSubTitle;
