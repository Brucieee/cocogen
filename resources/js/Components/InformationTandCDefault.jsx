import React, { useState } from "react";

const InformationTandCDefault = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`flex w-[629px] ${isChecked ? 'h-[112px]' : 'h-[80px]'} p-[20px] items-center gap-[10px] bg-[#FFF4DA] rounded-[4px]`}>
      {/* Checkbox */}
      <div
        className={`w-[20px] h-[20px] flex justify-center items-center rounded-[4px] border-2 border-[#1E1F21] cursor-pointer mr-[10px] ${
          isChecked ? "bg-[#1E1F21]" : "bg-[#FFF4DA]"
        }`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked && (
          <img
            src="/icons/Icon-CheckLightYellow.svg"
            alt="Checked"
            className="w-[20px] h-[20px]"
          />
        )}
      </div>

      {/* Text Content */}
      <p className={`w-[559px] ${isChecked ? 'text-[14px] ' : 'text-[12px] '} leading-[20px] text-[#2D2727]`}>
        By continuing this payment, you hereby confirm that you are aware and have fully read Cocogen Insurance’s 
        <span className={`${isChecked ? 'text-[14px] font-bold underline' : 'text-[12px] font-bold underline'}`}> Terms and Conditions</span>, 
        <span className={`${isChecked ? 'text-[14px] font-bold underline' : 'text-[12px] font-bold underline'}`}> Exclusions and Limitations,</span> and 
        <span className={`${isChecked ? 'text-[14px] font-bold underline' : 'text-[12px] font-bold underline'}`}> Data Privacy</span>
      </p>
    </div>
  );
};

export default InformationTandCDefault;