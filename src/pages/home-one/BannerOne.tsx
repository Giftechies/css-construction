import shapeTwo from "@/../public/images/home-one/banner-one-shape-small.png";
import user1 from "@/../public/images/home-one/banner-user-1.png";
import user2 from "@/../public/images/home-one/banner-user-2.png";
import user3 from "@/../public/images/home-one/banner-user-3.png";
import banner from "@/../public/images/home-one/home-one-banner-image.png";
import MainHeadingText from "@/components/shared/MainHeadingText";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import UserComponent from "@/components/shared/UserComponent";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const BannerOne = () => {
  return (
    <div className="home-one-hero-pattern fade-wrapper relative overflow-hidden bg-white-1 object-cover pt-[108px]">
      <div className="spt120px container">
        <SectionSubTitle text="Simple. Transparent. Secure" />
        <h1 className="d1 title-animation pt-3 font-semibold">
          Banking Solutions for <br className="max-sm:hidden" /> Businesses
        </h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-6">
            <MainHeadingText
              className="spt32px max-w-[485px]"
              text="Banking is the practice of accepting and safeguarding money owned and then lending out this money in order to earn a profit."
            />
            <div className="items-center justify-between max-lg:flex min-[320px]:max-[400px]:flex-col">
              <Link
                href="/contact-us"
                className="alter-btn btn-anim smt60px group relative z-10 inline-flex size-[140px] items-center justify-center gap-4 overflow-hidden rounded-full border  bg-primary font-semibold text-white-1 hover:border-accent-3 hover:text-black-4 lg:size-[200px]"
              >
                <div className="flex flex-col items-center justify-center">
                  <IconArrowUpRight size={40} />{" "}
                  <p className="capitalize">Open Account</p>
                </div>
                <span className="transition-width  transition-padding-top pointer-events-none absolute z-[-1] h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-accent-3 duration-700 group-hover:w-[calc(100%*2.25)] group-hover:pt-[calc(100%*2.25)]"></span>
              </Link>

              <UserComponent
                counterNumber={17}
                containerClassName="smt60px"
                images={[user1, user2, user3]}
              />
            </div>
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-6">
            <Image
              src={banner}
              width={1058}
              height={606}
              alt="Banner image"
              className="fade-top parallax-image-content relative z-10 overflow-hidden md:max-w-[unset]"
            />
          </div>
        </div>
      </div>
      <Image
        src={shapeTwo}
        width={140}
        height={140}
        alt="Image shape Two"
        className="fade-top absolute right-[7%] top-[10%] animate-custom-pulse max-sm:size-[80px] max-[400px]:size-[20px] sm:max-lg:size-[100px] lg:right-[10%] lg:top-[20%]"
      />
    </div>
  );
};

export default BannerOne;
