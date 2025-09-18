import { cn } from "@/utils/cn";

type Props = {
  buttonText: string;
  className?: string;
  onClick?: () => void;
};

const ButtonAccent = ({ buttonText, className, onClick }: Props) => {
  return (
    <button onClick={onClick}
      className={cn(
        "spx24px spy12px capitalize l-text theme-transition-3 bg-accent-3",
        className,
      )}
    >
      {buttonText}
    </button>
  );
};

export default ButtonAccent;
