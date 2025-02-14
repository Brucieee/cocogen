import React from "react";

const ReminderConversionNote = ({ plan }) => {
  return (
    <div className="flex items-start gap-5 p-[25px_20px] w-full max-w-[705px] bg-[#FFFADC]">
      {/* Fixed 24x24 SVG Icon */}
      <div className="flex items-center justify-center w-6 h-6 shrink-0">
        <img
          src="/icons/Icon-Calculator.svg"
          alt="Calculator"
          className="w-6 h-6" // Explicitly set to 24x24
        />
      </div>

      {/* Right Content */}
      <div className="text-[16px] leading-[24px] font-normal text-[#303030]">
        Latest USD to PHP conversion will be applied at payment step. 1 USD to 58.55 PHP
        <span className="font-normal"> {plan} </span>
      </div>
    </div>
  );
};

export default ReminderConversionNote;