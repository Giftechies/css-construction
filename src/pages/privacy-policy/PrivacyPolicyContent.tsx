import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";

const dataProtection = [
  "To provide and maintain our forex trading services.",
  "To process transactions and execute trades",
  "To communicate with you, including sending updates, alerts, and notifications.",
  "To personalize and improve your experience on our platform.",
  "To comply with legal and regulatory requirements.",
];

const legalInfo = [
  "Banks have their own internal policies regulations.",
  "Regular audits and external oversight ensure that banks.",
  "Comply with privacy laws and maintain data security.",
];

const dataAccuracy = [
  "Opt-out of marketing communications.",
  "Access and update your personal information.",
  "Close your account and request deletion of your data.",
];

const PrivacyPolicyContent = () => {
  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container">
        <div className="grid-cols-12 gap-6 lg:grid">
          <div className="sm:sp60px col-start-2 col-end-12 bg-white-4 p-3 xl:col-start-3 xl:col-end-11">
            <SectionTitle text="Privacy & Policy" className="h2 text-center" />
            <div className="spt60px flex flex-col gap-5 md:gap-6 xl:gap-10">
              <div>
                <h5 className="h4 title-animation font-medium">
                  General Information
                </h5>
                <SectionText
                  text="Banking is not just about transactions and investments; it's also about trust. Customers trust their banks with sensitive financial information, and banks, in turn, have a responsibility to protect that data. In this article, we delve into the crucial aspects of banking privacy and policy, highlighting the measures taken to safeguard your financial data."
                  className="
                  fade-top mt-3"
                />
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Confidentiality and Data Protection
                </h5>
                <SectionText
                  text="Banks are legally and ethically bound to maintain the confidentiality of your financial information. This extends to your account balances, transactions, and personal details."
                  className="
                  fade-top mt-3"
                />
                <ul
                  className="
                fade-top mt-3 flex list-disc flex-col gap-3 ps-5 lg:mt-5"
                >
                  {dataProtection.map((text, index) => (
                    <li key={`protection${index}`}>{text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Data Security Measures
                </h5>
                <SectionText
                  text="Banks employ robust data security measures, including encryption, secure servers, and multi-factor authentication, to prevent unauthorized access to your accounts."
                  className="
                  fade-top mt-3"
                />
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Legal and Regulatory Framework
                </h5>
                <SectionText
                  text="Banking privacy is underpinned by laws and regulations, such as the Gramm-Leach-Bliley Act in the United States, that mandate how financial institutions handle customer data."
                  className="
                  fade-top mt-3"
                />
                <ul
                  className="
                fade-top mt-3 flex list-disc flex-col gap-3 ps-5 lg:mt-5"
                >
                  {legalInfo.map((text, index) => (
                    <li key={`protection${index}`}>{text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Data Accuracy
                </h5>
                <ul
                  className="
                fade-top mt-3 flex list-disc flex-col gap-3 ps-5 lg:mt-5"
                >
                  {dataAccuracy.map((text, index) => (
                    <li key={`protection${index}`}>{text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">
                  Changes to this Privacy & Policy
                </h5>
                <SectionText
                  text="Regular audits and external oversight ensure that banks comply with privacy laws and maintain data security."
                  className="
                  fade-top mt-3"
                />
              </div>
              <div>
                <h5 className="h4 title-animation font-medium">Contact Us</h5>
                <SectionText
                  text="If you have any questions or concerns about our Privacy & Policy, please contact us at [Contact Email]."
                  className="
                  fade-top mt-3"
                />
                <SectionText
                  text="By using our forex trading platform or website, you acknowledge that you have read, understood, and agreed to this Privacy & Policy. Your continued use of our services constitutes your acceptance of any changes made to this policy."
                  className="
                  fade-top mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
