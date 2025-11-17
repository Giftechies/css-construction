
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
// import { headers } from "next/headers";
import Image from "next/image";
import {fetchServices} from '@/api/serviceapi'
const Servicespage = async () => {

  const res = await fetchServices()
  const cards = res.data
  console.log(cards,'fetchServices');
  


// const host = headers().get("host")
//   const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
//   const res1 = await fetch(`${protocol}://${host}/api/service-category`,{
//     method:'GET'
//   })
//   const res= await res1.json()
const card = [
    // { title: "Skip Hire", content: "We supply a full range of skip sizes for hire in London, from 4-yard mini skips - ideal for small household clearances, through to 8-yard, 10-yard, 12-yard, and 16-yard skips..", link: "/skip-hire",img:"/img/innerimg/skip-hire-pic.jpg" },
    // { title: "Concrete Supply", content: "We are trusted concrete suppliers in London, offering ready mix concrete delivery for small domestic jobs to large construction projects.", link: "/concrete-supply",img:"/img/innerimg/concrete.jpg" },
    // { title: "Tipper & Grab Services", content: "Our grab hire service is an affordable alternative to skips for heavy waste. Our grab lorries can collect muck, soil, rubble, concrete, hardcore, and green..", link: "/tipper-and-grab-services",img:"/img/innerimg/Tipper-Grab.jpg" },
  
  ];

  if (!cards || cards.length === 0) {
    // Handle the case where the API returns no data
    return (
      <div className="bg-primary/15 py-10 xl:py-25 text-center">
        <p className="text-xl text-red-600">No services available at the moment. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className=" bg-primary/15 py-10 xl:py-25 ">
      <div className="container  gap-4 ">
        <div className="text mb-8 flex flex-col items-center justify-center gap-4 px-10">
          {/* <p className=" text-[17px] font-[700] tracking-wider leading-[20px] text-primary  ">
            Our Services
          </p> */}
          <SectionSubTitle className=" font-[700] tracking-wider leading-[20px] text-primary  " text="Our Services"/>
          <SectionTitle  className="h1 text-center  text-black-2  " text=" Skip Hire Services You Can Rely On" />
         
        </div>
        
        <div className="card flex flex-wrap items-center justify-center gap-10 ">
          {cards?.map((item, id) => {
            return (
              <div
                key={id}
                className="card1 group w-[380px]    overflow-hidden rounded-[2em] border p-4 bg-white-1 sp "
              >
             <Link href={`item?.slug`} >
                <div className="img group h-60 w-full overflow-hidden rounded-3xl bg-red-50 ">
                  <Image
                  width={250}
                  height={250}
                    src={item?.featureImage}
                    alt={item?.title || "service image" }
                    className=" theme-transition-3  object-cover object-center h-full w-full group-hover:scale-[1.1] "
                  />
                </div>
             </Link>
                <div className="text theme-transition-4 flex flex-col items-start justify-center gap-4   p-6  ">
                 <Link href={item?.slug} >
                  <h3 className=" h4 font-[700] text-primary font-oswald ">{item?.title}</h3>
                 </Link>
                  <SectionText
                    className=" text-[15px] font-[500] text-justify "
                    text={
                      item?.discription
                    }
                  />


                  <div className=" border-t h-[8px]  w-full border-black-3/40 "  >
                  
                 <Link href={item?.slug} className=" mt-2 flex text-[14px] gap-2 font-semibold " ><span>Read More</span> <i className="ri-arrow-right-line font-medium text-[18px] "></i>  </Link>
                 </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Servicespage;
