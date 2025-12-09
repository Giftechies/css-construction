import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";


/**
 * Button component for primary action (replica of LinkPrimary)
 */

type ButtonPrimaryProps = {
  className?: string;
  text: string;
  onClick?: () => void;
};

const ButtonPrimary = ({
  className,
  text,
  onClick,
}: ButtonPrimaryProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "spy12px spx24px l-text group relative inline-flex items-center justify-center bg-prim overflow-hidden p-4 px-6 py-3 text-white-4 shadow-md transition duration-300 ease-out",
        className,
      )}
    >
      {/* Arrow slide in */}
      <span className="text-white-1 ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-prim duration-300 group-hover:translate-x-0">
        <IconArrowRight />
      </span>

      {/* Text slide out */}
      <span className="ease  l-text absolute flex h-full w-full transform items-center justify-center text-white-4 transition-all duration-300 group-hover:translate-x-full">
        {text}
      </span>

      {/* Invisible placeholder to preserve button width */}
      <span className="l-text invisible relative">{text}</span>
    </button>
  );
};

export default ButtonPrimary;
