import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import NeedLoan from "@/pages/careers/NeedLoan";
import OurCareers from "@/pages/careers/OurCareers";
import WhyJoinOurTeam from "@/pages/careers/WhyJoinOurTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function Careers() {
  return (
    <div>
      <Breadcrumbs />
      <NeedLoan />
      <OurCareers />
      <WhyJoinOurTeam />
      <Animations />
    </div>
  );
}
