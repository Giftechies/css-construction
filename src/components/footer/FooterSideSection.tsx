import HomeThreeBannerLink from "@/pages/home-three/HomeThreeBannerLink";
import RoundedLink from "../link/RoundedLink";
import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { IconAddressBook, IconMail, IconMapPin } from "@tabler/icons-react";
import Talk from "@/components/footer/Talk"
import Address from "@/components/footer/Address"

const FooterSideSection = () => {
  return (
    <div className="xxl:spt120px  flex flex-col  gap-4 bg-black-4 px-10 text-center max-xxl:justify-between max-xxl:py-6  lg:max-xxl:flex-row xxl:w-[508px] max-md:items-center  xxl:pb-8">
      <HomeThreeBannerLink href="#" className=" w-fit  px-12 "  >BOOK APPOINTMENT</HomeThreeBannerLink>
      <Talk/>
     <Address/>
    </div>
  );
};

export default FooterSideSection;
