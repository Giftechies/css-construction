"use client";
import vector from "@/../public/images/home-one/pricing-plan-vector.png";
import primaryCircle from "@/../public/images/home-one/pricint-play-primary-circle.png";
import secondaryCircle from "@/../public/images/home-one/pricint-play-secondary-circle.png";
import ButtonAccent from "@/components/buttons/ButtonAccent";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import HomeOnePricingCard from "./HomeOnePricingCard";

const cardOne = [
  { cardRowText: "Minimum Investment", cardInfoRowInfo: "$100" },
  { cardRowText: "Investment Duration", cardInfoRowInfo: "30D" },
  { cardRowText: "Daily Returns", cardInfoRowInfo: "2.0%" },
  { cardRowText: "Total Return", cardInfoRowInfo: "160%" },
];

const cardTwo = [
  { cardRowText: "Minimum Investment", cardInfoRowInfo: "$500" },
  { cardRowText: "Investment Duration", cardInfoRowInfo: "60D" },
  { cardRowText: "Daily Returns", cardInfoRowInfo: "2.5%" },
  { cardRowText: "Total Return", cardInfoRowInfo: "230%" },
];

const cardThree = [
  { cardRowText: "Minimum Investment", cardInfoRowInfo: "$1000" },
  { cardRowText: "Investment Duration", cardInfoRowInfo: "90D" },
  { cardRowText: "Daily Returns", cardInfoRowInfo: "3.0%" },
  { cardRowText: "Total Return", cardInfoRowInfo: "475%" },
];

const HomeOnePricingPlan = ({ className }: { className?: string }) => {
  const [data, setData] = useState("weekly");

  const handleClick = (text: string) => {
    setData(text);
  };
  return (
    <div
      className={cn(
        "spy120px relative z-10 bg-white-4 after:absolute after:bottom-0 after:-z-10 after:h-[35%] after:w-full after:bg-accent-3/15",
        className,
      )}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <SectionSubTitle text="Pricing Plan" className="text-center" />
          <SectionTitle text="Simple pricing for everyone." className="mt-3" />
          <SectionText
            className="mt-6 max-w-[367px] text-center"
            text="Use customer data to build great and solid product experiences that convert."
          />
          <div className="mt-5 flex items-center gap-8">
            <ButtonAccent
              onClick={() => handleClick("weekly")}
              buttonText="Weekly"
              className={cn(
                "border border-accent-3 bg-transparent !px-12  py-4 text-accent-2 hover:bg-accent-3",
                { "bg-accent-3": data === "weekly" },
              )}
            />
            <ButtonAccent
              onClick={() => handleClick("yearly")}
              buttonText="yearly"
              className={cn(
                "border border-accent-3 bg-transparent !px-12 py-4  text-accent-2 hover:bg-accent-3",
                { "bg-accent-3": data === "yearly" },
              )}
            />
          </div>
        </div>
        <div className="smt60px grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          <HomeOnePricingCard
            buttonText="Join Simple Plan"
            cardInfo={cardOne}
            cardTitle="Simple Plan"
            cardShape={secondaryCircle}
            price={data === "weekly" ? 10 : 8}
          />
          <HomeOnePricingCard
            buttonText="Join Standard Plan"
            cardInfo={cardTwo}
            cardTitle="Growth Plan"
            importantText="Most Popular"
            price={data === "weekly" ? 30 : 25}
            className="bg-accent-3"
          />
          <HomeOnePricingCard
            buttonText="Join Premium Plan"
            cardInfo={cardThree}
            cardTitle="Premium Plan"
            cardShape={primaryCircle}
            price={data === "weekly" ? 75 : 60}
          />
        </div>
      </div>
      <Image
        src={vector}
        width={202}
        height={97}
        alt="Pricing Plan Vector"
        className="absolute right-[2%] top-10 max-lg:w-[150px] md:max-lg:top-15 lg:right-[10%] lg:top-[78px]"
      />

      {className === "bg-white-1" ? <Lines /> : ""}
    </div>
  );
};

export default HomeOnePricingPlan;
