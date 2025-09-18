import Link from "next/link";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionText from "../shared/SectionText";
import SectionTitle from "../shared/SectionTitle";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

export default function DetailAbout(){
    return(
    <section className="py-4 overflow-hidden">
        <div className="container overflow-hidden ">
            <div className=" grid grid-cols-12 xl:my-20 gap-8 " >
                <div className="content col-start-1   col-end-13 lg:col-end-7 ">
                    <SectionTitle   text="How much does it cost to hire removalists in Sydney?"/>
                    <SectionText text=" Sydney removalists start at $130.00 with an average price of $148.25 per hour. So, to move a 3 bedroom house in Sydney the cost works out to be around $1,052.58 on average. You can reduce this cost and save money by comparing Sydney moving company prices on Muval to find the best deal for you!" />

                   
                     <Link href={"/pick-details" } className=" flex gap-6 w-fit xl-text text-white-1  mt-4 bg-prim rounded-md  px-6 py-4 group ">
                   <span> Book Best and quality removalist now</span>
                    <IconArrowUpRight  className="theme-transition-3 group-hover:rotate-45" />
                    </Link>
                </div>
                <div className="img border col-start-1 lg:col-start-8 col-end-13  ">
                    <Image width={250} height={250} src="https://media.istockphoto.com/id/1423897379/photo/young-couple-sitting-on-floor-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=olSMIN-NEF7PpX7FG49z_lSaxnGzvN7L2BVWeptlRNo="  className=" size-full" alt="" />

                </div>

            </div>

        </div>
    </section>
    )
}