"use client";
import vector from "@/../public/images/home-three/vector.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import planCircle from "@/../public/images/home-three/plan-circle.png";
import robot from "@/../public/images/home-three/robot.png";
import RoundedLink from "@/components/link/RoundedLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  IconDiscountCheck,
  IconPresentation,
  IconRoute,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import { useEffect } from "react";
import HomeThreeFinancialCard from "./HomeThreeFinancialCard";

const HomeThreeFinancialPlan = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      const deviceWidth = window.innerWidth;
      if (document.querySelector(".banner") && deviceWidth >= 1700) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=80%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(".banner-thumb-one", {
          transform: "translateY(800px)",
          y: "0px",
          opacity: 1,
          duration: 3,
        });
      }
    }
  }, []);

  return (
    <section className="banner relative z-10 overflow-hidden bg-secondary/5 text-white-1 after:bottom-0 after:right-0 after:-z-10 after:h-full after:w-1/2 after:bg-secondary lg:after:absolute">
      <div className="max-lg:spy120px container relative grid grid-cols-12 items-center">
        <div className="col-start-1 col-end-13 grid max-lg:gap-3 xs:grid-cols-2 lg:col-end-7">
          <HomeThreeFinancialCard
            icon={<IconPresentation className="size-10" />}
            title="Boost your Payments"
            text="Reduced Payments maintenance and processing fees. No hidden fees."
          />
          <HomeThreeFinancialCard
            icon={<IconUsers className="size-10" />}
            title="Agent Banking"
            text="Stay updated. check your bank account to manage funds and track transactions securely."
          />
          <HomeThreeFinancialCard
            icon={<IconDiscountCheck className="size-10" />}
            title="Savings Account"
            text="Reduced Payments maintenance and processing fees. No hidden fees."
          />
          <HomeThreeFinancialCard
            icon={<IconRoute className="size-10" />}
            title="Pay Out & Refund"
            text="Execute pay outs and refunds straight to your customer’s bank account via BabuZ."
          />
        </div>
        <div className="max-lg:spb40px col-start-1 col-end-13 max-lg:row-start-1 lg:col-start-7 lg:ps-20 xxl:ps-[134px]">
          <SectionSubTitle
            text="Financial Planning"
            className="text-black-4 lg:text-white-1"
          />
          <SectionTitle
            text="Financial Mastery. The Right Way to Plan"
            className="h2 mt-3 max-lg:text-black-4"
          />
          <SectionText
            text="Lending that doesn't weigh you down.We know how hard is it to start something new, that’s why we have the perfect plan for you."
            className="mt-5 lg:text-white-2"
          />

          <div className="spt40px">
            <RoundedLink
              buttonText="Apply for a loan"
              link="/contact"
              className="bg-accent-3 text-black-4 hover:border-accent-3 hover:bg-transparent max-sm:w-48 sm:size-[160px] lg:size-[180px]"
            />
          </div>
        </div>
      </div>
      <Image
        src={robot}
        width={278}
        height={251}
        alt="Service animal"
        className="banner-thumb-one absolute left-0 top-[107px] max-4xl:hidden max-3xl:w-30 max-sm:hidden"
      />
      <Image
        src={planCircle}
        width={225}
        height={239}
        alt="Service animal"
        className="absolute bottom-0 right-0 max-3xl:w-30 max-sm:hidden"
      />
      <Image
        src={vector}
        width={202}
        height={97}
        alt="Vector"
        className="absolute right-20 top-14 max-lg:hidden xxl:top-20"
      />
    </section>
  );
};

export default HomeThreeFinancialPlan;
