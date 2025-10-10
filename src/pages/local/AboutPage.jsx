
import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import { IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";


const AboutLocal = ({imagepath1,imagepath2, imagepath3 ,counterNumber,counterText,title,text1,text2,buttonText,stepText1,stepText2,stepText3,subheading}) => {
  return (
    <section
      className="spt80px fade-wrapper spb120px relative overflow-hidden"
      id="scrollPosition"
    >
      <div className="container  grid grid-cols-12 items-center gap-6">
        <div className="relative h-full   col-start-1 col-end-13 grid grid-cols-12 items-center   xl:col-end-7 xl:grid-cols-12 xl:items-end gap-5">
          <div className=" col-start-1 max-xl:h-[20vh]  col-end-7 xl:absolute bottom-0 left-0 hover:bottom-2  theme-transition-4 rounded-md overflow-hidden  xl:h-[70%]   xl:col-end-5 ">
            <Image
              src={imagepath1}
              width={416}
              height={444}
              alt="Mission image one"
              className=" w-full h-full object-cover object-center"
            />
          </div>
          <div className="  hover:bottom-2  col-start-7 col-end-13 max-xl:h-[25vh] xl:h-[85%]  xl:col-start-5 xl:col-end-9 rounded-md overflow-hidden">
            <Image
              src={imagepath2}
              width={330}
              height={348}
              alt="Mission image two"
              className="  h-full object-cover object-center "
            />
           
          </div>
          <div className=" hidden xl:block absolute bottom-0 right-0 hover:bottom-2  h-[95%] xl:col-start-9 xl:col-end-13 theme-transition-4 rounded-md overflow-hidden ">
            <Image
              src={imagepath3}
              width={330}
              height={348}
              alt="Mission image two"
              className="   h-full object-cover object-center "
            />
           
          </div>
        </div>
        <div className="col-start-1 col-end-13 xl:col-start-8  ">
          <SectionSubTitle text={title? title: "Who we are"} className=" " />
          <SectionTitle
            text={subheading?subheading:"Our Mission & Vision"}
            className="h1 text-left  text-black-2 pt-3  "
          />
          <SectionText
            className="fade-top text-left    pt-5"
            text={text1}
          />
  
          <div className="spt32px flex flex-col gap-3">
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>{stepText1?stepText1:"Designing every move with precision and perfection."}</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>{stepText2?stepText2:"Structured planning ensures smooth and reliable relocation."}</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>{stepText3? stepText3:"Strong foundations make your moving journey stress-free."}</span>
            </div>
          </div>
           <HomeThreeBannerLink href="/pick-details" className=" mx-auto bg-prim rounded-full text-white-1    hover:bg-transparent hover:text-primary  hover:border-primary w-fit mt-6 " >{buttonText?  buttonText:"Get Instant Quote"}</HomeThreeBannerLink>  
        </div>
      </div>
    </section>
  );
};

export default AboutLocal;
