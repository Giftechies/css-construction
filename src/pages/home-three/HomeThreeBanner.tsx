
import HomeThreeBannerLink from "./HomeThreeBannerLink";
import ButtonHallow from "./ButtonHallow"
import DeskTopNavbarTwo from "@/components/navbar/DeskTopNavbarTwo";
import Blocks from "@/pages/home/Blocks";
import Mobilenav from "@/components/navbar/Mobilenav"
import { IconEdit, IconArrowUpRight,IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const HomeThreeBanner = () => {
  return (
    <section className="fade-wrapper homebanner relative w-full h-[40rem]  flex flex-col items-center justify-center  before:absolute before:inset-0 before:-z-40 before:bg-black-4/60     mb-[25rem] lg:mb-[6rem] ">
      <div className="img absolute inset-0 w-full h-full -z-50">
        <img src="/img/innerimg/skip-hire.jpg" className="size-full object-cover object-right-[40px] xl:object-center "  alt="" />
      </div>
      <DeskTopNavbarTwo className=" z-80 absolute -top-3 z-80 left-0   text-white-1 s-text font-oswald  font-medium tracking-wider  " />
      <Mobilenav className={''}  />
      <Blocks className='absolute -bottom-[25rem]  lg:-bottom-[5rem] left-[50%] -translate-x-[50%] ' />
      <div className="container relative  max-lg:py-20 text-white-1 sm:pt-30   ">
         
        <div className="grid grid-cols-12  w-full lg:w-[60%]  ">
          <div className="max-md:spt60px max-4xl:spb120px col-start-1 col-end-13     ">
           
            <h1 className={`d4 title-animation mt-3 font-semibold leading-tight uppercase   `}>
            Strength in Concrete. <br /> Clarity in Waste.
            </h1>
            <p className=" mt-4  tracking-wider " >London’s trusted experts in affordable skip hire services</p>
            
            <div className="smt40px  max-xs:flex-wrap fade-top flex gap-5 items-start ">
             <HomeThreeBannerLink href="/booking-skip-online" className="  " >   Get Instant Quote  <IconEdit className=" size-5 theme-transition-3  group-hover:rotate-45" />{" "} </HomeThreeBannerLink>
           
             <ButtonHallow href="tele: 0208 574 6333" className=" max-lg:px-10  " > <PhoneCall size={17}  /> 0208 574 6333  </ButtonHallow>
             
            
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default HomeThreeBanner;
