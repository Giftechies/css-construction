
import Image from "next/image";
import Link from "next/link";


export default function Card({title,content,imagepath,path}){
    return(
       <>
       <Link 
       href={path}>
       
        <div className="  mx-auto   w-full overflow-hidden rounded-xl border-2 group ">
            <div className=" overflow-hidden w-full h-[300px] relative " >
             <Image
              src={`${imagepath}`}
              width={300}
              height={280}
              alt="Mission image two"
              className=" w-full z-0 h-full object-cover group-hover:scale-[1.1] theme-transition-6 object-center "
            />
            <p className=" absolute fade-top bottom-20 left-1/2 transform -translate-x-1/2 bg-prim text-white-1 px-[10px] rounded-sm h4 ">{title}</p>
            <div className=" z-10 w-full absolute transform translate-y-full group-hover:translate-y-0  left-0  duration-1000 ease-in-out bottom-0  bg-gradient-to-t from-0% from-black-4/70 via-50% via-black-4/30 text-white-1 to-black-4/1 flex-center p-2 ">
                <p className=" text-center  ">  {content} </p>
            </div>
            </div>
            
        </div></Link>
       </>
    )
}