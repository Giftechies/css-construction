import ServiceCard from "@/components/cards/ServiceCard";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import { title } from "process";

export default function HomeService(    ){
    const cards =[
        {iconpath:"img/svg/truck-svgrepo-com.svg",
         imagepath : "https://plus.unsplash.com/premium_photo-1661409078904-42334551db0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nJTIwdHJ1Y2t8ZW58MHx8MHx8fDA%3D",
         title:"test heading",
         content:"We Helped Hundreds of Businesses was Back on its Feet."  
        },
        {iconpath:"img/svg/truck-svgrepo-com.svg",
         imagepath : "https://plus.unsplash.com/premium_photo-1661409078904-42334551db0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nJTIwdHJ1Y2t8ZW58MHx8MHx8fDA%3D",
         title:"test heading",
         content:"We Helped Hundreds of Businesses was Back on its Feet."  
        },
        {iconpath:"img/svg/truck-svgrepo-com.svg",
         imagepath : "https://plus.unsplash.com/premium_photo-1661409078904-42334551db0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nJTIwdHJ1Y2t8ZW58MHx8MHx8fDA%3D",
         title:"test heading",
         content:"We Helped Hundreds of Businesses was Back on its Feet."  
        },
        {iconpath:"img/svg/truck-svgrepo-com.svg",
         imagepath : "https://plus.unsplash.com/premium_photo-1661409078904-42334551db0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nJTIwdHJ1Y2t8ZW58MHx8MHx8fDA%3D",
         title:"test heading",
         content:"We Helped Hundreds of Businesses was Back on its Feet."  
        },
    ]
    return(
        <section className="    fade-wrapper relative py-20 px-30 pb-30 bg-zinc-100 overflow-hidden  ">
            <main className="container  flex-center flex-col ">
                <div className="text-container  flex-center  ">
                   {/* <div className=" border w-[20%]  ">
                    <img src="https://plus.unsplash.com/premium_photo-1661409078904-42334551db0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nJTIwdHJ1Y2t8ZW58MHx8MHx8fDA%3D" alt="" /></div>                 */}

                   <div className="flex-center flex-col  text-center border"> <SectionSubTitle  className=" text-[var(--primary)] " text="what Our Service" />
                    <h3 className="h2 text-center w-[70%] font-semibold ">Specializes in stress-free home and office removals.</h3>  
                    <p className=" text-zinc-600  ">We’ve Helped Thousands of Families Start Fresh, Stress-Free.</p>  </div>
                </div>
                <div className="cards grid grid-cols-2 gap-30 my-15">
                   {cards.map((el,id)=>{
                    return(
                        <ServiceCard key={id} iconpath={el.iconpath} imagepath={el.imagepath} title={el.title} content={el.content} />
                    )
                   })}
                  
                    
                </div>
                    <p className="h6">Let’s Make Your Move Hassle-Free. <Link href='/pick-details' className=" underline text-[var(--primary)]" >Request a Free Quote!</Link></p>                  
            </main>

        </section>
    )
}