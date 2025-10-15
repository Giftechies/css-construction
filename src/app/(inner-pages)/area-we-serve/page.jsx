

import InnerBanner from "@/components/ui/InnerBanner"
import AreasWeServe from "@/components/area/area"

export default function area(){
    return(
       <div>
         <InnerBanner pagename={"Area We Serve"} imgpath={"/img/innerimg/area.avif"}  />
         < AreasWeServe/>
       </div>
    )
}