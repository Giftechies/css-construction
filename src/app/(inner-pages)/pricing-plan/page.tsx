import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import HomeOnePricingPlan from "@/pages/home-one/HomeOnePricingPlan";
import HomeThreeTestimonial from "@/pages/home-three/HomeThreeTestimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function PricingPlan() {
  return (
    <div>
      <Breadcrumbs  />
      <HomeOnePricingPlan />
      <HomeThreeTestimonial />
      <Animations />

    </div>
  );
}
