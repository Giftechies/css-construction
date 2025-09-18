import imageThree from "@/../public/images/about-us/iamge-three.png";
import imageTwo from "@/../public/images/about-us/image-two.png";
import imageBig from "@/../public/images/about-us/mission-big.png";
import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="spy120px fade-wrapper bg-white-4">
      <div className="container">
        <div className="grid items-center gap-6 xl:grid-cols-2">
          <div className="grid items-center gap-5 max-xl:justify-center sm:grid-cols-2">
            <div className="group theme-transition-3 relative col-start-1 col-end-2 overflow-hidden text-black-4">
              <Image
                src={imageBig}
                width={306}
                height={500}
                alt="Mission image"
                className="block max-xl:mx-auto"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center bg-[linear-gradient(0deg,rgba(18,18,18,0.80)_0%,rgba(18,18,18,0.20)_100%)] opacity-0 group-hover:visible  group-hover:h-full group-hover:opacity-100">
                <p className="h3 font-medium text-white-1">MIssion</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="group theme-transition-3 relative text-black-4 ">
                <Image
                  src={imageTwo}
                  width={306}
                  height={238}
                  alt="Mission image"
                />
                <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center bg-[linear-gradient(0deg,rgba(18,18,18,0.80)_0%,rgba(18,18,18,0.20)_100%)] opacity-0 group-hover:visible  group-hover:h-full group-hover:opacity-100">
                  <p className="h3 font-medium text-white-1">Vission</p>
                </div>
              </div>
              <div className="group theme-transition-3 relative text-black-4 ">
                <Image
                  src={imageThree}
                  width={306}
                  height={238}
                  alt="Mission image"
                />
                <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center bg-[linear-gradient(0deg,rgba(18,18,18,0.80)_0%,rgba(18,18,18,0.20)_100%)] opacity-0 group-hover:visible  group-hover:h-full group-hover:opacity-100">
                  <p className="h3 font-medium text-white-1">Core Value</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-xl:spt60px max-xl:spb60px flex h-full bg-secondary  px-10">
            <div className="my-auto">
              <SectionTitle
                text="A Great Mission Statement"
                className="h3 font-medium text-white-1"
              />
              <SectionText
                text="There are different types of banks, including commercial banks, investment banks, central banks, and credit unions. Commercial banks are the most common, serving individual and business customers."
                className="fade-top mt-3 text-white-1"
              />
              <div className="info-card spt40px flex gap-7 max-sm:flex-col-reverse">
                <RoundedLink
                  buttonText="Contact Us"
                  link="/contact"
                  className="shrink-0 border-accent-3 bg-accent-3 hover:border-accent-3 hover:bg-transparent"
                />
                <div>
                  <h5 className="h4 font-medium text-white-1">
                    Passion over Pedigree
                  </h5>
                  <SectionText
                    text="Highlights the impact of technology on the banking industry, enabling convenient digital access to financial services."
                    className="fade-top mt-3 text-white-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
