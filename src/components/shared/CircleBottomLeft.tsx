import teamCircle from "@/../public/images/home-one/team-circle.png";
import { cn } from "@/utils/cn";
import Image from "next/image";

const CircleBottomLeft = ({ className }: { className?: string }) => {
  return (
    <Image
      src={teamCircle}
      width={249}
      height={252}
      alt="Team circle"
      className={cn(
        "absolute bottom-0 left-0 max-sm:size-14 sm:max-md:size-20 md:max-lg:size-30 lg:max-xxl:size-40",
        className,
      )}
    />
  );
};

export default CircleBottomLeft;
