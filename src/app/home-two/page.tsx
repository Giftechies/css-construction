import Animations from "@/components/animations/Animations";
import Footer from "@/components/footer/Footer";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import HomeOneFinancialPlanning from "@/pages/home-one/HomeOneFinancialPlanning";
import HomeOnePricingPlan from "@/pages/home-one/HomeOnePricingPlan";
import HomeOneRecentBlog from "@/pages/home-one/HomeOneRecentBlog";
import HomeTwoAboutUs from "@/pages/landing-two/HomeTwoAboutUs";
import HomeTwoBanner from "@/pages/landing-two/HomeTwoBanner";
import HomeTwoFaq from "@/pages/local/HomeTwoFaq";
import HomeTwoFingertips from "@/pages/landing-two/HomeTwoFingertips";
import HomeTwoPersonalized from "@/pages/landing-two/HomeTwoPersonalized";
import HomeTwoServices from "@/pages/landing-two/HomeTwoServices";
import HomeTwoTestimonial from "@/pages/landing-two/HomeTwoTestimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Two - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function LandingTwo() {
  return (
    <div>
      <NavbarContainer />
      <HomeTwoBanner />
      <HomeTwoAboutUs />
      <HomeTwoServices />
      <HomeTwoFingertips />
      <HomeOnePricingPlan />
      <HomeOneFinancialPlanning />
      <HomeTwoPersonalized />
      <HomeTwoFaq />
      <HomeTwoTestimonial />
      <HomeOneRecentBlog />
      <Footer />
      <Animations />
    </div>
  );
}
