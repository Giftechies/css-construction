import { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link";
  


type blog={
    imagepath:string | StaticImageData;
    link:string
}
export default function BlogCard({imagepath,link}:blog){
    return(
    <Link href={link} >
        <div   className="  w-[375px] h-[400px] relative group rounded-xl overflow-hidden shadow-md " >
            <div className=" w-full h-full absolute z-0 overflow-hidden ">
                <Image alt="blog image" src={imagepath} width={250} height={300} className="group-hover:scale-[1.05] w-full h-full  transition-all transform duration-500 ease-in-out  "  />
            </div>
           <div className=" absolute inset-0 z-10 bg-gradient-to-t to-black-4/0 via-black-4/35  from-black-4/80 " />
          <div className="z-20 content  absolute bottom-0  left-0 w-full h-[40%]  text-white-2 font-extralight   grid grid-cols-12 grid-rows-12 px-4  ">
              <div className=" row-start-5 col-start-1 col-end-7 items-center justify-center  ">Aug,30 2025</div>
            <div className=" row-start-5  col-start-10   col-end-13   "> Tom sam</div>
            <div className=" row-start-8  col-span-12   text-cente  h5 font-normal text-white-1">Lorem ipsum dolor sit amet consectetur  natus laudantium nulla?</div>
          </div>
        </div>
    </Link>
    )
}