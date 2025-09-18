import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ServiceDetailsContent from "@/pages/service-details/ServiceDetailsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Details - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function ServiceDetails() {
  return (
    <div>
       <Breadcrumbs  />
      <ServiceDetailsContent />
      <Animations />
    </div>
  );
}
