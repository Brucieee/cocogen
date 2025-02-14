import React from "react";

const InformationBlue = ({ date, time }) => {
  return (
    <div className="flex w-[629px] h-[78px] p-[20px] items-center gap-[10px] border-l-[3px] border-[#003592] bg-[#F0FAFF] rounded-[5px]">
      {/* Icon */}
      <div className="flex p-[10px] items-center gap-[10px]">
        <img src="/icons/Icon-Clock.svg" alt="Clock Icon" className="w-[18px] h-[18px]" />
      </div>
      
      {/* Text Content */}
      <p className="text-[14px] font-normal leading-[24px] text-[#2D2727]">
        Blog is scheduled to be posted on <span className="font-black">{date}</span> at <span className="font-black">{time}</span>
      </p>
    </div>
  );
};

export default InformationBlue;
