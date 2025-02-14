import React from "react";

const ReminderUpdateProfile = ({ plan }) => {
  return (
    <div className="flex items-start gap-5 p-[25px_20px] w-full max-w-[705px] bg-[#FFF9EC]  shadow-sm">
      {/* Fixed 24x24 SVG Icon */}
      <div className="flex items-center justify-center w-6 h-6 shrink-0">
        <img
          src="/icons/Icon-Lightbulb.svg"
          alt="Lightbulb"
          className="w-6 h-6" // Explicitly set to 24x24
        />
      </div>

      {/* Right Content */}
      <div className="text-[16px] leading-[24px] font-normal text-[#303030]">
        Your personal information is automatically entered in the form. If you need to update your information, go to Profile {">"} Personal Information
        <span className="font-normal"> {plan} </span>
      </div>
    </div>
  );
};

export default ReminderUpdateProfile;