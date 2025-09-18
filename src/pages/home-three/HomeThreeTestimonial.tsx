"use client";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Lines from "@/components/shared/Lines";
import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";
import { sliderData } from "../home-one/HomeOneTestimonials";
import HomeThreeTestimonialCard from "./HomeThreeTestimonialCard";

const HomeThreeTestimonial = () => {
  return (
    <div className="spy120px relative">
      <div className="container relative">
        <SectionSubTitle text="Testimonials" className="text-center" />
        <SectionTitle
          text="What people say"
          className="h2 mt-3 text-center font-semibold"
        />
        <div className="smt60px mx-auto w-fit rounded-full bg-primary/10 p-[18px]">
          <IconQuote className="text-primary" />
        </div>
        <div className="spt60px">
          <Swiper
            // slidesPerView={1}
            spaceBetween={24}
            speed={1400}
            loop={true}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".customerSliderNext",
              prevEl: ".customerSliderPrev",
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={`rtrtr${index}`}>
                <HomeThreeTestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={
              "max-lg:smt40px z-10 mx-auto flex w-fit items-center gap-4 max-lg:bottom-0 sm:gap-6 lg:absolute lg:top-1/2 lg:w-full lg:justify-between"
            }
          >
            <button className="customerSliderPrev theme-transition-3 flex items-center justify-center rounded-full border border-accent-3 bg-transparent p-3 font-semibold text-accent-3 hover:bg-accent-3 hover:text-black-4">
              <IconArrowLeft size={24} />
            </button>
            <button className="customerSliderNext theme-transition-3 flex items-center justify-center rounded-full border border-accent-3 bg-transparent p-3 font-semibold text-accent-3 hover:bg-accent-3 hover:text-black-4">
              <IconArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <Lines />
    </div>
  );
};

export default HomeThreeTestimonial;
