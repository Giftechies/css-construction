import user1 from "@/../public/images/home-one/banner-user-1.png";
import user2 from "@/../public/images/home-one/banner-user-2.png";
import user3 from "@/../public/images/home-one/banner-user-3.png";
import star from "@/../public/images/home-three/banner-star.png";
import bannerImage from "@/../public/images/home-three/banner-three-image.png";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import { IconHeartFilled, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import HomeThreeBannerLink from "./HomeThreeBannerLink";
import HomeThreeUserImage from "./HomeThreeUserImage";

import React from 'react'

const HomeThreeBannerSideElement = () => {
  return (
    <div className="absolute max-[1650px]:hidden -left-36 4xl:-left-[180px] top-1/2 z-10 flex -translate-y-1/2 gap-[135px] flex-col ">
    <div className="flex flex-col items-center -space-y-2">
      <Image src={star} width={60} height={60} alt="Star" />
      <div className="rounded-full bg-white-1 p-[14px]">
        <IconHeartFilled size={32} className="text-secondary" />
      </div>
      <div className="flex items-center gap-1 rounded-full bg-secondary p-[9px]">
        <span className="l-text font-medium">4.7</span>
        <IconStarFilled size={16} className="text-white-1" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <p className="lead-text items-center justify-center text-center font-medium text-white-1">
        Active user
      </p>
      <HomeThreeUserImage images={[user1, user2, user3]} />{" "}
      <p className="m-text text-center font-medium text-white-4">
        +100 More
      </p>
    </div>
  </div>
  )
}

export default HomeThreeBannerSideElement