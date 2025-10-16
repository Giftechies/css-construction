import { IconSend } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="  pt-6 mt-4 flex items-center justify-center border-t border-white-3/50 max-md:flex-col-reverse max-md:gap-5">
      <div className=" max-xl:flex-col gap-4   w-full flex items-center justify-between ">
      <Link href={'/'} >   <Image src={"/img/logo/nav-logo.svg"} width={250} height={250} className=" w-30 "  alt="logo" /></Link>
        <p className="m-text text-white-1 text-center ">
          Copyright © {new Date().getFullYear()} <span className=" font-italic" >CSS Construction.</span> All rights reserved.
        </p>
  
      </div>
     
    </div>
  );
};

export default FooterBottom;
