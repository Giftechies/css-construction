import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactUsForm from "@/pages/contact/ContactUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function ContactUsPage() {
  return (
    <div>
      <Breadcrumbs />
      <ContactUsForm />
      <Animations />
    </div>
  );
}
