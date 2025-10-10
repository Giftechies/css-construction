import InnerBanner from "@/components/ui/InnerBanner";
import CardContainer from "@/components/servicepage/CardContainer";

export default async function Skip() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/page`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = await res.json()
  const data = response.data.filter(item =>item.category.title.trim().toLowerCase() === "Concrete Supply")

  return (
    <>
      <InnerBanner
        imgpath="/img/innerimg/skip-hire-pic.jpg"
        pagename="Concrete Supply"
      />
      <CardContainer  data={data} pagelink="concrete-supply" />
    </>
  );
}
