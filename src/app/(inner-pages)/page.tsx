
import Animations from "@/components/animations/Animations";

import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import { Metadata } from "next";

import AboutLocal from "@/pages/local/AboutPage";
import ServicePage from "@/pages/services/Servicespage";
import Projects from "@/pages/projects/Projects";

import Vision from "@/pages/home/Vision"

import EducationLoanFaq from "@/pages/education-loan/EducationLoanFaq";

// export const metadata: Metadata = {
//   title: "Interstate removalists",
//   description: "Providing the solution for relocations.",
// };

export default function Home() {
  console.log('dfsdsd>>>');
  
  return (
    <div>
      <HomeThreeBanner />
      <AboutLocal
        imagepath1={"/img/innerimg/1.png"}
        imagepath2={
          "/img/innerimg/2.png"
        }
        imagepath3={
          "/img/innerimg/3.png"
        }
        counterText={"Family choose us"}
        counterNumber={50}
        title={"Welcome to"}
        subheading={" Construction Site Services"}
        text1={
          "Welcome to Construction Site Services, the experts in cheap skip hire service in London, waste management, and building material supply. We are a fully licensed and insured company, offering reliable and affordable waste disposal and recycling services across all London boroughs, suburbs, and postcodes."
        }
        text2={
          ""
        }
        buttonText={"Know More"}
        stepText1={"Affordable skip hire in London (all sizes available)."}
        stepText2={"Roll-on Roll-off skips for industrial waste removal"}
        stepText3={"Builders waste clearance and site clearances."}
        stepText4={"Eco-friendly waste disposal and recycling services"}
        stepText5={"High-quality ready-mix concrete, screed and floor mixes"}
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
