import image from "@/../public/images/unified-platform.png";
import RoundedLink from "@/components/link/RoundedLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { IconBusinessplan, IconWallet } from "@tabler/icons-react";
import Image from "next/image";

const UniFiedPlatform = () => {
  return (
    <section className="spy120px relative">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 overflow-hidden lg:col-end-7">
            <Image
              src={image}
              width={636}
              height={636}
              alt="UniFied Platform"
              className="reveal-img parallax-img"
            />
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-8">
            <SectionSubTitle text="Unified platform" />
            <SectionTitle
              text="A Fully Integrated Suite Of Every Product Payments"
              className="h2 mt-3"
            />
            <div className="spt32px grid gap-5 xs:grid-cols-2 sm:gap-14">
              <div className="fade-top">
                <IconWallet className="size-10" />
                <h5 className="h5 mt-4 font-medium">Split The Necessities</h5>
                <SectionText
                  text="Reduced Payments maintenance and processing"
                  className="mt-3 "
                />
              </div>
              <div className="fade-top">
                <IconBusinessplan className="size-10" />
                <h5 className="h5 mt-4 font-medium">Pay For Business</h5>
                <SectionText
                  text="Reduced Payments maintenance and processing"
                  className="mt-3 "
                />
              </div>
            </div>
            <RoundedLink
              buttonText="Apply Now"
              link="/contact-us"
              className="smt40px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniFiedPlatform;
