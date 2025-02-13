import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InputDate({ label, required }) {
    const [dateValue, setDateValue] = useState(null);
    const [isInvalid, setIsInvalid] = useState(false);

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const handleChange = (date) => {
        if (date && !isNaN(date.getTime())) {
            setDateValue(date);
            setIsInvalid(date > today);
        } else {
            setIsInvalid(true);
        }
    };

    const handleKeyDown = (e) => {
        // Allow numbers, slashes, dashes, backspace, delete, and enter
        if (!/[0-9/\-]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Enter") {
            e.preventDefault();
        }

        if (e.key === "Enter") {
            const parsedDate = new Date(e.target.value);
            parsedDate.setHours(0, 0, 0, 0);
            if (!isNaN(parsedDate.getTime())) {
                setDateValue(parsedDate);
                setIsInvalid(parsedDate > today);
            } else {
                setIsInvalid(true);
            }
        }
    };

    // Determine the correct icon
    const getIcon = () => {
        if (!dateValue) return "../icons/Icon-CalendarBlank.svg";
        return isInvalid ? "../icons/Icon-CalendarX.svg" : "../icons/Icon-CalendarCheck.svg";
    };

    return (
        <div className="w-[214px] group relative flex flex-col transition-all duration-300">
            {/* Label */}
            <label className={`text-[10px] font-normal transition-all duration-300 mb-1 ml-2.5 
                ${isInvalid ? "text-red-500" : "text-teal-12"} group-hover:text-surfaces-5`}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {/* Input Container */}
            <div className="relative">
                <DatePicker
                    selected={dateValue}
                    onChange={handleChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="MM/DD/YYYY"
                    onKeyDown={handleKeyDown}
                    className={`h-[44px] w-[214px] border-0 border-b-2 bg-transparent flex items-center pb-[10px] p-[10px] pr-10 text-[14px] font-normal outline-none transition-all duration-300 focus:ring-0 focus:outline-none cursor-pointer
                        ${isInvalid 
                            ? "border-red-500 text-red-500 bg-red-100 placeholder-red-500" 
                            : "border-surface-5 text-gray-500 group-hover:bg-teal-1 group-hover:border-teal-9"
                        }`}
                />

                {/* Calendar Icon */}
                <img 
                    src={getIcon()} 
                    alt="Calendar Icon" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
            </div>

            {/* Error Message with Info Icon */}
            {isInvalid && (
                <div className="flex items-center text-red-500 text-xs mt-1 bg-surfaces-1 p-1 rounded">
                    <img src="../icons/InfoIcon.svg" alt="Info" className="w-4 h-4 mr-1" />
                    <span>Date cannot be in the future</span>
                </div>
            )}
        </div>
    );
}
