import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import TermsConditionsContent from "@/pages/terms-conditions/TermsConditionsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams Conditions - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function TermsConditionsPage() {
  return (
    <div>
      <Breadcrumbs />
      <TermsConditionsContent />
      <Animations />
    </div>
  );
}
