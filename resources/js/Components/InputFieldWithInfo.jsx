import React, { useState } from "react";


export default function InputField({ label, required, placeholder, hasIcon = false, iconType = "correct" }) {
    const [inputValue, setInputValue] = useState("");
    const isCocogen = inputValue === "cocogen";
    const hasInput = inputValue.trim() !== "";
    const isInvalid = hasInput && !isCocogen;

    return (
        <div className={`w-[214px] group relative flex flex-col transition-all duration-300 ${isInvalid ? 'group-hover:bg-incorrectbghover' : ''}`}>
            <label className={`text-[10px] font-normal transition-all duration-300 mb-1 ml-2.5 ${isInvalid ? 'text-gray-600' : 'group-hover:text-labelhover text-teal-900'}`}> 
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={`h-[44px] w-[214px] ml-1 border-0 border-b-2 bg-transparent flex items-center pb-[10px] gap-2.5 pl-[0px] text-[14px] font-normal outline-none transition-all duration-300
                        ${isInvalid ? 'border-red-600 text-red-600 bg-red-100 group-hover:bg-incorrectbghover' : 'border-secondary text-gray-500 group-hover:bg-backgroundhover group-hover:border-borderhover'}`}
                />
                {hasIcon && (
                    <img src={'/icons/InfoIcon.svg'} alt="Icon" className="absolute right-2 h-5 w-5" />
                )}
            </div>
        </div>
    );
}