import React from "react";

const InformationGray = () => {
  return (
    <div className="flex w-[629px] p-[20px] items-center gap-[10px] border-l-[3px] border-[#003592] bg-[#F5F5F5] rounded-[5px]">
      {/* Icon */}
      <div className="flex w-[24px] h-[24px] justify-center items-center">
        <img src="/icons/Icon-Outline.svg" alt="Info" className="w-[24px] h-[24px]" />
      </div>
      
      {/* Text Content */}
      <p className="text-[14px] font-normal leading-[24px] text-[#2D2727]">
        Available GCash payment method at the moment is 
        <span className="font-bold"> GCash Bills Pay</span>
      </p>
    </div>
  );
};

export default InformationGray;
