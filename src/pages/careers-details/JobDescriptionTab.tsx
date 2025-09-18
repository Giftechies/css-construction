import SectionText from "@/components/shared/SectionText";

const JobDescriptionTab = () => {
  return (
    <>
      <h5 className="h5 spt32px font-medium">Education and Experience:</h5>
      <SectionText
        text="A job description serves as a vital tool in the recruitment and management of both employees. It provides a clear and detailed overview of a particular job role, allowing both employers and job seekers to understand the position's requirements and responsibilities."
        className="fade-top mt-3"
      />
      <SectionText
        text="Details about the work environment, including physical demands, travel requirements, and any specific working hours."
        className="fade-top mt-3"
      />
      <ul className="spt24px m-text fade-top flex list-inside list-disc flex-col gap-3">
        <li>Be clear and concise in describing responsibilities.</li>
        <li>Use specific language and action verbs to define tasks.</li>
        <li>Highlight the most important qualifications.</li>
        <li>
          Update job descriptions regularly to reflect changes in the role.
        </li>
      </ul>
      <SectionText
        text="Job descriptions are essential tools for organizations to manage their workforce effectively and attract the right talent. They provide a foundation for clear and legal compliance in the workplace."
        className="spt24px fade-top"
      />
    </>
  );
};

export default JobDescriptionTab;
