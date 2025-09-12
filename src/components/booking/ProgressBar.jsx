import { cn } from "@/utils/cn";
import React from "react";

export default function ProgressBar({ currentStep, steps }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center">
          <div
            className={cn(`w-8 h-8 rounded-full flex items-center text-white-1 justify-center text-sm ${
              idx === currentStep
                ? "bg-primary t"
                : "bg-gray-300 text-gray-600"
            }`,{"bg-green-700 text-white-1 ":idx < currentStep})}
          >
            {idx + 1}
          </div>
          <span className="text-xs mt-1">{step.title} </span>
        </div>
      ))}
    </div>
  );
}
