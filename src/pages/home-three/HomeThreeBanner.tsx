import bannerImage from "@/../public/images/home-three/banner-three-image.png";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import Image from "next/image";
import HomeThreeBannerLink from "./HomeThreeBannerLink";
import HomeThreeBannerSideElement from "./HomeThreeBannerSideElement";
import DeskTopNavbarTwo from "@/components/navbar/DeskTopNavbarTwo";
import Blocks from "@/pages/home/Blocks";

const HomeThreeBanner = () => {
  return (
    <section className="fade-wrapper homebanner relative    py-[108px]      bg-[url('/img/banner-img/main-banner.jpg')] bg-cover bg-center  object-cover  before:absolute before:inset-0 bef before:bg-black-4/60 mb-25 ">
      <DeskTopNavbarTwo className=" z-80 absolute top-0 z-80 left-0   text-white-1  " />
      <Blocks className='absolute  -bottom-20 left-[50%] -translate-x-[50%] ' />
      <div className="container relative  py-20 text-white-1 sm:pt-30   ">
         
        <div className="grid grid-cols-12 w-[60%] ">
          <div className="max-md:spt60px max-4xl:spb120px col-start-1 col-end-13     ">
           
            <h1 className="d4 title-animation mt-3 font-semibold leading-tight uppercase  " >
             Everything you need for your next move
            </h1>
            <p className=" mt-4  tracking-wider " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, quos!</p>
            
            <div className="smt40px  max-xs:flex-wrap fade-top  justify-center">
             <HomeThreeBannerLink href="/pick-details" className=" w-fit  bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-white-1  hover:border-white-1 " >Get Instant Quote</HomeThreeBannerLink>
              {/* <HomeThreeBannerLink href="/pick-details" className=" border-[var(--primary)] text-[var(--primary)] hover:bg-prim hover:text-white-1 " >Get Instant Quote</HomeThreeBannerLink> */}
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default HomeThreeBanner;
