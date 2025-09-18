"use client";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "@/../public/images/education-loan/testimonial-object-1.png";
import image2 from "@/../public/images/education-loan/testimonial-object-2.png";
import image3 from "@/../public/images/education-loan/testimonial-object-3.png";
import image4 from "@/../public/images/education-loan/testimonial-object-4.png";
import image5 from "@/../public/images/education-loan/testimonial-object-5.png";
import image6 from "@/../public/images/education-loan/testimonial-object-6.png";
import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";
import Image from "next/image";
import { sliderData } from "../home-one/HomeOneTestimonials";
import HomeThreeTestimonialCard from "../home-three/HomeThreeTestimonialCard";

const EducationLoanTestimonial = () => {
  return (
    <div className="spy120px relative overflow-hidden bg-white-4">
      <div className="container relative xl:pb-[157px]">
        <SectionSubTitle text="Testimonials" className="text-center" />
        <SectionTitle
          text="Trusted by 2000+
          Partners & Customers"
          className="h2 mx-auto mt-3 max-w-[636px] text-center font-semibold"
        />
        <div className="smt60px mx-auto w-fit rounded-full bg-primary/10 p-[18px]">
          <IconQuote className="text-primary" />
        </div>
        <div className="spt60px mx-auto max-w-[600px]">
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

          <div className={"smt60px z-10 mx-auto flex w-fit items-center gap-4"}>
            <button className="customerSliderPrev theme-transition-3 flex items-center justify-center rounded-full border border-accent-3 bg-transparent p-3 font-semibold text-accent-3 hover:bg-accent-3 hover:text-black-4">
              <IconArrowLeft size={24} />
            </button>
            <button className="customerSliderNext theme-transition-3 flex items-center justify-center rounded-full border border-accent-3 bg-transparent p-3 font-semibold text-accent-3 hover:bg-accent-3 hover:text-black-4">
              <IconArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="max-xl:hidden">
          <Image
            src={image1}
            width={196}
            height={207}
            alt="Testimonials element one"
            className="appear-down absolute left-25 top-0"
          />
          <Image
            src={image2}
            width={127}
            height={134}
            alt="Testimonials element two"
            className="appear-down absolute -left-20 top-1/2 -translate-y-1/2"
          />
          <Image
            src={image3}
            width={308}
            height={308}
            alt="Testimonials element one"
            className="appear-down absolute bottom-0 left-0"
          />
          <Image
            src={image4}
            width={125}
            height={126}
            alt="Testimonials element three"
            className="appear-down absolute right-5 top-10"
          />
          <Image
            src={image5}
            width={196}
            height={296}
            alt="Testimonials element four"
            className="appear-down absolute -right-20 top-1/2"
          />
          <Image
            src={image6}
            width={125}
            height={151}
            alt="Testimonials element five"
            className="appear-down absolute bottom-20 right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationLoanTestimonial;
