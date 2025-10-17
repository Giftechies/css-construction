export const metadata = {
  title: "CSS Construction | Skip Hire Services",
  description: "Affordable skip hire and waste management services in London.",
};


import dynamic from "next/dynamic";

const HomeThreeBanner = dynamic(() => import("@/pages/home-three/HomeThreeBanner"), { ssr: false });
const AboutLocal = dynamic(() => import("@/pages/local/AboutPage"), { ssr: false });
const ServicePage = dynamic(() => import("@/pages/services/Servicespage"), { ssr: false });
const Projects = dynamic(() => import("@/pages/projects/Projects"), { ssr: false });
const Vision = dynamic(() => import("@/pages/home/Vision"), { ssr: false });
const EducationLoanFaq = dynamic(() => import("@/pages/education-loan/EducationLoanFaq"), { ssr: false });
const HomeOneTestimonials = dynamic(() => import("@/pages/home-one/HomeOneTestimonials"), { ssr: false });
const Animations = dynamic(() => import("@/components/animations/Animations"), { ssr: false });



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
      <Vision />
      <Projects />
      <EducationLoanFaq />
      <HomeOneTestimonials />
      <Animations />
    </div>
  );
}
