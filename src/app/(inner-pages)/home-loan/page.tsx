import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import EducationLoanFaq from "@/pages/education-loan/EducationLoanFaq";
import EducationLoanHowItWorks from "@/pages/education-loan/EducationLoanHowItWorks";
import EducationLoanTestimonial from "@/pages/education-loan/EducationLoanTestimonial";
import GetHomeLoan from "@/pages/home-loan/GetHomeLoan";
import HomeApplyLoan from "@/pages/home-loan/HomeApplyLoan";
import HomeDocumentRequired from "@/pages/home-loan/HomeDocumentRequired";
import HomeLoanEveryOne from "@/pages/home-loan/HomeLoanEveryOne";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home Loan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function HomeLoanPage() {
  return (
    <div>
      <Breadcrumbs />
      <GetHomeLoan />
      <EducationLoanHowItWorks className="bg-white-4" />
      <HomeLoanEveryOne />
      <HomeApplyLoan />
      <HomeDocumentRequired />
      <EducationLoanTestimonial />
      <EducationLoanFaq />
      <Animations />
    </div>
  );
}
