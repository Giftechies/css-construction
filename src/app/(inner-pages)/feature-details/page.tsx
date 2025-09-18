import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SendFunds from "@/pages/feature-details/SendFunds";
import UniFiedPlatform from "@/pages/feature-details/UniFiedPlatform";
import WealthManagement from "@/pages/feature-details/WealthManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feature Details - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function FeatureDetailsPage() {
  return (
    <div>
       <Breadcrumbs  />
      <SendFunds />
      <WealthManagement />
      <UniFiedPlatform />
      <Animations />
    </div>
  );
}
