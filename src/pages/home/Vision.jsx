import React from "react";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { IconEdit } from "@tabler/icons-react";

const Vision = () => {
  return (
    <section>
      <div class="parallax-bg relative w-full h-[30rem]   bg-[url(https://media.istockphoto.com/id/615926270/photo/night-in-warsaw.webp?a=1&b=1&s=612x612&w=0&k=20&c=j-zWimePBOwt-oqaFlaVJzECEW4zc9nyOExxPZuJ5l4=)]   flex items-center justify-center">
        {/* <!-- Overlay to make text more readable --> */}
        <div className="bg-black-4/80 absolute inset-0 "></div>
        <div class=" container text-white-1 relative z-10 p-8 text-center gap-6  flex flex-col items-center justify-center  ">
        
        <SectionSubTitle text="CSS Construction"/>
        <h1 className="h1 font-semibold   capitalize font-oswald "  >Turning waste into a cleaner, greener future.</h1>
         
         
          <SectionText className=" text-white-1/60 w-[90%] " text="We cover Central, East, South, West, and North London, including postcodes from EC, WC, W, N, NW, E, SE, SW, CR, BR, UB, HA, TW, IG, and RM."/>
          <HomeThreeBannerLink href="/booking-skip-online" className="  " >   Get Instant Quote  <IconEdit className=" size-5 theme-transition-3  group-hover:rotate-45" />{" "} </HomeThreeBannerLink>
          
        </div>
      </div>
    </section>
  );
};

export default Vision;
