"use client";
import aboutImage from "@/../public/images/home-two/about-image.png";
import serviceCoin from "@/../public/images/home-two/service-coin.png";
import serviceStar from "@/../public/images/home-two/service-star.png";
import serviceStars from "@/../public/images/home-two/service-stars.png";
import RoundedLink from "@/components/link/RoundedLink";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import "swiper/swiper-bundle.css";

const HomeTwoAboutUs = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      const deviceWidth = window.innerWidth;
      if (document.querySelector(".image-move-section") && deviceWidth >= 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".image-move-section",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(".move-thumb-one img", {
          transform: "rotate(14deg)",
          x: "300px",
          opacity: 1,
          duration: 3,
        });
      }
    }
  });

  return (
    <section className="spy120px fade-wrapper image-move-section relative overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 flex justify-end overflow-y-clip overflow-x-visible xl:col-end-6">
            <Image
              src={aboutImage}
              width={673}
              height={673}
              alt="about section image"
              className="reveal-img parallax-img max-xl:mx-auto max-xl:block xxl:max-w-[unset]"
            />
          </div>
          <div className="col-start-1 col-end-13 xl:col-start-6 xxl:col-start-7">
            <div className="max-w-[416px]">
              <SectionSubTitle text="About Us" />
              <SectionTitle
                text="Introduction to Banking"
                className="h2 mt-3"
              />
              <SectionText
                text="This section provides an overview of what banking is and its importance in the financial system."
                className="fade-top mt-3 text-black-1"
              />
            </div>
            <div className="mt-8 flex gap-6 max-sm:flex-col-reverse sm:items-center sm:gap-8 xl:mt-[55px] xl:gap-15">
              <div>
                <RoundedLink
                  buttonText="About More"
                  link="/about-us"
                  className="bg-primary text-white-1 hover:bg-transparent hover:text-black-4 lg:size-[180px]"
                />
              </div>
              <div>
                <SectionTitle text="Online and Mobile Banking" className="h2" />
                <SectionText
                  text="Highlights the impact of technology on the banking industry, enabling convenient digital access to financial services."
                  className="fade-top mt-3 text-black-1"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={serviceStars}
          width={125}
          height={120}
          alt="Service star"
          className="absolute right-5 top-0 animate-custom-pulse max-md:w-20 xxl:-right-15"
        />
      </div>
      <Image
        src={serviceCoin}
        width={250}
        height={136}
        alt="Service star image"
        className="absolute bottom-0  right-0 max-md:w-30 md:max-xxl:w-40"
      />
      <div className="move-thumb-one absolute top-10 animate-custom-pulse sm:left-18 sm:top-15">
        <Image
          src={serviceStar}
          width={131}
          height={131}
          alt="Service star"
          className="max-md:w-20 "
        />
      </div>

      <Lines />
    </section>
  );
};

export default HomeTwoAboutUs;
