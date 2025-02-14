import React from "react";
import DangerButtonLined from "./DangerButtonLined";
import PrimaryButton from "./PrimaryButton";

const DeletePhoto = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center w-[509px] p-[35px] bg-white rounded-[8px] shadow-lg">
      {/* Icon Frame */}
      <div className="flex justify-center items-center w-[93px] h-[93px] border-[8px] border-[#FEF3F2] bg-[#FDE1E1] rounded-[8px]">
        <img
          src="/icons/Icon-WarningCircleRed.svg"
          alt="Warning"
          className="w-[56px] h-[56px]"
        />
      </div>

      {/* Title */}
      <h2 className="text-[27px] font-bold text-[#2D2727] text-center mt-[50px]">Delete Photo</h2>

      {/* Confirmation Text */}
      <p className="text-[16px] font-medium text-[#3B3939] text-center leading-[24px] mt-[15px]">
        Do you really want to delete the uploaded photo? <br /> This process cannot be undone.
      </p>

      {/* Buttons */}
      <div className="flex gap-[8px] mt-[39px]">
        <DangerButtonLined size="medium" onClick={() => onClose()}> 
            Cancel
        </DangerButtonLined>

        <PrimaryButton size="medium">Delete</PrimaryButton>
      </div>
    </div>
  );
};

export default DeletePhoto;
