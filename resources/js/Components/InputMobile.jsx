// InputField.js (Move this file to the components folder)
import React, { useState } from "react";

export default function InputFieldIcon({ label, required, placeholder }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 11); // Remove non-numeric characters, limit to 11 digits
        
        // Auto-format with dashes
        if (value.length > 3 && value.length <= 7) {
            value = `${value.slice(0, 4)}-${value.slice(4)}`;
        } else if (value.length > 7) {
            value = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(8)}`;
        }
        
        setInputValue(value);
    };

    return (
        <div className="w-[214px] group relative flex flex-col transition-all duration-300">
            <label className="text-[10px] font-normal transition-all duration-300 mb-1 ml-2.5 text-teal-900 group-hover:text-surfaces-5"> 
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="h-[44px] w-[214px] border-0 border-b-2 bg-transparent flex items-center pb-[10px] gap-2.5 p-[10px] text-[14px] font-normal transition-all duration-300 focus:ring-0 focus:outline-none border-secondary text-gray-500 group-hover:bg-teal-1 group-hover:border-teal-9 group-hover:placeholder-black"
                />
            </div>
        </div>
    );
}