import { cn } from "@/utils/cn";

/**
 * Button component for primary action
 */

type ButtonPrimaryProps = {
  className?: string;
  buttonText: string;
  onClick?: () => void;
};
const ButtonPrimary = ({
  className,
  buttonText,
  onClick,
}: ButtonPrimaryProps): JSX.Element => {
  return (
    <button
      className={cn(
        "spy12px spx24px bg-prim font-bold text-white-1",
        className,
      )}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonPrimary;
