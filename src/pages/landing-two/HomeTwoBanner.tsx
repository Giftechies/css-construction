import user1 from "@/../public/images/home-one/banner-user-1.png";
import user2 from "@/../public/images/home-one/banner-user-2.png";
import user3 from "@/../public/images/home-one/banner-user-3.png";
import starImage from "@/../public/images/home-two/banner-star.png";
import vectorImage from "@/../public/images/home-two/banner-vector.png";
import cardImage from "@/../public/images/home-two/card-bg.png";
import bannerThumb from "@/../public/images/home-two/hero-thum.png";
import UserComponent from "@/components/shared/UserComponent";
import Counter from "@/components/shared/scroll-top/Counter";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

const HomeTwoBanner = () => {
  return (
    <section className="home-two-hero-pattern fade-wrapper relative overflow-hidden bg-hero-pattern object-cover pt-[108px]">
      <div className="container relative pt-20 sm:pt-25">
        <div className="grid-cols-12 items-center gap-10 sm:grid 4xl:gap-15">
          <div className="col-start-1 col-end-5 justify-end max-md:col-end-13 xl:col-end-4 4xl:flex">
            <Image
              src={bannerThumb}
              width={458}
              height={570}
              alt="home page banner thumb image"
              className=" fade-top max-xs:w-72 xs:max-md:w-80 4xl:max-w-[unset]"
            />
          </div>
          <div className="col-start-1 col-end-13 grid-cols-9 max-sm:mt-10 sm:grid md:col-start-5 xl:col-start-4">
            <div className="col-start-1 col-end-10 xl:col-end-9">
              <p className="xl-text title-animation font-medium capitalize">
                SAVE & MANAGE YOUR MONEY
              </p>
              <h1 className="d1 title-animation font-semibold">
                Explore{" "}
                <span className="text-primary underline underline-offset-8">
                  Next-Gen
                </span>{" "}
                Banking
              </h1>
            </div>
            <p className="xl-text fade-top col-start-1 col-end-9 mt-3 text-black-3 lg:col-end-8 xl:col-end-7">
              Banking is the practice of accepting and safeguarding money owned
              and then lending out this money in order to earn a profit.
            </p>
            <div className="smt40px col-start-1 col-end-8 flex bg-accent-4 py-2 pr-1 ps-5 lg:col-end-7 xl:col-end-5">
              <input
                type="text"
                className="w-full bg-inherit outline-none placeholder:font-medium placeholder:text-black-4"
                placeholder="Get The App"
              />
              <div className="bg-primary p-3">
                <IconArrowUpRight className="text-white-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pb-10 sm:pb-[70px]">
          {" "}
          <div className="col-start-1 col-end-13 mt-10 sm:col-end-8 md:mt-25">
            <div className="container flex flex-wrap items-center gap-6 sm:justify-between  sm:gap-10">
              <div>
                <div className="d2 theme-transition-3 font-medium">
                  <Counter value={120} />+
                </div>
                <p className="xl-text  mt-4 text-black-3">Partner with us</p>
              </div>
              <div>
                <div className="d2 theme-transition-3 font-medium">
                  $<Counter value={1.3} />+
                </div>
                <p className="xl-text  mt-4 text-black-3">
                  Cumulative trading volume
                </p>
              </div>
              <div>
                <div className="d2 theme-transition-3 font-medium">
                  <Counter value={705} />
                  K+
                </div>
                <p className="xl-text  mt-4 text-black-3">
                  Successful Projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-[70px] right-0 max-sm:pb-10 sm:absolute 3xl:-right-36 3xl:bottom-[70px] 4xl:-right-52">
          <UserComponent
            counterNumber={17}
            containerClassName="mt-0"
            images={[user1, user2, user3]}
          />
          <div className="smt40px">
            <Image
              src={cardImage}
              width={434}
              height={281}
              alt="card Image"
              className="fade-top max-3xl:w-72"
            />
          </div>
        </div>
        <Image
          src={vectorImage}
          width={217}
          height={103}
          alt="Vector Image"
          className="absolute right-0 top-[52px] max-xxl:size-30 max-xxl:rotate-90"
        />
        <Image
          src={starImage}
          width={198}
          height={198}
          alt="Star Image"
          className="absolute top-[177px] max-3xl:hidden 3xl:-right-36 4xl:-right-48"
        />
      </div>
    </section>
  );
};

export default HomeTwoBanner;
