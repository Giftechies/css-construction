import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import EducationApplyForLoan from "@/pages/education-loan/EducationApplyForLoan";
import EducationLoanEveryOne from "@/pages/education-loan/EducationLoanEveryOne";
import EducationLoanFaq from "@/pages/education-loan/EducationLoanFaq";
import EducationLoanHowItWorks from "@/pages/education-loan/EducationLoanHowItWorks";
import EducationLoanResearch from "@/pages/education-loan/EducationLoanResearch";
import EducationLoanTestimonial from "@/pages/education-loan/EducationLoanTestimonial";
import GetLoan from "@/pages/education-loan/GetLoan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Loan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function EducationLoanPage() {
  return (
    <div>
      <Breadcrumbs />
      <GetLoan />
      <EducationLoanResearch />
      <EducationLoanHowItWorks />
      <EducationApplyForLoan />
      <EducationLoanEveryOne />
      <EducationLoanTestimonial />
      <EducationLoanFaq />
      <Animations />
    </div>
  );
}
