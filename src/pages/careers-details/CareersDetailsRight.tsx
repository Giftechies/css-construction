import LinkAccentThree from "@/components/link/LinkAccentThree";
import SocialMedia from "@/components/shared/SocialMedia";
import { IconCheckbox, IconPhoneCall } from "@tabler/icons-react";

const applyList = [
  "Step-by-Step Application Process",
  "Duis aute irure dolor in reprehenderit",
  "Gather Required Documents",
  "Prepare Your Resume and Cover Letter",
  "Follow-Up and Confirmation",
];
const CareersDetailsRight = () => {
  return (
    <div className="col-start-1 col-end-13 lg:col-start-8 xxl:col-end-12">
      <h5 className="h4 text-center font-medium">How To Apply?</h5>
      <div className="sm:sp32px spt32px spb32px flex flex-col gap-4">
        {applyList.map((item, index) => (
          <div
            key={`applyList${index}`}
            className="l-text appear-down flex items-center gap-2 text-black-1"
          >
            <IconCheckbox className="text-primary" /> <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="flex till-card flex-col items-center rounded-xl bg-primary px-6 py-10 text-center sm:px-[90px]">
        <div className="sp24px mx-auto w-fit rounded-full bg-accent-3">
          <IconPhoneCall className="size-8" />
        </div>
        <h6 className="h4 mt-5 font-medium text-white-1">Send Us Your C.V.</h6>
        <p className="l-text mt- mt-5 text-white-4">
          Do you want to work with us? Please, send your CV to
          contact@wealthify.com
        </p>
        <LinkAccentThree link="/contact-us" linkText="Contact Us" className="smt32px" />
      </div>
      <div className="smt60px"></div>
      <SocialMedia />
    </div>
  );
};

export default CareersDetailsRight;
