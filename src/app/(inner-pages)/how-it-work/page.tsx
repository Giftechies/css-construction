import Animations from "@/components/animations/Animations";
import HowItrWorksContent from "@/pages/how-it-works/HowItrWorksContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Work - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function HowItWorksPage() {
  return (
    <div>
      
      <HowItrWorksContent />
      <Animations />
    </div>
  );
}
