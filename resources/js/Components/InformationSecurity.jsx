import React from "react";

const InformationSecurity = () => {
  return (
    <div className="flex w-[629px] h-[112px] px-[20px] py-[20px] items-center gap-[10px] border-l-[3px] border-[#003592] bg-[#F5F5F5] rounded-[5px]">
      {/* Icon */}
      <div className="flex w-[24px] h-[24px] justify-center items-center mr-[10px] my-[20px]">
        <img src="/icons/Icon-SealCheck.svg" alt="Info" className="w-[24px] h-[24px]" />
      </div>
      
      {/* Text Content */}
      <p className="w-[555px] h-[72px] text-[14px] font-normal leading-[24px] text-[#2D2727]">
        <span className="font-bold">Cocogen Insurance will not have access to your card information. </span>
        <span className="font-normal">We prioritize your privacy and security, ensuring that your financial details remain confidential and protected at all times.</span>
      </p>
    </div>
  );
};

export default InformationSecurity;