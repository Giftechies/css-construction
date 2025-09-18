import { cn } from "@/utils/cn";
import { IconCheck } from "@tabler/icons-react";
import { MapPin } from "lucide-react";
import React from "react";

export default function ProgressBar({ className,currentStep, setCurrentStep, steps }) {
  const Handlestate = (idx) => {
    if (idx <= currentStep) {
      setCurrentStep(idx);
    }
  };

  return (
    <div className={cn("relative flex items-center justify-between sm:w-[75%]",className)}>
      {steps.map((step, idx) => {
        const isClickable = idx <= currentStep;

        return (
          <div key={idx} className="relative flex-1 flex flex-col items-center">
            {/* Circle */}
            
            <div
              onClick={() => Handlestate(idx)}
              className={cn(
                ` z-50 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold`,
                {
                  "cursor-pointer": isClickable,
                  "cursor-not-allowed opacity-50": !isClickable, // 🚫 disable future steps
                  "bg-primary text-white-1": idx === currentStep,
                  "bg-green-600 text-white-1": idx < currentStep,
                  "bg-gray-300 !text-black-4": idx > currentStep,
                }
              )}
            >
              {idx < currentStep ? <IconCheck /> : idx + 1}
            </div>

            {/* Step Title */}
            <span className="text-xs font-semibold mt-1 text-center">{step.title}</span>

            {/* Connector line (background gray) */}
            {idx < steps.length - 1 && (
              <div
                className="absolute top-[35%] left-[60%] bg-gray-300 h-2 w-[80%] z-35"
                style={{
                  transform: "translateY(-50%)",
                }}
              ></div>
            )}

            {/* Connector line (active progress) */}
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "absolute top-[35%] left-1/2 -translate-y-1/2 h-2 w-0 z-40 theme-transition-3",
                  {
                    "bg-green-600 w-full": idx < currentStep,
                  }
                )}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
