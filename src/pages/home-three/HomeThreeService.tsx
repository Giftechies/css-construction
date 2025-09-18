"use client";
import serviceAnimal from "@/../public/images/home-two/service-animale.png";
import RoundedLink from "@/components/link/RoundedLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { 
  IconTruck, 
  IconHome, 
  IconBuildingWarehouse, 
  IconRoute, 
  IconUsers, 
  IconShieldCheck, 
  IconDiscountCheck, 
  IconMap2 
} from "@tabler/icons-react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HomeThreeServiceCard from "./HomeThreeServiceCard";
const sliderData = [
  {
    icon: <IconTruck className="size-10" />,
    title: "Fast & Reliable Moves",
    text: "We ensure quick and hassle-free interstate relocations with complete safety.",
  },
  {
    icon: <IconHome className="size-10" />,
    title: "Residential Moving",
    text: "Expert services for home relocations, from packing to delivery at your new place.",
  },
  {
    icon: <IconBuildingWarehouse className="size-10" />,
    title: "Office Relocations",
    text: "Smooth and organized shifting of offices with minimal downtime and maximum efficiency..",
  },
  {
    icon: <IconRoute className="size-10" />,
    title: "Long-Distance Routes",
    text: "Trusted interstate routes to deliver your belongings safely and on time.",
  },
  {
    icon: <IconUsers className="size-10" />,
    title: "Professional Team",
    text: "Trained staff to handle your goods with care and precision at every step.",
  },
  {
    icon: <IconShieldCheck className="size-10" />,
    title: "Safe & Secure",
    text: "Insurance and secure packaging ensure complete peace of mind for our clients.",
  },
  {
    icon: <IconDiscountCheck className="size-10" />,
    title: "Affordable Pricing",
    text: "Affordable and cost-effective moving packages with complete transparency.",
  },
  {
    icon: <IconMap2 className="size-10" />,
    title: "Nationwide Coverage",
    text: "We cover all major cities and states, making relocation stress-free.",
  },
];



const HomeThreeService = () => {
  return (
    <section className="spy120px border fade-wrapper relative z-10 bg-zinc-100 text-black">
      <div className=" container  relative grid grid-cols-12 gap-12 items-center border border-white-1">
        <div className="col-start-1 col-end-13 flex flex-col items-center justify-center ">
          <SectionSubTitle text="Our Services" className="" />
          <SectionTitle text="Comprehensive Moving Solutions" className="h1 mt-3" />
          <SectionText
            text="We specialize in interstate relocations, offering packing, loading, transport, and unpacking services to make your move stress-free."
            className="fade-top mt-5 "
          />
        </div>
        <div className="max-lg:spt40px   col-start-1 col-end-13 ">
          <Swiper
            spaceBetween={24}
            speed={1400}
            loop={true}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
              clickable: true,
            }}
            navigation={{
              nextEl: ".customerSliderNext",
              prevEl: ".customerSliderPrev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={`team-card${index}`}>
                <HomeThreeServiceCard {...item} className="text-black bg-white-1  " />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-pagination !absolute !-bottom-10 !left-1/2 !flex !w-fit !items-center !gap-2 max-xl:!-translate-x-1/2 xl:!-bottom-12 xl:!left-[calc(50%-80px)]"></div>
      </div>
  
    </section>
  );
};

export default HomeThreeService;
