import React, { useState, useEffect, useRef } from "react";

export default function PrimaryDropdownButton({
    size = "medium",
    disabled = false,
    options = [],
    defaultLabel = "Button",
    activeButton,
    onClick,
}) {
    const sizes = {
        huge: { width: "144px", height: "48px", textSize: "20px" },
        medium: { width: "116px", height: "44px", textSize: "15px" },
        small: { width: "101px", height: "40px", textSize: "10px" },
        tiny: { width: "91px", height: "32px", textSize: "9px" },
    };

    const { width, height, textSize } = sizes[size];
    const iconSize = `${parseInt(textSize, 10)}px`;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(defaultLabel);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handles dropdown item selection
    const handleDropdownItemClick = (label) => {
        setSelectedLabel(label);
        setIsOpen(false);
    };

    const handleClick = (e) => {
        if (disabled || activeButton) return; // Prevent click if button is disabled or already active
        if (onClick) { // Check if onClick is provided
            onClick(e); // Trigger the click event handler passed from the parent
        }
        setIsOpen(!isOpen); // Toggle dropdown visibility
    };
    

    return (
        <div className="relative inline-block w-full" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                className={`inline-flex items-center justify-between w-full rounded-[3px] px-3 transition-all duration-300 ${
                    disabled ? "bg-[#C0E6E6] text-[#FFFFFF  ] cursor-not-allowed opacity-50" : "bg-[#008080] text-white"
                }`}
                style={{
                    width: width,
                    height: height,
                    fontSize: textSize,
                    outline: "none",
                }}
                onClick={handleClick}
                disabled={disabled || activeButton} // Disable button if already clicked or disabled
            >
                {selectedLabel}
                <img
                    src={`/icons/Icon-ArrowDown.svg`}
                    alt="Dropdown Arrow"
                    className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    style={{ width: iconSize, height: iconSize }}
                />
            </button>

            {/* Dropdown Content */}
            {isOpen && (
                <div
                    className="absolute left-0 mt-2 w-full bg-white rounded shadow-lg transition-all duration-300 overflow-hidden z-50"
                    style={{ transformOrigin: "top", zIndex: 50 }}
                >
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="w-full px-3 py-2 text-left text-gray-800 transition hover:bg-gray-200"
                            onClick={() => handleDropdownItemClick(option.label)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
