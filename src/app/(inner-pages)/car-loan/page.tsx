import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BusinessHowItWork from "@/pages/business-loan/BusinessHowItWork";
import CarApplyLoan from "@/pages/car-loan/CarApplyLoan";
import CarDocumentRequired from "@/pages/car-loan/CarDocumentRequired";
import CarLoanEveryOne from "@/pages/car-loan/CarLoanEveryOne";
import GetCarLoan from "@/pages/car-loan/GetCarLoan";
import EducationLoanFaq from "@/pages/education-loan/EducationLoanFaq";
import EducationLoanTestimonial from "@/pages/education-loan/EducationLoanTestimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Loan - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function CarLoanPage() {
  return (
    <div>
      <Breadcrumbs />
      <GetCarLoan />
      <CarDocumentRequired />
      <BusinessHowItWork className="bg-white-1" />
      <CarLoanEveryOne />
      <CarApplyLoan />
      <EducationLoanTestimonial />
      <EducationLoanFaq />
      <Animations />
    </div>
  );
}
