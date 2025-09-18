import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import LoanContent from "@/pages/loan/LoanContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function LoanPage() {
  return (
    <div>
      <Breadcrumbs />
      <LoanContent />
      <Animations />

    </div>
  );
}
