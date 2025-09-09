import Home from "@/app/page";
import SectionText from "@/components/shared/SectionText";
import React from "react";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";
import Loan from "@/pages/loan/LoanContent"
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
    <div className=" bg-white-1/40 py-25  ">
      <div className="container  gap-4 ">
        <div className="text mb-8 flex flex-col items-center justify-center gap-4 px-10">
          <p className=" text-[17px] font-[700] leading-[20px] tracking-tight text-primary  ">
            Recents Projects
          </p>
          <h2 className=" h2 text-center font-[700] ">
            What we Have Done
          </h2>
          <SectionText
            className=" text-center font-[500] tracking-tight  "
            text={
              "Discover how we’ve transformed ideas into reality through our exceptional construction solutions."
            }
          />
        </div>
        {/* <div className="card flex flex-wrap items-center justify-center gap-4 "> */}
          {/* {cards.map((item,id)=>{
            return(
              <div key={id} className="card1 group relative min-h-80 w-[400px] rounded-md overflow-hidden border">
            <div className="absolute z-10 h-96 w-full">
              <img
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
                className="h-full w-full object-cover object-center"
                alt="Building"
              />
            </div>

          
            <div className="absolute inset-0 z-20 bg-black-1/50 opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

            
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-center text-white-1">
              <p
                className={`text-[24px]    font-[700] transition-all duration-500 group-hover:scale-110 group-hover:opacity-0`}
              >
                City Dwellers
              </p>
              <p className="text-[14px] font-[500] transition-all duration-500 group-hover:scale-110 group-hover:opacity-0">
                Lorem ipsum dolor
                </p>
                </div>
                </div>
                )
                })} */}
                <Loan/>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Project;
