import image1 from "@/../public/images/education-loan/educatin-apply-for-loan-1.png";
import image2 from "@/../public/images/education-loan/educatin-apply-for-loan-2.png";
import image3 from "@/../public/images/education-loan/educatin-apply-for-loan-3.png";
import Lines from "@/components/shared/Lines";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { cn } from "@/utils/cn";
import Image from "next/image";

const EducationApplyForLoan = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn("spy120px relative overflow-hidden bg-white-4", className)}
    >
      <div className="container">
        <div className="flex items-center gap-6  max-md:flex-wrap">
          <div>
            <Image
              src={image1}
              width={636}
              height={360}
              alt="Education Loan apply loan one"
              className="appear-down shrink"
            />
          </div>
          <div>
            <Image
              src={image2}
              width={636}
              height={360}
              alt="Education Loan apply loan two"
              className="appear-down"
            />
          </div>
        </div>
        <div>
          <Image
            src={image3}
            width={1296}
            height={719}
            alt="Education Loan apply loan two"
            className="appear-down mt-6"
          />
          <div className="mt-10 grid-cols-12 gap-6 sm:grid lg:-mt-56">
            <div className="sp40px relative z-10 col-start-2 col-end-12 bg-white-1 shadow-custom3 lg:col-start-3 lg:col-end-11">
              <SectionTitle
                text="Apply for a loan"
                className="h2 text-center"
              />
              <SectionText
                text="Please fill the form below. We will get in touch with you within 1-2 business days, to request all necessary details"
                className="mx-auto mt-5 max-w-[440px] text-center"
              />
              <form className="smt60px flex flex-col gap-4 lg:gap-10">
                <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                  <div>
                    <label className="h5 block font-medium" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="mt-3 w-full rounded-xl bg-white-4 px-5 py-4 placeholder:text-black-3"
                      id="name"
                      type="text"
                      placeholder="What's your name?"
                    />
                  </div>
                  <div>
                    <label className="h5 block font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="mt-3 w-full rounded-xl bg-white-4 px-5 py-4 placeholder:text-black-3"
                      id="email"
                      type="email"
                      placeholder="What's your email?"
                    />
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                  <div>
                    <label className="h5 block font-medium" htmlFor="name">
                      Phone
                    </label>
                    <input
                      className="mt-3 w-full rounded-xl bg-white-4 px-5 py-4 placeholder:text-black-3"
                      id="phone"
                      type="number"
                      placeholder="(123) 480 - 3540"
                    />
                  </div>
                  <div>
                    <label className="h5 block font-medium" htmlFor="email">
                      State
                    </label>
                    <input
                      className="mt-3 w-full rounded-xl bg-white-4 px-5 py-4 placeholder:text-black-3"
                      id="state"
                      type="text"
                      placeholder="California"
                    />
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                  <div>
                    <label className="h5 block font-medium" htmlFor="name">
                      Loan amount
                    </label>
                    <input
                      className="mt-3 w-full rounded-xl bg-white-4 px-5 py-4 placeholder:text-black-3"
                      id="loanAmount"
                      type="number"
                      placeholder="Ex. $8,000 USD"
                    />
                  </div>
                  <div>
                    <label className="h5 block font-medium" htmlFor="email">
                      Loan term
                    </label>
                    <input
                      className="mt-3 w-full rounded-xl bg-white-4 px-5 py-4 placeholder:text-black-3"
                      id="loanTerm"
                      type="text"
                      placeholder="Ex. 12 months"
                    />
                  </div>
                </div>
                <button className="theme-transition-3 border bg-primary px-8 py-4 text-white-1 hover:bg-accent-3 hover:text-black-4">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default EducationApplyForLoan;
