import { cn } from "@/utils/cn";
import { StaticImageData } from "next/image";
import UserImage from "./UserImage";
import Counter from "./scroll-top/Counter";

type Props = {
  images: StaticImageData[];
  className?: string;
  containerClassName?: string;
  counterNumber: number;
};

const UserComponent = ({
  images,
  className,
  containerClassName,
  counterNumber,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className={cn("flex items-center gap-3", containerClassName)}>
        <UserImage images={images} className={className} />{" "}
        <div className="d4 font-semibold">
          <Counter value={counterNumber} />M
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="size-[10px] rounded-full bg-primary"></div>
        <p className="lead-text font-medium">World active user</p>
      </div>
    </div>
  );
};

export default UserComponent;
