import Animations from "@/components/animations/Animations";
import AboutWhyChooseUs from "@/pages/about-us/AboutWhyChooseUs";
import HomeOneService from "@/pages/home-one/HomeOneService";
import  InnerBanner from '@/components/ui/InnerBanner'
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import { Metadata } from "next";
import OurServices from "@/components/ui/OurService";

export const metadata: Metadata = {
  title: "Services - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function Services() {
  return (
    <div>
      <InnerBanner pagename="Our Services" imgpath={'https://plus.unsplash.com/premium_photo-1661407783160-b6f950068f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmVycyUyMHNlcnZpY2VzfGVufDB8fDB8fHww'}  />
  
     <OurServices />
      <HomeOneTestimonials />
      <Animations />
    </div>
  );
}
