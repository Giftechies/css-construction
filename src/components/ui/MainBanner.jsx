import Link from "next/link";
import { IconArrowDown, IconChevronsRight } from "@tabler/icons-react";
import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";
import Breadcrumb from "../shared/Breadcrumbs";



export default function Banner({imgpath,pagename,pagepath,text}){
    return(
          <section
          style={{backgroundImage:`url(${imgpath})`}}
          
          className="fade-wrapper  homebanner relative overflow-hidden bg-sec  bg-cover bg-center  object-cover md:p-[108px] md:m-5  md:mt-25 md:rounded-3xl before:absolute before:inset-0 before:bg-black-1/60  xxl:mx-6">
      <div className="container overflow-hidden relative py-20 md:p-20 text-white-1 sm:pt-25  ">
         
        <div className=" place-items-center  ">
          <div className="max-md:spt60px  flex-center  flex-col text-center   ">
            <h1 className="d4 title-animation mt-3 font-medium   ">
            {pagename}
            </h1>
            {/* <p className="xl-text smt24px    text-white-4  ">
             {text}
            </p> */}
            <Breadcrumb/>
            <div className="smt40px flex items-center gap-5 max-xs:flex-wrap fade-top  justify-center">
              <HomeThreeBannerLink href="/signup" className=" " >Open Account</HomeThreeBannerLink>
              <HomeThreeBannerLink href="/pick-details" className=" " >Know Prices </HomeThreeBannerLink>
            </div>
          </div>
        </div>
       <div className=" hidden absolute bottom-0 right-10">
           <Link
            href="#scrollPosition"
            className="alter-btn btn-anim group/link relative z-10 inline-flex size-[140px] items-center justify-center gap-4 overflow-hidden rounded-full border border-[var(--primary)]  font-semibold text-[var(--primary)] hover:border-[var(--primary)] hover:text-black-4 "
          >
            <div className=" hid flex flex-col  items-center justify-center">
              <p className="capitalize">Scroll Down</p>
              <IconArrowDown size={32} stroke={1} className="max-sm:size-8" />
            </div>
            <span className="pointer-events-none absolute z-[-1] h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-prim duration-700 group-hover/link:w-[calc(100%*2.25)] group-hover/link:pt-[calc(100%*2.25)]"></span>
          </Link>
       </div>
   
      </div>
    </section>
    )
}