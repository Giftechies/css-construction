import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import OurTeamContent from "@/pages/our-team/OurTeamContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function OurTeam() {
  return (
    <div>
      <Breadcrumbs  />
      <OurTeamContent />
      <Animations />

    </div>
  );
}
