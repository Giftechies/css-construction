"use client";
import teamVector from "@/../public/images/home-one/home-one-theam-vector.png";
import ButtonSlider from "@/components/buttons/ButtonSlider";
import RoundedLink from "@/components/link/RoundedLink";
import CircleBottomLeft from "@/components/shared/CircleBottomLeft";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../../../public/data/ourTeamData";
import HomeOneTeamCard from "./HomeOneTeamCard";

const HomeOneOurTeam = () => {
  return (
    <section className="spy120px relative overflow-clip bg-white-4">
      <div className="container flex justify-between gap-5 max-sm:flex-col sm:items-center sm:gap-6">
        <div>
          <SectionSubTitle text="Our Team" />
          <SectionTitle
            text="We are Business Consulting Professionals"
            className="mt-3 max-w-[703px]"
          />
        </div>
        <RoundedLink buttonText="Explore Now" link="/our-team" />
      </div>

      <div className="relative max-xl:container xl:ml-[calc((100%-1296px)/2)]">
        <div className="smt60px">
          <Swiper
            spaceBetween={24}
            speed={1400}
            loop={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3.7,
              },
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide
                key={`team-card${index}`}
                className="xl:even:mt-15 xxl:even:mt-[72px]"
              >
                <HomeOneTeamCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <ButtonSlider className="smt60px mx-auto w-fit" />
      </div>
      <Image
        src={teamVector}
        width={146}
        height={154}
        alt="Team Vector"
        className="left-5 top-5 max-3xl:size-20  max-md:hidden md:absolute 4xl:left-20 4xl:top-25"
      />
      <CircleBottomLeft />
    </section>
  );
};

export default HomeOneOurTeam;
