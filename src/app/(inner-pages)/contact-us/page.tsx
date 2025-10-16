import Animations from "@/components/animations/Animations";
import InnerBanner from "@/components/ui/InnerBanner"
import ContactUsForm from "@/pages/contact/ContactUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ",
  description: "",
};

export default function ContactUsPage() {
  return (
    <div>
      <InnerBanner pagename={"Contact us"} imgpath={"/img/innerimg/contuct.webp"}  />
      <ContactUsForm />
      <Animations />
    </div>
  );
}
