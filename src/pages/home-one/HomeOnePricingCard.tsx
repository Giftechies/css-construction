import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CardInfoRow from "./CardInfoRow";

type Props = {
  cardTitle: string;
  price: number;
  cardInfo: { cardRowText: string; cardInfoRowInfo: string }[];
  buttonText: string;
  importantText?: string;
  cardShape?: StaticImageData;
  className?: string;
};

const HomeOnePricingCard = ({
  cardTitle,
  price,
  cardInfo,
  buttonText,
  importantText,
  cardShape,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "spt40px till-card spb40px theme-transition-3 relative bg-white-1 ",
        className,
      )}
    >
      <div className="spl40px">
        <div className="flex items-center justify-between">
          <span className="h5 font-medium">{cardTitle}</span>{" "}
          {importantText && (
            <span
              className={cn(
                "h6 theme-transition-3 z-10 me-3 rounded-full bg-accent-3 px-3 py-2 font-medium",
                { "bg-accent-5": className === "bg-accent-3" },
              )}
            >
              {importantText}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-end">
          <p className="d4 leading-0 text-primaryColor theme-transition-4 font-semibold">
            ${price}
          </p>
          <p className="h6 theme-transition-4 mb-2 font-medium">/yr</p>
        </div>
      </div>
      <div className="spt32px spb32px smt32px spr24px spl24px mx-4 flex flex-col gap-6 rounded-xl bg-white-2 ">
        {cardInfo?.map(({ cardRowText, cardInfoRowInfo }) => (
          <CardInfoRow
            key={cardRowText}
            text={cardRowText}
            info={cardInfoRowInfo}
          />
        ))}
      </div>
      <Link
        href={`/sighup`}
        className={cn(
          "spx24px spy12px l-text smt40px spx24px spy12px l-text smt40px theme-transition-3 mx-auto block w-fit bg-accent-3 capitalize hover:bg-accent-3/80",
          { "bg-accent-5 hover:bg-accent-5/90": className === "bg-accent-3" },
        )}
      >
        {buttonText}
      </Link>
      {cardShape && (
        <Image
          src={cardShape}
          width={117}
          height={114}
          alt="Secondary Circle"
          className="absolute right-0 top-0 max-xl:w-[80px]"
        />
      )}
    </div>
  );
};

export default HomeOnePricingCard;
