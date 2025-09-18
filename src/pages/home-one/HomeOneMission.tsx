"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import image1 from "@/../public/images/home-one/home-one-our-mission-1.png";
import image2 from "@/../public/images/home-one/home-one-our-mission-2.png";
import shape from "@/../public/images/home-one/home-one-our-mission-shape.png";
import RoundedLink from "@/components/link/RoundedLink";
import CircleBottomLeft from "@/components/shared/CircleBottomLeft";
import Lines from "@/components/shared/Lines";
import SectionInnerTitle from "@/components/shared/SectionInnerTitle";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import Image from "next/image";
import { useEffect } from "react";

const HomeOneMission = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      const deviceWidth = window.innerWidth;
      if (document.querySelector(".banner") && deviceWidth >= 1700) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "top center",
            end: "+=90%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(".banner-thumb-one", {
          transform: "translateY(1000px)",
          y: "0px",
          opacity: 1,
          duration: 3,
        });
      }
    }
  }, []);

  return (
    <section className="spt120px spb120px banner fade-wrapper relative overflow-hidden">
      <div className="container grid grid-cols-12 items-center gap-6">
        <div className="relative col-start-1 col-end-13 grid grid-cols-6 gap-6 sm:-space-x-[150px]  sm:space-y-[200px] md:space-y-[300px] lg:col-end-7 xl:-space-x-[100px] xl:space-y-[350px]">
          <div className="col-start-1 col-end-7 sm:col-end-5">
            <Image
              src={image1}
              width={416}
              height={616}
              alt="Mission image one"
              className="block max-sm:mx-auto"
            />
          </div>
          <div className="col-start-1  col-end-7 sm:col-start-5">
            <div className="absolute top-8 max-sm:rounded-md max-sm:border max-sm:border-white-2 max-sm:bg-white-1 max-sm:p-5 max-sm:shadow-md sm:right-0 sm:top-20 md:right-32 md:top-6 lg:right-0 xl:top-20">
              <div className="d1 font-semibold text-primary">
                <Counter value={25} />+
              </div>
              <p className="xl-text max-w-[150px] text-black-1">
                Years Of Experience
              </p>
            </div>
            <Image
              src={image2}
              width={306}
              height={359}
              alt="Mission image one"
              className="block max-sm:mx-auto"
            />
          </div>
        </div>
        <div className="col-start-1 col-end-13 lg:col-start-7 xl:col-start-8">
          <div>
            <SectionSubTitle text="About Us" />
            <SectionTitle
              text="Your in achieving ambition beyond borders"
              className="pt-3"
            />
            <SectionText
              className="pt-3"
              text="We understand that with global ambition, comes global challenges, and we are here to bridge the gap by financial services. Consider us your helping you make the most of your money."
            />
          </div>
          <div className="spt120px fade-top flex  gap-6 md:gap-10 max-sm:flex-col lg:max-xl:flex-col lg:max-xl:gap-6 xl:items-center xxl:gap-10">
            <RoundedLink buttonText="More About" link="/about-us" />
            <div>
              <SectionInnerTitle
                text="Our mission"
                className="h3 font-medium"
              />
              <SectionText
                className="pt-3"
                text="Highlights the impact of technology on the banking industry, enabling convenient digital access to financial services."
              />
            </div>
          </div>
        </div>
        {/* <div className="banner-thumb-one absolute right-36 top-5 max-sm:hidden xl:top-20">
          <Image
            src={shape}
            width={128}
            height={127}
            alt="Mission Shape"
            className="hidden max-xxl:size-[80px] min-[1700px]:block"
          />
        </div> */}
      </div>
      <CircleBottomLeft />
      <Lines />
    </section>
  );
};

export default HomeOneMission;
