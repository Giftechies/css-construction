import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";

type Props = {
  images: StaticImageData[];
  className?: string;
};

const HomeThreeUserImage = ({ images, className }: Props) => {
  return (
    <div
      className={cn(
        "mt-3 flex flex-col items-center -space-y-2 overflow-hidden p-0.5 ",
        className,
      )}
    >
      {images?.map((image, index) => (
        <Image
          key={`user-three${index}`}
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white-3"
          width={57}
          height={57}
          src={image}
          alt={`${image}`}
        />
      ))}
    </div>
  );
};

export default HomeThreeUserImage;
