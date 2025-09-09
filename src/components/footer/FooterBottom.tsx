import { IconSend } from "@tabler/icons-react";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="  pt-4 flex items-center justify-center border-t border-white-3/50 max-md:flex-col-reverse max-md:gap-5">
      <div className="flex items-center justify-center ">
        <p className="m-text text-white-1 text-center ">
          Copyright @ {new Date().getFullYear()} <span className=" font-italic" >CSS Construction.</span> All rights reserved.
        </p>
  
      </div>
     
    </div>
  );
};

export default FooterBottom;
