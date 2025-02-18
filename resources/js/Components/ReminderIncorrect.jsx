import React from "react";

const ReminderIncorrect = () => {
    return (
        <div className="flex p-[10px_20px] items-start gap-[20px] w-[705px] h-[68px] bg-[#F2F2F2]">
            {/* Warning Icon with Background */}
            <div className="flex w-[26px] h-[26px] p-[3px] justify-center items-center rounded-[16px] bg-[#DD0707]">
                <img
                    src="/icons/Icon-WarningCircle.svg"
                    alt="Warning"
                    className="w-[20px] h-[20px]"
                />
            </div>

            {/* Right Content */}
            <div className="text-[16px] leading-[24px] font-normal text-[#303030]">
                Invalid promo code. Kindly check if entered promo code is
                incorrect or it has been used.
            </div>
        </div>
    );
};

export default ReminderIncorrect;
