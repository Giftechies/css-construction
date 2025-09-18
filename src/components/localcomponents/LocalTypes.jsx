"use client";
import teamVector from "@/../public/images/home-one/home-one-theam-vector.png";
import RoundedLink from "@/components/link/RoundedLink";
import CircleBottomLeft from "@/components/shared/CircleBottomLeft";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import SectionText from "@/components/shared/SectionText";
import Card from './Card'
const LocalType = ({localCard,title,subtitle,text,buttontext,buttonlink}) => {

  return (
    <section className="spy120px relative overflow-clip bg-white-4">
      <div className="container flex justify-between gap-5 max-sm:flex-col sm:items-center sm:gap-6">
        <div>
          <SectionSubTitle text={`${subtitle}`}/>
          <SectionTitle
            text={`${title}`}
            
            className="mt-3 max-w-[703px]"
          />
          <SectionText text={`${text}`}/>
        </div>
        <RoundedLink buttonText={`${buttontext}`} link={buttonlink} />
      </div>
      <div className="container py-20 overflow-hidden " >

        <div className=" grid grid-cols-1  items-center justify-center  md:grid-cols-2 lg:grid-cols-3 gap-6  " >
          { localCard.map((item,id)=>{
            return(
              <Card key={id} {...item} />
            )
          })}

        </div>

      </div>

    
      <div>
      </div>
      <Image
        src={teamVector}
        width={146}
        height={154}
        alt="Team Vector"
        className=" max-3xl:size-20  max-md:hidden m"
      />
      <CircleBottomLeft />
    </section>
  );
};

export default LocalType;
