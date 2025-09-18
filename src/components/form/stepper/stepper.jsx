import "./stepper.css";

export default function stepper({ step, currentStep, setCurrentStep,className='' }) {

  const Moveto=(index)=>{
    if(currentStep>index){
      setCurrentStep(index)
    }

  }
  return (
    <div className={`stepper mb-8 flex items-center justify-between gap-[3rem] ${className}`}>
      {step.map((item, index) => {
        const isActive = currentStep === index + 1;
        const isCompleted = currentStep > index + 1;
        return (
          <>
            <div
              key={index}
              className={`step-item flex flex-col items-center gap-4`}
            >
              <div className="step-label relative text-center">
                <span onClick={()=>Moveto(index+1)}
                  className={`step-number ${isActive ? "active" : "" || isCompleted ? "completed text-white-1 " : ""}  flex size-[40px]  items-center justify-center rounded-full bg-zinc-300  `}
                >
                  {isCompleted ? <i className="ri-check-line "></i> : index + 1}
                </span>
                {index < step.length - 1 && (
                  <div
                    className={` w-[3rem] ${isCompleted ? "completed" : ""} absolute left-[100%] top-1/2 h-1 bg-zinc-300`}
                  ></div>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
