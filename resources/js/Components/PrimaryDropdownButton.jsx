import React, { useState } from "react";

export default function PrimaryDropdownButton({ text, size, disabled, options = [] }) {
    const sizes = {
        huge: { width: "144px", height: "48px", textSize: "23px", iconSize: "20px" },
        medium: { width: "116px", height: "44px", textSize: "16px", iconSize: "16px" },
        small: { width: "101px", height: "40px", textSize: "12px", iconSize: "14px" },
        tiny: { width: "91px", height: "32px", textSize: "10px", iconSize: "12px" },
    };

    const { width, height, textSize, iconSize } = sizes[size];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block">
            {/* Dropdown Button */}
            <button
                className={`inline-flex items-center justify-between rounded-[3px] px-3 transition-all duration-300 ${
                    disabled ? "cursor-not-allowed bg-[#C0E6E6]" : "bg-teal-700 hover:bg-[#60B3B3]"
                }`}
                style={{
                    color: "white",
                    width: width,
                    height: height,
                    fontSize: textSize,
                    outline: "none",
                    boxShadow: "none",
                }}
                onClick={(event) => {
                    if (!disabled) {
                        event.stopPropagation();
                        setIsOpen(!isOpen);
                    }
                }}
            >
                {text}
                <img
                    src={`/icons/${isOpen ? "Icon-ArrowUp.svg" : "Icon-ArrowDown.svg"}`}
                    alt="Dropdown Arrow"
                    className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    style={{
                        width: iconSize,
                        height: iconSize,
                        filter: "invert(100%)", // Makes the icon white
                    }}
                />
            </button>

            {/* Dropdown Content */}
            <div
                className={`absolute left-0 mt-2 w-full bg-white rounded shadow-lg transition-all duration-300 overflow-hidden ${
                    isOpen ? "opacity-100 scale-100 max-h-60" : "opacity-0 scale-95 max-h-0 pointer-events-none"
                }`}
                style={{
                    transformOrigin: "top", // Ensures the dropdown scales from the top
                }}
            >
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="w-full px-3 py-2 text-left text-gray-800 hover:bg-gray-200 transition"
                        onClick={() => {
                            setIsOpen(false);
                            option.onClick();
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}