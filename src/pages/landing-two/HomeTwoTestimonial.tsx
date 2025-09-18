"use client";
import image from "@/../public/images/home-two/home-two-testimonials-1.png";
import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../home-one/HomeOneTestimonials";

const HomeTwoTestimonial = () => {
  return (
    <section className="fade-wrapper bg-primary text-white-1">
      <div className="container sm:border-e">
        <div className="spt120px flex justify-between rounded-br-[150px] border-b border-e pb-10 pr-20 max-xs:flex-col max-xs:gap-4 xs:items-center">
          <h3 className="h2 font-semibold">Testimonials</h3>{" "}
          <div className="flex items-center gap-5">
            <button className="customerSliderPrev theme-transition-3 border border-white-1 bg-white-1 p-3 text-black-4 hover:bg-transparent hover:text-white-1 xl:p-4">
              <IconArrowLeft />
            </button>
            <button className="customerSliderNext theme-transition-3 border border-white-1 bg-white-1 p-3 text-black-4 hover:bg-transparent hover:text-white-1 xl:p-4">
              <IconArrowRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-5 lg:border-e xl:col-end-4">
            <div className="mx-auto h-[60px] w-px bg-white-1 lg:mx-[40%]"></div>
            <div className="lg:smb120px w-fit border px-6 py-3 max-lg:mx-auto">
              Go to Our Partner Program
            </div>
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-5 xl:col-start-4">
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
                  <div className="flex gap-8 pt-6">
                    <IconQuote className="size-20 rotate-180" stroke={1} />
                    <div className="max-w-[702px] max-lg:pr-2">
                      <p className="xl-text fade-top font-normal text-white-1">
                        “ It&apos;s been 2 years since I found Bankio, and
                        it&apos;s such a relief as a small business owner to not
                        worry about unnecessary fees. I lost my credit card
                        once, and the service was so prompt that I was back to
                        work the next day!
                      </p>
                      <div className="smt40px spb120px flex items-center gap-6">
                        <Image
                          src={image}
                          width={100}
                          height={100}
                          alt="Testimonial Image"
                        />
                        <div>
                          <p className="h4 font-semibold text-white-1">
                            Andrew Russel
                          </p>
                          <p className="m-text text-white-4">VP of Marketing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoTestimonial;
