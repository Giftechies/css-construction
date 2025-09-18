import SectionText from "@/components/shared/SectionText";

const JobRequirements = () => {
  return (
    <>
      {" "}
      <h5 className="h5 spt32px title-animation font-medium">
        Core Sectors in Banking:
      </h5>
      <SectionText
        text="A job description serves as a vital tool in the recruitment and management of both employees. It provides a clear and detailed overview of a particular job role, allowing both employers and job seekers to understand the position's requirements and responsibilities."
        className="fade-top mt-3"
      />
      <ul className="spt24px m-text flex list-inside list-disc flex-col gap-3">
        <li>
          Corporate banking serves corporate clients and involves roles like
          corporate bankers,
        </li>
        <li>
          The risk and compliance sector is responsible for ensuring that banks
        </li>
        <li>Technology is pivotal in modern banking.</li>
        <li>
          Marketing professionals create strategies to promote bank products and
          services,
        </li>
      </ul>
      <SectionText
        text="Job descriptions are essential tools for organizations to manage their workforce effectively and attract the right talent. They provide a foundation for clear 
        and legal compliance in the workplace."
        className="mt-6"
      />
    </>
  );
};

export default JobRequirements;
