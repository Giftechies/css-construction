import SectionText from "@/components/shared/SectionText";
import StepDescription from "./StepDescription";

const JobOverView = () => {
  return (
    <>
      <h5 className="h5 spt32px font-medium">Core Sectors in Banking:</h5>
      <SectionText
        text="A job description serves as a vital tool in the recruitment and management of both employees. It provides a clear and detailed overview of a particular job role, allowing both employers and job seekers to understand the position's requirements and responsibilities."
        className="mt-3 fade-top"
      />

      <div className="smt24px flex flex-col gap-4 ">
        <StepDescription
          title="1. Retail Banking"
          description="Retail banking is the face of banking, serving individual customers and small businesses. Job roles in this sector include bank tellers, customer service representatives, personal bankers, and branch managers."
        />
        <StepDescription
          title="2. Commercial Banking:"
          description="Commercial banking focuses on serving medium to large businesses. It offers career paths for relationship managers, credit analysts, and business development officers."
        />
        <StepDescription
          title="3. Wealth Management:"
          description="Wealth management caters to high-net-worth individuals and offers positions such as wealth advisors, portfolio managers, and financial planners."
        />
        <StepDescription
          title="4. Corporate Banking:"
          description="Corporate banking serves corporate clients and involves roles like corporate bankers, treasury managers, and risk analysts."
        />
        <StepDescription
          title="5. Private Banking:"
          description="Private banking focuses on personalized financial services for high-net-worth clients and offers positions like private bankers, trust officers, and estate planners."
        />
      </div>
    </>
  );
};

export default JobOverView;
