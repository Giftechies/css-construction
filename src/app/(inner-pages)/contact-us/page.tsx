import Animations from "@/components/animations/Animations";
import InnerBanner from "@/components/ui/InnerBanner"
import ContactUsForm from "@/pages/contact/ContactUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function ContactUsPage() {
  return (
    <div>
      <InnerBanner pagename={"Contact us"} imgpath={""}  />
      <ContactUsForm />
      <Animations />
    </div>
  );
}
