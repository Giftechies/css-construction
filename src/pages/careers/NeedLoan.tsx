import image1 from "@/../public/images/need-loan-1.png";
import image2 from "@/../public/images/need-loan-2.png";
import RoundedLink from "@/components/link/RoundedLink";
import ReactCounterUp from "@/components/shared/Counter";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";
import { IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";

const NeedLoan = () => {
  return (
    <section
      className="spt120px fade-wrapper spb120px relative overflow-hidden"
      id="scrollPosition"
    >
      <div className="container grid grid-cols-12 items-center gap-6">
        <div className="relative col-start-1 col-end-13 grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:col-end-7 xl:grid-cols-6 xl:items-end">
          <div className="xl:col-start-1 xl:col-end-5">
            <Image
              src={image1}
              width={416}
              height={444}
              alt="Mission image one"
              className="appear-down max-sm:mx-auto"
            />
          </div>
          <div className="xl:col-start-5 xl:col-end-7">
            <Image
              src={image2}
              width={330}
              height={348}
              alt="Mission image two"
              className="appear-down xl:-ms-25 xl:max-w-[unset]"
            />
            <div className="d1 font-semibold text-primary">
              <Counter value={25} />+
            </div>
            <p className="xl-text text-black-1">Loans Approved</p>
          </div>
        </div>
        <div className="col-start-1 col-end-13 xl:col-start-8">
          <SectionSubTitle text="Need A Loan" />
          <SectionTitle
            text="The Power of Team Determination"
            className="h3 pt-3"
          />
          <SectionText
            className="fade-top pt-5"
            text="In addition to student reviews, there are other factors consider evaluating
            educational institutions or courses, such accreditation, graduation rates, 
            attend information sessions or open houses,"
          />
          <div className="spt32px flex flex-col gap-3">
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>Great explorer of the master-builder</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>On the other hand</span>
            </div>
            <div className="m-text fade-top flex items-center gap-2 text-accent-1">
              <IconCheckbox /> <span>Community that grows larger</span>
            </div>
          </div>
          <RoundedLink
            buttonText="About More"
            link="/about-us"
            className="smt40px border-accent-3 bg-accent-3 text-black-4 hover:border-accent-3 hover:bg-transparent hover:text-black-4 lg:size-[160px]"
          />
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default NeedLoan;
