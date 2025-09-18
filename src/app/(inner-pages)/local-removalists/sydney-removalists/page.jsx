import Animations from "@/components/animations/Animations";
import Banner from "@/components/ui/InnerBanner";
import DetailAbout from "@/components/detailspage/DetailAbout"
// import Map from "../../../../pages/local/map"
import OurWorks from "@/pages/home-three/OurWorks";
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import dynamic from "next/dynamic";

const Map = dynamic(()=>import("@/components/localcomponents/map"),{ssr:false,})
export default  function SydneyRemovalists(  ){
    return(
      <>
      <Banner imgpath="https://media.istockphoto.com/id/1596022033/photo/unloading-boxes-and-furniture-from-a-pickup-truck-to-a-new-house-with-service-cargo-two-men.webp?a=1&b=1&s=612x612&w=0&k=20&c=4oDat2FWwQNbcy5rhZ0EEWaWvwbXfYOn-Gncd1PQ-K0=" 
      pagename={'Sydney Removalists'}
      
      text={'Move anywhere in Sydney with our reliable removalists, ensuring safety, efficiency, and complete customer satisfaction.'}
      />
      <DetailAbout/>
      <Map/>
      <OurWorks/>
      <HomeOneTestimonials/>
      <Animations/>
      </>
    )
}