import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import EducationApplyForLoan from "@/pages/education-loan/EducationApplyForLoan";
import EducationLoanFaq from "@/pages/education-loan/EducationLoanFaq";
import EducationLoanHowItWorks from "@/pages/education-loan/EducationLoanHowItWorks";
import EducationLoanTestimonial from "@/pages/education-loan/EducationLoanTestimonial";
import GetPersonalLoan from "@/pages/personal-loan/GetPersonalLoan";
import PersonalLoanEveryOne from "@/pages/personal-loan/PersonalLoanEveryOne";
import PersonalLoanResearch from "@/pages/personal-loan/PersonalLoanResearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function PersonalLoanPage() {
  return (
    <div>
      <Breadcrumbs/>
      <GetPersonalLoan />
      <PersonalLoanResearch />
      <PersonalLoanEveryOne />
      <EducationLoanHowItWorks className="bg-white-4" />
      <EducationApplyForLoan className="bg-white-1" />
      <EducationLoanTestimonial />
      <EducationLoanFaq />
      <Animations />
    </div>
  );
}
