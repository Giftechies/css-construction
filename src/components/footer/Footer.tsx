import footerCoin from "@/../public/img/logo/interstate logo v4-01.png";
import animal from "@/../public/images/home-one/footer-crown.png";
import Image from "next/image";
import FooterBottom from "./FooterBottom";
import FooterLeftColumn from "./FooterLeftColumn";
import FooterMiddleColumn from "./FooterMiddleColumn";
import FooterRight from "./FooterRight";
import FooterSideSection from "./FooterSideSection";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black-4 text-white-1">
      <div className="max-xl:container xxl:ml-[calc((100%-1296px)/2)]">
        <div className="flex    justify-between max-xxl:flex-col-reverse ">
          <div>
            <div className="spy120px flex flex-shrink-0 gap-40   max-md:flex-col max-md:gap-8">
              <FooterLeftColumn />
              <FooterMiddleColumn  />
              <FooterRight />
            </div>
              <FooterBottom/>
          </div>
          {/* side section start */}
          <FooterSideSection />
          {/* side section end */}
        </div>
      </div>
     
      <Image
        src={animal}
        width={222}
        height={214}
        alt="footer animale"
        className="absolute bottom-0 left-0 block max-3xl:size-30 max-[1500px]:hidden   "
      />
    </footer>
  );
};

export default Footer;
