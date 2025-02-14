import { useState } from "react";

const steps = ["Trip Details", "Quotation", "Personal Data", "Payment"];

const StepIndicator = ({ step, index, currentStep, completedSteps }) => {
  const isCompleted = completedSteps.includes(index);
  const isActive = index === currentStep;

  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div
        className={`flex items-center justify-center w-[35px] h-[35px] rounded-full border-2 bg-surfaces-1 z-10 ${
          isCompleted ? " text-white border-[#09A12A]" :
          isActive ? "border-teal-8 text-teal-8 bg-[#F7FFFF] " : "border-surfaces-2 text-gray-400 bg-surfaces-2"
        }`}
      >
        {isCompleted ? <img src="/icons/Icon-CheckWhiteCircleGreen.svg" alt="Completed" className="w-[35px] h-[35px]" /> : index + 1}
      </div>
      <span className={`text-sm font-medium mt-2 ${isActive ? "text-black font-bold" : "text-gray-500"}`}>{step}</span>
      <span className={`text-xs ${isCompleted ? "text-green-500" : isActive ? "text-teal-8" : "text-gray-400"}`}>
        {isCompleted ? "Completed" : isActive ? "In Progress" : "Pending"}
      </span>
    </div>
  );
};

const Button = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white transition-colors duration-300 ${
        disabled ? "bg-gray-300 cursor-not-allowed" : "bg-teal-9 hover:bg-teal-600"
      }`}
    >
      {children}
    </button>
  );
};

const ProgressTracker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps((prev) => prev.filter((step) => step !== currentStep));
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="relative w-full max-w-lg flex items-center justify-between">
        <div className="absolute top-4 left-1/4 right-1/4 h-0.5 bg-gray-300 z-0"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative w-1/4">
            {index > 0 && (
              <div className={`absolute top-4 left-[-50%] w-full h-0.5 ${completedSteps.includes(index) ? "bg-green-500" : "bg-gray-300"}`} />
            )}
            <StepIndicator step={step} index={index} currentStep={currentStep} completedSteps={completedSteps} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <Button onClick={handlePrev} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProgressTracker;