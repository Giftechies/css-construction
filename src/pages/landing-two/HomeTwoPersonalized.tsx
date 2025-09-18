import animalImage from "@/../public/images/home-two/personalized-animal-image.png";
import image from "@/../public/images/home-two/personalized-section-image.png";
import RoundedLink from "@/components/link/RoundedLink";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const HomeTwoPersonalized = () => {
  return (
    <section className="max-lg:spy120px fade-wrapper relative bg-secondary">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 justify-end lg:col-end-7 4xl:flex 4xl:place-self-end">
            <Image
              src={image}
              width={948}
              height={576}
              alt="Personalized image section image"
              className="appear-down 4xl:max-w-[unset]"
            />
          </div>
          <div className="spy60px lg:spy120px col-start-1 col-end-13 lg:col-start-8">
            <SectionTitle
              text="Need a Personalized Solution?"
              className="h2 text-white-1"
            />
            <SectionText
              text="Get in touch with us, and we will help you to create the right one for your business or personal needs."
              className="spt24px l-text fade-top font-normal text-white-1"
            />
            <RoundedLink
              buttonText="Apply for a loan"
              link="/contact"
              className="smt40px border-white-1 bg-white-1 hover:border-primary hover:bg-primary max-sm:w-[180px] sm:size-[180px] lg:size-[180px]"
            />
          </div>
        </div>
      </div>
      <Image
        src={animalImage}
        width={276}
        height={273}
        alt="animal image"
        className="absolute bottom-0 right-0  max-xxl:w-40"
      />
    </section>
  );
};

export default HomeTwoPersonalized;
