import Image from "next/image";
import SectionText from "../shared/SectionText";
import Link from "next/link";

export default function CardContainer({data=[],pagelink=''}){
    return(
        <section className=" container flex flex-wrap items-center justify-center gap-10 py-10 " >
                 {data.map((item,id)=>(<div
                key={id}
                className="card1 group w-[380px]    overflow-hidden rounded-[2em] border p-4 bg-white-1 sp "
              >
                <div className="img group h-60 w-full overflow-hidden rounded-3xl bg-red-50 ">
                  <Image
                    src={item.pageimage}
                    alt={item.imagealt}
                    width={200}
                    height={200}
                    className=" theme-transition-3  object-cover object-center h-full w-full group-hover:scale-[1.1] "
                  />
                </div>
                <div className="text w-full theme-transition-4 flex flex-col items-start justify-center gap-4 py-6  ">
                  <h3 className=" h4 font-[700] text-primary font-oswald ">{item.title}</h3>
                  <SectionText
                    className=" text-[15px] font-[500] text-justify "
                    text={
                     item.shortcontent 
                    } 
                  />


                  <div className=" border-t h-[8px]  w-full border-black-3/40 "  >
                  
                 <Link href={`/${pagelink}/${item.slug}`} className=" mt-2 flex text-[14px] gap-2 font-semibold " ><span>Read More</span> <i className="ri-arrow-right-line font-medium text-[18px] "></i>  </Link>
                 </div>
                </div>
              </div>))}
        </section>
    )
}