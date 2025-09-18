import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PrivacyPolicyContent from "@/pages/privacy-policy/PrivacyPolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Plan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Breadcrumbs  />
      <PrivacyPolicyContent />
      <Animations />

    </div>
  );
}
