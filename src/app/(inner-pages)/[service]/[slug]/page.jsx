import InnerBanner from "@/components/ui/InnerBanner";
import Content from "@/components/servicepage/Content";
import Animations from "@/components/animations/Animations";

// Fetch data helper
async function getPageData(service, slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/page?category=${service}&page=${slug}`,
    { cache: "no-store" } // optional: ensure fresh data
  );
  const data = await res.json();
  return data.data[0];
}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const response = await getPageData(params.service, params.slug);

  return {
    title: response?.metatitle || response?.title || "Default Title",
    description: response?.metadiscription || response?.shortcontent || "",
    openGraph: {
      title: response?.metatitle || response?.title || "Default Title",
      description: response?.metadiscription || response?.shortcontent || "",
      images: response?.pageimage
        ? [
            {
              url: response.pageimage,
              alt: response.imagealt || response?.title || "",
            },
          ]
        : [],
    },
  };
}

// Page component
export default async function SlugPage({ params }) {
  const response = await getPageData(params.service, params.slug);

  if (!response) return <p>Page not found</p>;

  return (
    <section>
      <InnerBanner pagename={response.title} imgpath={response.pageimage} />
      <Content data={response} />
      <Animations />
    </section>
  );
}
