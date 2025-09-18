import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FaqContent from "@/pages/faq/FaqContent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Faq - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function FaqPage() {
  return (
    <div>
      <Breadcrumbs  />
      <FaqContent />
      <Animations />
    </div>
  );
}
