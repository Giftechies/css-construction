import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";

const legalFrameWork = [
  "Banking terms and conditions should be transparent and written in clear,",
  "They are meant to provide you with an understanding of your banking relationship.",
  "Terms and conditions cover a wide range of areas.",
  "Including account opening, deposits, withdrawals, fees and charges,",
  "To comply with legal and regulatory requirements.",
];

const privacyData = [
  "They also outline the bank's commitments to customers,",
  "Such as timely processing of transactions and providing account statements.",
  "Terms and conditions often include information on how to address disputes.",
];

const bankObligations = [
  "Access and update your personal information.",
  "Opt-out of marketing communications.",
  "Close your account and request deletion of your data.",
];

const TermsConditionsContent = () => {
  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container">
        <div className="grid-cols-12 gap-6 lg:grid">
          <div className="sm:sp60px col-start-2 col-end-12 bg-white-4 p-3 xl:col-start-3 xl:col-end-11">
            <SectionTitle
              text="Terms & Conditions"
              className="h2 text-center"
            />
            <div className="spt60px flex flex-col gap-5 md:gap-6 xl:gap-10">
              <div>
                <h5 className="h4 title-animation font-medium">
                  Banking Terms & Conditions
                </h5>
                <SectionText
                  text="Banking is a fundamental part of managing our finances, and just like any other important service, it comes with its own set of terms and conditions. In this article, we'll guide you through the essential aspects of banking terms and conditions, helping you understand the rules and agreements that govern your relationship with your bank."
                  className="fade-top mt-4"
                />
              </div>
              <div>
                <h5 className="h4 font-medium">Legal Framework</h5>
                <SectionText
                  text="Banking terms and conditions are a legal framework that outlines the rules, responsibilities, and rights of both the bank and its customers. They are designed to protect the interests of all parties involved."
                  className="fade-top mt-4"
                />
                <ul className="fade-top mt-3 flex list-disc flex-col gap-3 ps-5 lg:mt-5">
                  {legalFrameWork.map((text, index) => (
                    <li key={`protection${index}`}>{text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Transparency and Clarity
                </h5>
                <SectionText
                  text="Banking terms and conditions should be transparent and written in clear, accessible language. They are meant to provide you with an understanding of your banking relationship."
                  className="fade-top mt-4"
                />
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Privacy and Data Protection
                </h5>
                <SectionText
                  text="These terms specify customer responsibilities, including protecting account information, reporting lost or stolen cards, and notifying the bank of address changes."
                  className="fade-top mt-3 md:mt-4"
                />
                <ul className="fade-top mt-3 flex list-disc flex-col gap-3 ps-5 lg:mt-5">
                  {privacyData.map((text, index) => (
                    <li key={`protection${index}`}>{text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Bank&apo;s Obligations
                </h5>
                <ul className="fade-top mt-3 flex list-disc flex-col gap-3 ps-5 lg:mt-5">
                  {bankObligations.map((text, index) => (
                    <li key={`protection${index}`}>{text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Scope of Agreement
                </h5>
                <SectionText
                  text="Terms and conditions cover a wide range of areas, including account opening, deposits, withdrawals, fees and charges, interest rates, loans, privacy, and dispute resolution."
                  className="fade-top mt-3 md:mt-4"
                />
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Grievance Redressal Mechanisms
                </h5>
                <SectionText
                  text="Terms and conditions often include information on how to address disputes or file complaints, including contact details for customer service or the banking ombudsman."
                  className="fade-top mt-3 md:mt-4"
                />
                <SectionText
                  text="Understanding banking terms and conditions is essential part of managing your finances responsibly. These documents provide the framework for your banking relationship, helping to ensure transparency, fairness, and the protection of your rights as a customer."
                  className="fade-top mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditionsContent;
