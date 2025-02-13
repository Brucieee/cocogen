import React from "react";

export default function InputFieldDisabled({ label, required, placeholder, hasIcon = false }) {

    return (
        <div className="w-[214px] group relative flex flex-col transition-all duration-300 opacity-50 ">
            <label className="text-[10px] font-normal transition-all duration-300 mb-1 ml-2.5 text-gray-600"> 
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder={placeholder}
                    disabled
                    className="h-[44px] w-[214px] border-0 border-b-2 bg-transparent flex items-center pb-[10px] pl-3 gap-2.5 text-[14px] font-normal outline-none transition-all duration-300 border-gray-400 text-gray-500 cursor-not-allowed hover:bg-disabledbg hover:border-b-primary hover:placeholder-black"
                />
                {hasIcon && (
                    <img 
                        src={"/icons/InfoIcon.svg"} 
                        alt="Icon" 
                        className="absolute right-2 h-5 w-5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:bg-backgroundhover cursor-not-allowed"
                    />
                )}
            </div>
        </div>
    );
}