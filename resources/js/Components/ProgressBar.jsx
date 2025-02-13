import React, { useState } from "react";
import IconCheck from "../icons/IconCheck.svg";

const ProgressStep = ({ step, currentStep, totalSteps }) => {
  const isCompleted = step < currentStep;
  const isCurrent = step === currentStep;
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
            ${isCompleted ? "bg-purple-600 text-white border-purple-600" : "border-gray-400"} 
            ${isCurrent ? "border-purple-600 text-purple-600" : "text-gray-400"}`}
        >
          {isCompleted ? <img src={IconCheck} alt="Completed" className="w-5 h-5" /> : step}
        </div>
        {step !== totalSteps && <div className={`w-12 h-1 ${isCompleted ? "bg-purple-600" : "bg-gray-400"}`}></div>}
      </div>
      <span className="text-sm mt-1">
        {isCompleted ? "Completed" : isCurrent ? "In Progress" : "Pending"}
      </span>
    </div>
  );
};

const ProgressBar = ({ totalSteps = 4 }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex items-center gap-4">
        {[...Array(totalSteps)].map((_, index) => (
          <ProgressStep key={index} step={index + 1} currentStep={currentStep} totalSteps={totalSteps} />
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={handlePrevious} disabled={currentStep === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Previous</button>
        <button onClick={handleNext} disabled={currentStep === totalSteps} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default ProgressBar;
