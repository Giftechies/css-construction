import bannerImage from "@/../public/images/home-three/banner-three-image.png";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import Image from "next/image";
import HomeThreeBannerLink from "./HomeThreeBannerLink";
import HomeThreeBannerSideElement from "./HomeThreeBannerSideElement";
import DeskTopNavbarTwo from "@/components/navbar/DeskTopNavbarTwo";
import Blocks from "@/pages/home/Blocks";
import { oswald } from "@/utils/fonts";
import MobileNavbar from "@/components/navbar/MobileNavbar"

const HomeThreeBanner = () => {
  return (
    <section className="fade-wrapper homebanner relative    lg:py-[60px]    before:absolute before:inset-0 before:-z-40 before:bg-black-4/60  mb-[90vh] md:mb-[80vh] lg:mb-25 ">
      <div className="img absolute inset-0 w-full h-full -z-50">
        <img src="/img/innerimg/skip-hire.jpg" className="size-full object-cover object-center "  alt="" />
      </div>
      <DeskTopNavbarTwo className=" z-80 absolute -top-6 z-80 left-0   text-white-1 s-text   font-medium tracking-wider  " />
      <MobileNavbar  className=" z-80 absolute -top-0 left-0 "   />
      <Blocks className='absolute   -bottom-[90vh] md:-bottom-[78vh]  lg:-bottom-20 left-[50%] -translate-x-[50%] ' />
      <div className="container relative  max-lg:py-20 text-white-1 sm:pt-30   ">
         
        <div className="grid grid-cols-12  w-full lg:w-[60%]  ">
          <div className="max-md:spt60px max-4xl:spb120px col-start-1 col-end-13     ">
           
            <h1 className={`d4 title-animation mt-3 font-semibold leading-tight uppercase   `}>
            Building your vision,<br /> brick by brick.
            </h1>
            <p className=" mt-4  tracking-wider " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, quos!</p>
            
            <div className="smt40px  max-xs:flex-wrap fade-top flex gap-5 items-start ">
             <HomeThreeBannerLink href="/pick-details" className=" w-fit   rounded-full text-white-1    hover:bg-transparent hover:text-white-1  hover:border-white-1  capitalize " >Get Instant Quote</HomeThreeBannerLink>
             <HomeThreeBannerLink href="/pick-details" className=" w-fit   rounded-full text-primary  border-primary  bg-transparent hover:text-white-1 hover:bg-primary  " >Our Services</HomeThreeBannerLink>
              {/* <HomeThreeBannerLink href="/pick-details" className=" border-[var(--primary)] text-[var(--primary)] hover:bg-prim hover:text-white-1 " >Get Instant Quote</HomeThreeBannerLink> */}
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default HomeThreeBanner;
