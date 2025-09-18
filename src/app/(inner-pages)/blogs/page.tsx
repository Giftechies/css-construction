import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import AllBlogs from "@/pages/blog/AllBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function blog() {
  return (
    <div>
      <Breadcrumbs  />
      <AllBlogs />
      <Animations />
    </div>
  );
}
