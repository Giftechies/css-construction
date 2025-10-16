import Animations from "@/components/animations/Animations";
import AboutLocal from "@/pages/local/AboutPage";

import InnerBanner  from "@/components/ui/InnerBanner"
import { Metadata } from "next";
import Vision from "@/pages/home/Vision";
import Projects from "@/pages/projects/Projects";

export const metadata: Metadata = {
  title: "About Us - css construction",
  description: " ",
};

export default function AboutPage() {
  return (
    <div>
  <InnerBanner pagename={"About us"} imgpath={"/img/innerimg/about-us.avif"}  />
   <AboutLocal
          imagepath1={"/img/innerimg/project6.webp"}
          imagepath2={
            "/img/innerimg/project2.avif"
          }
          imagepath3={
            "/img/innerimg/project4.avif"
          }
          counterText={"Family choose us"}
          counterNumber={50}
          title={"Welcome to"}
          subheading={" Construction Site Services"}
          text1={
            "At Construction Site Service, we are proud to be one of the trusted names in skip hire and waste management / removal company in London, UK. With over 20-year experience of our promoters, we have provided thousands of households, contractors, and businesses with fast, affordable, and reliable waste disposal solutions."
          }
          text2={
            ""
          }
          buttonText={"Know More"}
          stepText1={"Domestic customers needing small skips for house, garage, loft, and garden rubbish collection and for garbage recycling "}
          stepText2={"Builders and tradespeople requiring builder’s skips, hardcore removal, and grab lorries for concrete cleaning services"}
          stepText3={"Commercial clients for office clearances, shop waste collections, and bulk site waste disposal"}
        />
        <Vision/>
        <Projects/>

    
      <Animations />
    </div>
  );
}
