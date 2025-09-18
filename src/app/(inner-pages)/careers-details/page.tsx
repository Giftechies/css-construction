import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import TechnicalAnalyst from "@/pages/careers-details/TechnicalAnalyst";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers Details - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function CareersDetails() {
  return (
    <div>
      <Breadcrumbs  />
      <TechnicalAnalyst />
      <Animations />
    </div>
  );
}
