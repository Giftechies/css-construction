
import InnerBanner from "@/components/ui/InnerBanner";
import CardContainer from "../../../components/servicepage/Cardcontainer";
import Animations from "@/components/animations/Animations";

export default async function Skip({params}) {
  const res = await fetch(`/api/page?category=${params?.service}`, {
    method: "GET",
   
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = await res.json()
  if(response){

    var data = response.data
    var category = response.category
  }
  
 
  
  return (
    <>
      <InnerBanner
        imgpath={category?.featureImage || ""}
        pagename={category?.title}
      />
      <CardContainer  data={data}/>
      <Animations/>
    </>
  );
}
