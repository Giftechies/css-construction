import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BusinessApplyLoan from "@/pages/business-loan/BusinessApplyLoan";
import BusinessHowItWork from "@/pages/business-loan/BusinessHowItWork";
import BusinessLoanEveryOne from "@/pages/business-loan/BusinessLoanEveryOne";
import BusinessLoanGetLoan from "@/pages/business-loan/BusinessLoanGetLoan";
import DocumentRequired from "@/pages/business-loan/DocumentRequired";
import EducationLoanFaq from "@/pages/education-loan/EducationLoanFaq";
import EducationLoanTestimonial from "@/pages/education-loan/EducationLoanTestimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Loan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function BusinessLoanPage() {
  return (
    <div>
      <Breadcrumbs  />
      <BusinessLoanGetLoan />
      <BusinessHowItWork />
      <DocumentRequired />
      <BusinessApplyLoan />
      <BusinessLoanEveryOne />
      <EducationLoanTestimonial />
      <EducationLoanFaq />
      <Animations />
    </div>
  );
}
