"use client";
import bannerRoundText from "@/../public/images/round-text.png";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

type Props = {
  handleDropdown: () => void;
};
const BannerVideoButton = ({ handleDropdown }: Props) => {
  return (
    <>
      <div className="absolute right-3 sm:right-6 max-xs:hidden  top-3 sm:top-6 z-30  rounded-full border-2 border-white-1 p-1 sm:p-2">
        <div className="relative">
          <Image
            src={''}
            width={180}
            height={180}
            alt="Rounded Text"
            className="animate-spin-slow max-sm:size-20 sm:max-xxl:size-30 "
          />
          <div className="bg-white absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border-2  border-white-1 p-2 sm:p-4 xxl:p-8">
            <button
              onClick={handleDropdown}
              className="flex items-center rounded-full bg-white-1 p-2 sm:p-3"
            >
              <IconPlayerPlayFilled size={24} className="text-accent-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerVideoButton;
