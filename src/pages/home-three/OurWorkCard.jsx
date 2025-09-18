import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function OurWorkCard({iconname:path,step,text,heading,className}){
    return(
        <div className={cn("work   w-[20rem] spx24px spy24px  place-items-center group  ",className)}>
            <div className="icon-box    rounded-full w-[50%] aspect-square  bg-prim flex items-center justify-center  relative ">
             <Image width={250} height={250} src={path} alt="" className="object-contain object-center  w-[60%] " /> 
            
            <h6 className="h4  bg-white-1 text-[var(--primary)] w-[30%] aspect-square  flex items-center  justify-center rounded-full  absolute -bottom-8 " >{step}</h6>
            </div>
            <div className=" content mt-8 text-center ">
            
                <SectionSubTitle
                text={heading}
                className="h5 font-medium text-black-2"
                
                />
                <SectionText className="h5"
                text={text}
                />
            </div>

           

        </div>

    )
}