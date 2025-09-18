import image from "@/../public/images/personal-loan/personal-get-loan.png";
import SectionText from "@/components/shared/SectionText";
import Image from "next/image";

const GetPersonalLoan = () => {
  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container flex justify-between gap-6 max-xl:flex-col">
        <h3 className="d2 max-w-[631px] font-medium">
          Get your Personal Loan Locally
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
        <h4 className="h2 fade-top col-start-1 col-end-13 font-semibold sm:col-end-9 lg:col-end-7">
          We have 25+ years experiences in sector and build your dream with
          payloan.
        </h4>
        <div className="col-start-1 col-end-13 lg:col-start-8 xxl:col-start-9">
          <SectionText text="Online and mobile banking provide convenient access to your accounts, allowing you to check balances, make transfers, pay bills" />
          <div className="flex max-sm:flex-col sm:gap-6">
            <ul className="spt24px fade-top flex flex-1 list-inside flex-col gap-3 sm:col-end-4 xl:col-end-3 xl:gap-4">
              <li className="m-text text-black-3">+ Saving Account</li>
              <li className="m-text text-black-3">+ Business Account</li>
              <li className="m-text text-black-3">+ Loan Facility</li>
            </ul>
            <ul className="spt24px fade-top flex flex-1 list-inside flex-col gap-3 sm:col-end-4 xl:col-end-3 xl:gap-4">
              <li className="m-text text-black-3">+ Multiple Accounts</li>
              <li className="m-text text-black-3">+ Expense Track</li>
              <li className="m-text text-black-3">+ International Account</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPersonalLoan;
