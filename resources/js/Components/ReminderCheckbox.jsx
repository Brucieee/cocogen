import React, { useState } from "react";

const ReminderCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center w-full max-w-[705px] mt-2">
      {/* Checkbox Container */}
      <div
        className={`flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border-2 rounded-[4px] cursor-pointer transition-all bg-white shrink-0 mr-[15px] my-[15px] ${
          checked ? "bg-[#E4509A] border-[#E4509A]" : "border-[#D7DEE3]"
        }`}
        onClick={() => setChecked(!checked)}
      >
        {checked && (
          <img src="/icons/Icon-Check.svg" alt="Checked" className="w-4 h-4 md:w-5 md:h-5" />
        )}
      </div>

      {/* Text - takes remaining space to push checkbox left */}
      <span className="text-sm md:text-base leading-[24px] text-[#2D2727]">
        I agree with <span className="font-bold">Privacy Policy</span>
      </span>
    </div>
  );
};

export default ReminderCheckbox;