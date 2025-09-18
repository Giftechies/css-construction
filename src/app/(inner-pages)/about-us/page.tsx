import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import AboutMission from "@/pages/about-us/AboutMission";
import AboutUs from "@/pages/about-us/AboutUs";
import AboutWhyChooseUs from "@/pages/about-us/AboutWhyChooseUs";
import FewInterestingNumbers from "@/pages/about-us/FewInterestingNumbers";
import HomeOneOurTeam from "@/pages/home-one/HomeOneOurTeam";
import HomeOnePricingPlan from "@/pages/home-one/HomeOnePricingPlan";
import HomeThreeTestimonial from "@/pages/home-three/HomeThreeTestimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs  />
      <AboutUs />
      <AboutWhyChooseUs />
      <FewInterestingNumbers />
      <AboutMission />
      <HomeOnePricingPlan className="bg-white-1" />
      <HomeOneOurTeam />
      <HomeThreeTestimonial />
      <Animations />
    </div>
  );
}
