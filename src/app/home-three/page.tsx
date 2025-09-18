import Animations from "@/components/animations/Animations";
import Footer from "@/components/footer/Footer";
import NavbarContainerTwo from "@/components/navbar/NavbarContainerTwo";
import HomeOneInfo from "@/pages/home-one/HomeOneInfo";
import HomeOneOurTeam from "@/pages/home-one/HomeOneOurTeam";
import HomeOnePricingPlan from "@/pages/home-one/HomeOnePricingPlan";
import HomeOneRecentBlog from "@/pages/home-one/HomeOneRecentBlog";
import HomeThreeAbout from "@/pages/home-three/HomeThreeAbout";
import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import HomeThreeFinancialPlan from "@/pages/home-three/HomeThreeFinancialPlan";
import HomeThreeService from "@/pages/home-three/HomeThreeService";
import HomeThreeTestimonial from "@/pages/home-three/HomeThreeTestimonial";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Three - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function LandingTwo() {
  return (
    <div >
      <NavbarContainerTwo />
      <HomeThreeBanner />
      <HomeThreeAbout />
      <HomeThreeService />
      <HomeOnePricingPlan />
      <HomeThreeFinancialPlan />
      <HomeTwoFaq />
      <HomeOneOurTeam />
      <HomeThreeTestimonial />
      <HomeOneInfo />
      <HomeOneRecentBlog />
      <Footer />
      <Animations />
    </div>
  );
}
