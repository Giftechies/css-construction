import { cn } from "@/utils/cn";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const ButtonSlider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <button className="customerSliderPrev hover:bg-primaryColor theme-transition-3 flex items-center justify-center rounded-full border border-[var(--primary)] bg-transparent p-4 font-semibold text-[var(--primary)] hover:bg-prim hover:text-white-1 ">
        <IconArrowLeft size={24} />
      </button>
      <button className="customerSliderNext hover:bg-primaryColor theme-transition-3 flex items-center justify-center rounded-full border border-[var(--primary)] bg-transparent p-4 font-semibold text-[var(--primary)] hover:bg-prim hover:text-white-1 ">
        <IconArrowRight size={24} />
      </button>
    </div>
  );
};

export default ButtonSlider;
