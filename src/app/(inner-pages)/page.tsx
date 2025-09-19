
import Animations from "@/components/animations/Animations";
import HomeOneFinancialPlanning from "@/pages/home-one/HomeOneFinancialPlanning";
import HomeOneInfo from "@/pages/home-one/HomeOneInfo";

import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import { Metadata } from "next";

import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import HowItrWorksContent from "@/pages/how-it-works/HowItrWorksContent";
import AboutLocal from "@/pages/local/AboutPage";
import ServicePage from "@/pages/services/Servicespage";
import Projects from "@/pages/projects/Projects";
import HomeTwoServices from "@/pages/landing-two/HomeTwoServices";
import Vision from "@/pages/home/Vision"
import Logocontainer from "@/pages/home/Logocontainer"
import EducationLoanFaq from "@/pages/education-loan/EducationLoanFaq";

// export const metadata: Metadata = {
//   title: "Interstate removalists",
//   description: "Providing the solution for relocations.",
// };

export default function Home() {
  return (
    <div>
      <HomeThreeBanner />
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
        stepText1={"Affordable skip hire in London (all sizes available)."}
        stepText2={"Roll-on Roll-off skips for industrial waste removal"}
        stepText3={"Builders waste clearance and site clearances."}
      />

      <ServicePage />
      {/* <HomeTwoServices/> */}
      <Vision/>
      <Projects/>
       <EducationLoanFaq/>
      <HomeOneTestimonials />
      <Animations />

    </div>
  );
}
