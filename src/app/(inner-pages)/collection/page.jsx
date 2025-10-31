"use client"
import Innerbanner from "../../../components/ui/InnerBanner"
import Collectionform from "@/components/ui/Collectionform"
import CollectionAddress from "@/components/ui/collectionAddress"

export default function collection(){
    return(
        <>
        
        <Innerbanner  pagename={'Collection'}  imgpath={'https://media.istockphoto.com/id/1036018388/photo/garbage-bins.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uv4H16K7uCYexrP53iDmEvkiPUdFHL51bKN_efdyAiU='} />
        
             <div className="container py-8  sm:py-24  " >
                 <div className=" flex flex-col md:flex-row w-full " >
                    <Collectionform className={"md:w-[60%]"}  />
                 <CollectionAddress className={'md:w-[40] max-md:mt-8 '}  />
                 </div>

             </div>
        </>
    )
}