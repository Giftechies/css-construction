import React from "react";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";

const Vision = () => {
  return (
    <section>
      <div class="parallax-bg relative   flex items-center justify-center">
        {/* <!-- Overlay to make text more readable --> */}
        <div class="bg-black-4/60 absolute inset-0 "></div>
        <div class=" container text-white-1 relative z-10 p-8 text-center  flex flex-col items-center justify-center  ">
          <h1 class="h5 font-[700] uppercase text-primary   ">
            Bring your vision to life
          </h1>
          <p class="mt-4 d4  font-[700]">
            Get started on your dream construction project today.</p>
              <HomeThreeBannerLink href="/pick-details" className=" w-fit mt-4 bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-white-1  hover:border-white-1 " >know More</HomeThreeBannerLink>
        </div>
      </div>
    </section>
  );
};

export default Vision;
