import React, { useState } from "react";

const ReminderCheckbox = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxClick = (event) => {
        event.preventDefault(); // Prevents unwanted text selection
        setChecked((prev) => !prev);
    };

    return (
        <div
            className="flex items-center w-full max-w-[705px] mt-2 select-none cursor-pointer"
            onClick={handleCheckboxClick}
        >
            {/* Checkbox Container */}
            <div
                className={`flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border-2 rounded-[4px] transition-all shrink-0 mr-4 my-[15px] ${
                    checked
                        ? "bg-[#E4509A] border-[#E4509A]"
                        : "border-[#D7DEE3] bg-white"
                }`}
            >
                {checked && (
                    <img
                        src="/icons/Icon-Check.svg"
                        alt="Checked"
                        className="w-4 h-4 md:w-5 md:h-5"
                        onError={(e) => {
                            console.error("Icon failed to load", e);
                        }} // Debugging for missing icon
                    />
                )}
            </div>

            {/* Text */}
            <span className="text-sm md:text-base leading-[24px] text-[#2D2727]">
                I agree with <span className="font-bold">Privacy Policy</span>
            </span>
        </div>
    );
};

export default ReminderCheckbox;
