import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FewInterestingNumbers from "@/pages/about-us/FewInterestingNumbers";
import StartNewJourney from "@/pages/feature/StartNewJourney";
import HomeThreeTestimonial from "@/pages/home-three/HomeThreeTestimonial";
import HomeTwoPersonalized from "@/pages/landing-two/HomeTwoPersonalized";
import HomeTwoServices from "@/pages/landing-two/HomeTwoServices";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Feature - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function FeaturePage() {
  return (
    <div>
      <Breadcrumbs/>
      <StartNewJourney />
      <HomeTwoServices />
      <FewInterestingNumbers />
      <HomeTwoPersonalized />
      <HomeThreeTestimonial />
      <Animations />
    </div>
  );
}
