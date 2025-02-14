import React from "react";

const ReminderSelectGateway = () => {
  return (
    <div className="flex w-[599px] h-[40px] p-[8px_10px] items-center gap-[10px] bg-[#FFF4DA] rounded-[2px]">
      {/* Icon */}
      <div className="flex justify-center items-center w-[12px] h-[12px]">
        <img src="/icons/Icon-Info.svg" alt="Info" className="w-[12px] h-[12px]" />
      </div>
      
      {/* Text Content */}
      <p className="text-[14px] font-bold leading-[24px] text-[#3B3939]">
        Select one payment gateway
      </p>
    </div>
  );
};

export default ReminderSelectGateway;
