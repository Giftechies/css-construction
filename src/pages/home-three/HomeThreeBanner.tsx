import HomeThreeBannerLink from "./HomeThreeBannerLink";
import ButtonHallow from "./ButtonHallow";
import DeskTopNavbarTwo from "@/components/navbar/DeskTopNavbarTwo";
import Blocks from "@/pages/home/Blocks";
import Mobilenav from "@/components/navbar/Mobilenav";
import { IconEdit, IconArrowUpRight, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { PhoneCall, Section } from "lucide-react";
import Image from "next/image";

const HomeThreeBanner = () => {
  return (
    // <section className="fade-wrapper homebanner relative w-full h-[40rem]  flex flex-col items-center justify-center  before:absolute before:inset-0 before:-z-40 before:bg-black-4/60     mb-[25rem] lg:mb-[6rem] ">
    //   <div className="img absolute inset-0 w-full h-full -z-50">
    //     <img src="/img/innerimg/skip-hire.jpg" className="size-full object-cover object-right-[40px] xl:object-center "  alt="" />
    //   </div>
    //   <DeskTopNavbarTwo className=" z-80 absolute -top-3 z-80 left-0   text-white-1 s-text font-oswald  font-medium tracking-wider  " />
    //   <Mobilenav className={''}  />
    //   <Blocks className='absolute -bottom-[25rem]  lg:-bottom-[5rem] left-[50%] -translate-x-[50%] ' />
    //   <div className="container relative  max-lg:py-20 text-white-1 sm:pt-30   ">

    //     <div className="grid grid-cols-12  w-full lg:w-[60%]  ">
    //       <div className="max-md:spt60px max-4xl:spb120px col-start-1 col-end-13     ">

    //         <h1 className={`d4 title-animation mt-3 font-semibold leading-tight uppercase   `}>
    //         Strength in Concrete. <br /> Clarity in Waste.
    //         </h1>
    //         <p className=" mt-4  tracking-wider " >London’s trusted experts in affordable skip hire services</p>

    //         <div className="smt40px  max-xs:flex-wrap fade-top flex gap-5 items-start ">
    //          <HomeThreeBannerLink href="/booking-skip-online" className="  " >   Get Instant Quote  <IconEdit className=" size-5 theme-transition-3  group-hover:rotate-45" />{" "} </HomeThreeBannerLink>

    //          {/* <ButtonHallow href="tele: 0208 574 6333" className=" max-lg:px-10  " > <PhoneCall size={17}  /> 0208 574 6333  </ButtonHallow> */}
    //          <ButtonHallow href="tele: 0208 574 6333" className=" max-lg:px-10  " > <PhoneCall size={17}  /> 0208 574 6333  </ButtonHallow>
    //          <Link href={"tele: 0208 574 6333"} ></Link>

    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </section>
    <section className="  relative h-[40rem] w-full mb-96 lg:mb-20">
        <DeskTopNavbarTwo className=" z-80 absolute -top-3 z-30 left-0   text-white-1 s-text font-oswald  font-medium tracking-wider  " />
       <Mobilenav className={''}  />

      <div className="z-0 absolute inset-0 h-full w-full overflow-hidden ">
        <Image
          width={600}
          height={600}
          alt="banner Image"
          className=" h-full w-full object-cover object-center "
          src="/img/innerimg/skip-hire.jpg"
          />
      </div>
      <div className="absolute inset-0 z-10 h-full w-full bg-black-4/40 " />
      <div className=" w-[90%] md:w-[85%] left-1/2 -translate-x-1/2  absolute z-20 bottom-60 text-white-1">
        <h1
          className={`d4 title-animation mt-3 font-semibold uppercase leading-tight   `}
        >
          Strength in Concrete. <br /> Clarity in Waste.
        </h1>
        <p className=" mt-4  tracking-wider ">
          London’s trusted experts in affordable skip hire services
        </p>
            
             <div className=" flex flex-col lg:flex-row gap-6 mt-4 ">

               <Link href="/booking-skip-online" className="s-text theme-transition-3 px-6 flex items-center gap-3 border  tracking-wider  font-[600] border-primary bg-primary py-[10px] text-white-1  hover:bg-transparent capitalize    w-fit   rounded-full text-white  border-white  bg-transparent hover:border-primary hover:text-primary" >  Get Instant Quote  <IconEdit className=" size-5 theme-transition-3  group-hover:rotate-45" /></Link>
             <Link href="tel:0208 574 6333" className="s-text theme-transition-3 px-6 flex items-center gap-3 border  tracking-wider  font-[600] border-primary bg-primary py-[10px] text-white-1  hover:bg-transparent capitalize    w-fit   rounded-full text-white  border-white  bg-transparent hover:border-primary hover:text-primary" ><PhoneCall size={17}  /> 0208 574 6333 </Link>
             </div>
    
      </div>
<Blocks className='absolute -bottom-[23rem]  lg:-bottom-[5rem] left-[50%] -translate-x-[50%] z-30  ' />
    </section>
  );
};

export default HomeThreeBanner;
