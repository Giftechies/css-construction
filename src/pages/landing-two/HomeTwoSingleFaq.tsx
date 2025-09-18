"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React from "react";
import AnimateHeight from "react-animate-height";

const HomeTwoSingleFaq = ({
  id,
  question,
  answer,
  dropDown,
  setDropDown,
}: {
  id: string;
  question: string;
  answer: string;
  dropDown: string;
  setDropDown: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  return (
    <div
      key={id}
      className={`rounded-16px appear-down  bg-white-1 shadow-md  rounded-xl p-4  sm:p-5`}
    >
      <div
        onClick={() => handleDropDown(id)}
        className={`rounded-16px theme-transition-3 flex cursor-pointer items-center justify-between gap-6`}
      >
        <h6
          className={`l-text font-medium ${
            dropDown === id ? "text-primary" : ""
          }`}
        >
          {question}
        </h6>
        <div
          className={`bg-bgColorOne text-primaryColor theme-transition-4 rounded-full border-2  p-1 ${
            dropDown === id ? "rotate-180 border-primary" : "border-black-4"
          }`}
        >
          {dropDown === id ? (
            <IconMinus
              size={20}
              className={`${dropDown === id ? "text-primary" : "text-black-4"}`}
            />
          ) : (
            <IconPlus size={20} />
          )}
        </div>
      </div>
      <AnimateHeight
        duration={500}
        height={dropDown === id ? "auto" : 0}
        aria-label={`example-panel-${id}`}
      >
        <p className="m-text mt-4">{answer}</p>
      </AnimateHeight>
    </div>
  );
};

export default HomeTwoSingleFaq;
