import { cn } from "@/utils/cn";

const SectionTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h3 className={cn("d4 title-animation font-semibold", className)}>
      {text}
    </h3>
  );
};

export default SectionTitle;
