import InnerBanner from "@/components/ui/InnerBanner";
import AreasWeServe from "@/components/area/area";


export const metadata = {
  title: "Areas We Serve ",
  description: "Explore the regions we proudly serve across the UK with CS Serv's professional skip hire and waste management solutions.",
};

export default function AreaPage() {
  return (
    <div>
      <InnerBanner
        pagename="Areas We Serve"
        imgpath="/img/innerimg/area.avif"
      />
      <AreasWeServe />
    </div>
  );
}
