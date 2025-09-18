import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData |string ;
  text: string;
  name: string;
  title: string;
};

const HomeThreeTestimonialCard = ({ image, text, name, title }: Props) => {
  return (
    <div className="flex flex-col items-center text-center max-md:flex-col">
      <div className="w-full">
        <div className="mx-auto flex w-fit items-center gap-1">
          <IconStarFilled className="text-accent-3" />
          <IconStarFilled className="text-accent-3" />
          <IconStarFilled className="text-accent-3" />
          <IconStarFilled className="text-accent-3" />
          <IconStarHalfFilled className="text-accent-3" />
        </div>

        <p className="xl-text shrink-0 text-black-1 max-w-[602px] mt-6 mx-auto">{text}</p>
      </div>
      <div className="relative shrink-0 spt40px">
        <Image
          src={image}
          width={66}
          height={66}
          alt="Testimonial image"
          className="rounded-full"
        />
      </div>
      <div>
        <p className="h4 font-medium spt32px">{name}</p>
        <p className="m-text mt-1 font-medium text-black-3">{title}</p>
      </div>
    </div>
  );
};

export default HomeThreeTestimonialCard;
