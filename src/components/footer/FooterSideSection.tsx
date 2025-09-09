import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";
import RoundedLink from "../link/RoundedLink";
import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { IconAddressBook, IconMail, IconMapPin } from "@tabler/icons-react";
import Talk from "@/components/footer/Talk"
import Address from "@/components/footer/Address"
import Image from "next/image";
import Media from "@/components/footer/Media"


const FooterSideSection = () => {
  return (
    <div className="  flex flex-col  gap-4 bg-black-4 px-10 text-center max-xxl:justify-between max-xxl:py-6  lg:max-xxl:flex-row xxl:w-[508px] max-md:items-center  xxl:pb-8">
      <Image src={"/img/logo/nav-logo.svg"} width={250} height={250} className=" w-30 "  alt="logo" />
      
      <Talk/>
     <Address/>
     <Media/>
    </div>
  );
};

export default FooterSideSection;
