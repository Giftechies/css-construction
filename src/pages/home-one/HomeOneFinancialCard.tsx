import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


type Props = {
  image: StaticImageData;
  cardTitle: string;
  cardText: string;
  isHover: number;
  handleHover: (number: number) => void;
  index: number;
  link: string;
};

const HomeOneFinancialCard = ({
  image,
  cardText,
  cardTitle,
  isHover,
  handleHover,
  index,
  link,
}: Props) => {
  return (
    <div
      onMouseEnter={() => handleHover(index)}
      className={cn(
        "sp32px till-card group theme-transition-3 bg-white-1 shadow-custom1 hover:bg-sec",
        {
          "shadow-[0px_4px_53px_0px_rgba(103,103,103,0.25)]": isHover === index,
          
        },
      )}
    >
      <div className="theme-transition-3 w-fit rounded-full bg-white-4 p-[14px] group-hover:bg-white-1">
        <Image src={image} alt="finance image" />
      </div>

      <Link
        href={`${link}`}
        className="h5 theme-transition-3 mt-6 block font-medium group-hover:text-white-1"
      >
        {cardTitle}
      </Link>
      <SectionText
        className="theme-transition-3 mt-3 group-hover:text-white-1"
        text={cardText}
      />
    </div>
  );
};

export default HomeOneFinancialCard;
