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
    <div className="  flex flex-col  gap-4 bg-black-4  text-center max-xxl:justify-between   lg:max-xxl:flex-row xxl:w-[508px]   xxl:pb-8">
      <Talk/>
     <Address/>
     <Media className={' capitalize'} />
    </div>
  );
};

export default FooterSideSection;
