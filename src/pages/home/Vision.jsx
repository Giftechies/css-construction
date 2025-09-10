import React from "react";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";

const Vision = () => {
  return (
    <section>
      <div class="parallax-bg relative w-full h-[60vh]  bg-[url(https://media.istockphoto.com/id/615926270/photo/night-in-warsaw.webp?a=1&b=1&s=612x612&w=0&k=20&c=j-zWimePBOwt-oqaFlaVJzECEW4zc9nyOExxPZuJ5l4=)]   flex items-center justify-center">
        {/* <!-- Overlay to make text more readable --> */}
        <div className="bg-black-4/80 absolute inset-0 "></div>
        <div class=" container text-white-1 relative z-10 p-8 text-center  flex flex-col items-center justify-center  ">
          <h1 class="h5 font-[700] uppercase text-primary   ">
            CSS Construction
          </h1>
          <p class="mt-4 d4  font-[700]">
          Turning waste into a cleaner, greener future.</p>
              <HomeThreeBannerLink href="/pick-details" className=" w-fit mt-4 bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-white-1  hover:border-white-1 " >know More</HomeThreeBannerLink>
        </div>
      </div>
    </section>
  );
};

export default Vision;
