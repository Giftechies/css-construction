import imageThree from "@/../public/images/about-us/iamge-three.png";
import imageTwo from "@/../public/images/about-us/image-two.png";
import imageBig from "@/../public/images/about-us/mission-big.png";
import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="spy80px fade-wrapper bg-gray-200">
      <div className="container">
        <div className="grid items-center gap-6 xl:grid-cols-2">
          <div className="grid items-center gap-5 max-xl:justify-center sm:grid-cols-2">
            <div className="group theme-transition-3 relative col-start-1 col-end-2 overflow-hidden text-black-4">
              <Image
                src={'/img/innerimg/skip-hire-pic.jpg'}
                width={306}
                height={500}
                alt="Skip Hire Image"
                className="block max-xl:mx-auto"
              />
              <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center bg-[linear-gradient(0deg,rgba(18,18,18,0.80)_0%,rgba(18,18,18,0.20)_100%)] opacity-0 group-hover:visible  group-hover:h-full group-hover:opacity-100">
                <p className="h3 font-medium text-white-1">Skip Hire</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="group theme-transition-3 relative text-black-4 ">
                <Image
                  src={"/img/innerimg/concrete.jpg"}
                  width={306}
                  height={238}
                  alt="Concrete Supplyimage"
                />
                <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center bg-[linear-gradient(0deg,rgba(18,18,18,0.80)_0%,rgba(18,18,18,0.20)_100%)] opacity-0 group-hover:visible  group-hover:h-full group-hover:opacity-100">
                  <p className="h3 font-medium text-white-1">Concrete Supply</p>
                </div>
              </div>
              <div className="group theme-transition-3 relative text-black-4 ">
                <Image
                  src={"/img/innerimg/Tipper-Grab.jpg"}
                  width={306}
                  height={238}
                  alt="Tipper Grab image"
                />
                <div className="rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center bg-[linear-gradient(0deg,rgba(18,18,18,0.80)_0%,rgba(18,18,18,0.20)_100%)] opacity-0 group-hover:visible  group-hover:h-full group-hover:opacity-100">
                  <p className="h3 font-medium text-white-1">Tipper Grab</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex h-full px-10">
            <div className="my-auto">
              <SectionTitle
                text="Why choose CS Services?"
                className="h3 text-primary font-medium "
              />
              <ul className=" list-disc list-inside space-y-3 mt-6 lg:pl-12 " >
                <li>
                  Low-cost skip hire, recycling & waste management services in
                  London, affordable prices guaranteed{" "}
                </li>
                <li>
                  {" "}
                  Same-day and next-day skip delivery across all boroughs
                </li>
                <li>
                  {" "}
                  Licensed & government approved waste collection, carrier &
                  transportation service, ensuring responsible waste recycling
                  and disposal{" "}
                </li>
                <li>
                  {" "}
                  We are good with Metal, Chemical, Liquid & Plastic material
                  disposal services
                </li>
                <li>
                  {" "}
                  Coverage of every London suburb and postcode area for any type
                  of House / Office / Building clearance service{" "}
                </li>
                <li>
                  {" "}
                  Friendly, professional service backed by 5-star customer
                  reviews{" "}
                </li>
              </ul>
                <p className="mt-4" >
                  We are your local skip hire company, serving areas such
                  as Camden NW1, Islington N1, Croydon CR0, Hackney E8, Bromley
                  BR1, and Westminster W1. We are good business partners for
                  Builders / Architects / government contractors, facility
                  management companies and Corporate Admins.{" "}
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
