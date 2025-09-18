
import OurWorkCard from '@/pages/home-three/OurWorkCard'
import SectionTitle from "@/components/shared/SectionTitle";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
// import Service from "@/../../public/img/svg/customer-service.svg"

const steps = [
  {
    step: "01",
    heading: "get a quote",
    iconname: '/img/svg/quote.png',
    text: "Start by contacting us for a free, personalized quote. Share your moving details."
  },
  {
    step: "02",
    heading: "plan your move",
    iconname: "/img/svg/customer.png",
    text: "Our team works with you to create a customized moving plan. From packing to logistics."
  },
  {
    step: "03",
    heading: "safe & secure moving",
    iconname: "/img/svg/box-carring.png",
    text: "Our expert movers handle your belongings with care, using high-quality packing materials."
  },
  {
    step: "04",
    heading: "unpack & settle in",
    iconname: "/img/svg/setting.png",
    text: "Once we've delivered your items, we'll help with unpacking and setting up, so you can enjoy."
  },
];

export default function OurWorks() {
  return (
    <section className="spy120px  bg-zinc-200 fade-wrapper relative overflow-hidden">
      <div className="container  flex flex-col items-center justify-center ">
        <SectionSubTitle
        text="OUR WORK PROCESS"
        className=" text-black-2"
        />
        <SectionTitle
        text="Reliable moving services built around you"
        className="  w-[70%] text-center mt-3 text-[var(--secondary)]"
        />
      <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2  mt-8 space-y-8 items-center justify-center">
          {steps.map((item, index) => (
         <div key={index} className={` `}>
             <OurWorkCard
            key={index}
            step={item.step}
            heading={item.heading}
            iconname={item.iconname}
            text={item.text}
            className={`  ${index % 2 === 0? "":"lg:mt-30"} ` }
          />
         </div>
        ))}
      </div>
      </div>
    </section>
  );
}
