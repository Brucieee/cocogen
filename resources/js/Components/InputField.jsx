import React, { useState } from "react";

export default function InputField({ label, required, placeholder }) {
    const [inputValue, setInputValue] = useState("");
    const isCocogen = inputValue === "cocogen";
    const hasInput = inputValue.trim() !== "";
    const isInvalid = hasInput && !isCocogen;

    return (
        <div className={`w-[214px] group relative flex flex-col transition-all duration-300`}>
            <label className={`text-[10px] font-normal transition-all duration-300 mb-1 ml-2.5 text-teal-12 group-hover:text-surfaces-5`}> 
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={`h-[44px] w-[214px] border-0 border-b-2 bg-transparent flex items-center pb-[10px] gap-2.5 p-[10px] text-[14px] font-normal outline-none transition-all duration-300 focus:ring-0 focus:outline-none
                    ${isInvalid ? 'border-red-600 text-red-600 bg-status-highlight-red hover:bg-status-light-red' : 'border-surface-5 text-gray-500 group-hover:bg-teal-1 group-hover:border-teal-9 group-hover:placeholder-black'}`}
            />
        </div>
    );
}   
