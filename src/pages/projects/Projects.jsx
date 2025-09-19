import Home from "@/app/(inner-pages)/page";
import SectionText from "@/components/shared/SectionText";
import React from "react";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";
import Loan from "@/pages/loan/LoanContent"
import SectionSubTitle from "@/components/shared/SectionSubTitle";
const Project = () => {
  const cards = [

      {title:"df",content:"ds",link:"dfs" },
      {title:"df",content:"ds",link:"dfs" },
      {title:"df",content:"ds",link:"dfs" },
      {title:"df",content:"ds",link:"dfs" },
      {title:"df",content:"ds",link:"dfs" },
      {title:"df",content:"ds",link:"dfs" },
  ]

  return (
    <div className=" bg-white-1/40 py-10 xl:py-25  ">
      <div className="container  gap-4 ">
        <div className="text mb-8 flex flex-col items-center justify-center gap-4 px-10">
          <SectionSubTitle text="  Recents Projects"/>
                    <h2 className=" h2 text-center font-[700] ">
            What we Have Done
          </h2>
          <SectionText
            className=" text-center font-[500] tracking-wider  "
            text={
              "Discover how we’ve transformed ideas into reality through our exceptional construction solutions."
            }
          />
        </div>
      
                <Loan/>

      </div>
    </div>
  );
};

export default Project;
