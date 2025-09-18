import React from "react";

type StepDescriptionProps = {
  title: string;
  description: string;
};

const StepDescription: React.FC<StepDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="fade-top">
      <h6 className="h6 font-medium">{title}</h6>
      <ul className="m-text ms-4 mt-2 list-disc text-black-3">
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default StepDescription;
