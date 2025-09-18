import Animations from "@/components/animations/Animations";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BlogDetailsContent from "@/pages/blog-details/BlogDetailsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function BlogDetails() {
  return (
    <div>
      <Breadcrumbs  />
      <BlogDetailsContent />
      <Animations />
    </div>
  );
}
