import image from "@/../public/images/home-loan/get-home-loan.png";
import Lines from "@/components/shared/Lines";
import SectionText from "@/components/shared/SectionText";
import Image from "next/image";

const GetHomeLoan = () => {
  return (
    <section
      className="spy120px fade-wrapper relative overflow-hidden"
      id="scrollPosition"
    >
      <div className="container flex justify-between gap-6 max-xl:flex-col">
        <h3 className="d2 max-w-[585px] font-medium">
          Get your Home Loan Locally
        </h3>
        <p className="fade-top max-w-[416px]">
          Online and mobile banking provide convenient access to your accounts,
          allowing you to check balances, make transfers, pay bills
        </p>
      </div>
      <div className="spt60px spb60px flex justify-center max-xxl:container">
        <Image
          src={image}
          alt="Home Loan get your education loan locally"
          className="appear-down"
        />
      </div>
      <div className="container grid grid-cols-12  gap-5 md:gap-6">
        <h4 className="h2 title-animation col-start-1 col-end-13 font-semibold sm:col-end-9 lg:col-end-5">
          Features of Home Loan
        </h4>
        <div className="col-start-1 col-end-13 lg:col-start-6 xxl:col-start-7">
          <SectionText
            text="Business loans in India can be availed in the range of Rs.50,000 and up to Rs. 75 Lakhs. These loan applications usually get approved fairly quickly and sans any hassle during promise of secured lending solutions when it comes to business loans."
            className="fade-top"
          />
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default GetHomeLoan;
