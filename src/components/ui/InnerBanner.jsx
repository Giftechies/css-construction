
import Breadcrumb from "../shared/Breadcrumbs";

import DeskTopNavbarTwo from "../navbar/DeskTopNavbarTwo";
import Mobilenav from "../navbar/Mobilenav";



export default function Banner({imgpath,pagename}){
    return(
          <section
          style={{backgroundImage:`url(${imgpath})`}}
          
          className="fade-wrapper  homebanner relative overflow-hidden   bg-cover bg-center  object-cover md:p-[70px] md:m-5   md:rounded-3xl before:absolute before:inset-0 before:bg-black-1/60  xxl:mx-10">
            <DeskTopNavbarTwo className= "  z-80 absolute -top-3 z-80 left-0   text-white-1 s-text font-oswald  font-medium tracking-wider  " />
        <Mobilenav/>
      <div className="container overflow-hidden relative py-20 md:p-20 text-white-1 sm:pt-25  ">
         
        <div className=" place-items-center  ">
          <div className="max-md:spt60px  flex-center  flex-col text-center   ">
            <h1 className="h1 mb-3  mt-3 font-medium !font-manrope   z-40  ">
            {pagename}
            </h1>
            
          
           
              <Breadcrumb/>
           
            
          </div>
        </div>
      
   
      </div>
    </section>
    )
}