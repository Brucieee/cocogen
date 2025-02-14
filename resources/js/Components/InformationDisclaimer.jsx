import React from "react";

const InformationDisclaimer = () => {
  return (
    <div className="flex w-[629px] h-[100px] p-[20px] items-center gap-[10px] bg-[#FFF] rounded-[5px]">
      {/* Text Content */}
      <p className="text-[12px] font-normal leading-[20px] text-[#2D2727]">
        <span className="font-bold">Disclaimer: </span>This payment will be processed by Dragonpay, an independent third-party payment processor. By using Dragonpay, you agree to its 
        <span className="font-bold underline"> Terms & Conditions </span> and 
        <span className="font-bold underline"> Privacy Policy</span>. This payment is intended for instructional purposes and should not be treated as a receipt of a completed payment.
      </p>
    </div>
  );
};

export default InformationDisclaimer;
