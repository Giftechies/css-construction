import InnerBanner from "@/components/ui/InnerBanner";
import CardContainer from "@/components/servicepage/Cardcontainer";
import Animations from "@/components/animations/Animations";
import { headers } from "next/headers";

export default async function Skip({ params }) {
  if (!params?.service) throw new Error("Missing service parameter");

  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const url = `${protocol}://${host}/api/page?category=${params.service}`;

  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR (60 sec)
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  const response = await res.json();

  if (!response?.data || !response?.category)
    throw new Error("Invalid API response");

  const { data, category } = response;

  return (
    <>
      <InnerBanner
        imgpath={category.featureImage || ""}
        pagename={category.title}
      />
      <CardContainer data={data} />
      <Animations />
    </>
  );
}
