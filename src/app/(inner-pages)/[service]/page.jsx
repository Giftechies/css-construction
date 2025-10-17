import InnerBanner from "@/components/ui/InnerBanner";
import CardContainer from "../../../components/servicepage/Cardcontainer";
import Animations from "@/components/animations/Animations";

export default async function Skip({params}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/page?category=${params?.service}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = await res.json()
  const data = response.data
  const category = response.category[0]
  console.log(category);
  
  return (
    <>
      <InnerBanner
        imgpath={category?.featureImage || "/img/innerimg/Tipper-Grab.jpg"}
        pagename={category?.title}
      />
      <CardContainer  data={data}/>
      <Animations/>
    </>
  );
}
