import applePlay from "@/../public/images/home-two/apple-play.png";
import fingerSectionImage from "@/../public/images/home-two/finger-section-image.png";
import googlePlay from "@/../public/images/home-two/google-play.png";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const HomeTwoFingertips = () => {
  return (
    <section className="spy120px fade-wrapper relative">
      <div className="container">
        <div className="grid grid-cols-12 items-center justify-between max-lg:gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-6">
            <SectionSubTitle text="Banking at Your Fingertips" />
            <SectionTitle
              text="Follow Four Quick Steps to Buy Our Card With Confidence"
              className="h2 mt-3 max-w-[454px]"
            />
            <SectionText
              text="The rise of cryptocurrencies has opened up new trading In this beginner's guide to cryptocurrency trading we demystify the world of digital currencies"
              className="fade-top mt-5"
            />
            <div className="spt32px grid gap-5 xs:grid-cols-2">
              <div className="fade-top flex items-center gap-2">
                <IconCircleCheck className="text-black-2" />
                <p className="l-text font-medium text-black-2">
                  Charts trading
                </p>
              </div>
              <div className="fade-top flex items-center gap-2">
                <IconCircleCheck className="text-black-2" />
                <p className="l-text font-medium text-black-2">
                  Supreme Authority
                </p>
              </div>
              <div className="fade-top flex items-center gap-2">
                <IconCircleCheck className="text-black-2" />
                <p className="l-text font-medium text-black-2">Worldly Power</p>
              </div>
              <div className="fade-top flex items-center gap-2">
                <IconCircleCheck className="text-black-2" />
                <p className="l-text font-medium text-black-2">
                  Global Dominance
                </p>
              </div>
            </div>
            <div className="smt40px flex items-center gap-6 max-xs:flex-wrap max-xs:gap-4">
              <Link href={`/`}>
                <Image
                  src={googlePlay}
                  width={181}
                  height={57}
                  alt="google play"
                />
              </Link>
              <Link href={`/`}>
                <Image
                  src={applePlay}
                  width={181}
                  height={57}
                  alt="google play"
                />
              </Link>
            </div>
          </div>
          <div className="col-start-1 col-end-13 row-start-1 overflow-hidden lg:col-start-7">
            <Image
              src={fingerSectionImage}
              width={687}
              height={535}
              alt="finger section image"
              className="reveal-img parallax-img mx-auto max-lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoFingertips;
