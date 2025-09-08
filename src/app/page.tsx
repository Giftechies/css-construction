
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

// export const metadata: Metadata = {
//   title: "Interstate removalists",
//   description: "Providing the solution for relocations.",
// };

export default function Home() {
  return (
    <div>
      <HomeThreeBanner />
      <AboutLocal
        imagepath1={"/img/innerimg/localimg.png"}
        imagepath2={
          "https://media.istockphoto.com/id/487175846/photo/delivery-man-unloading-truck.webp?a=1&b=1&s=612x612&w=0&k=20&c=OkcEhNbpV0w9JPTgNqCkJ_IZx5fXnqktOdbOsffF3Es="
        }
        counterText={"Family choose us"}
        counterNumber={50}
        title={"Few words about"}
        subheading={"Interstate Removalists"}
        text1={
          "Local moving refers to the process of relocating household goods or personal belongings within the same city or metropolitan area. ."
        }
        text2={
          "With our expert team, your local move becomes stress-free. From careful packing to quick transport, we handle everything smoothly so you can settle into your new place with ease and peace of mind. 🚛✨"
        }
        buttonText={"Know More"}
        stepText1={"Designing every move with precision and perfection."}
        stepText2={"Structured planning ensures smooth and reliable relocation."}
        stepText3={"Strong foundations make your moving journey stress-free."}
      />

      <ServicePage />
      <Projects/>
      <HomeTwoServices/>
    

      {/* <HowItrWorksContent /> */}
      {/* <HomeOneFinancialPlanning />
      <HomeTwoFaq />
      <HomeOneInfo /> */}
      <HomeOneTestimonials />
      <Vision/>
      <Animations />

    </div>
  );
}
