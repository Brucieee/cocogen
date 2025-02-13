import React, { useState, useEffect, useRef } from "react";

export default function PrimaryDropdownButton({
    children,
    size = "medium",
    disabled = false,
    options = [],
    isOpen, // 👈 Accept `isOpen` from parent
    onClick, // 👈 Accept `onClick` from parent
}) {
    const sizes = {
        huge: { width: "144px", height: "48px", textSize: "23px", iconSize: "20px" },
        medium: { width: "116px", height: "44px", textSize: "16px", iconSize: "16px" },
        small: { width: "101px", height: "40px", textSize: "12px", iconSize: "14px" },
        tiny: { width: "91px", height: "32px", textSize: "10px", iconSize: "12px" },
    };

    const { width, height, textSize, iconSize } = sizes[size];
    const [isActive, setIsActive] = useState(isOpen); // Track active state for styling
    const dropdownRef = useRef(null);

    // Sync `isActive` with `isOpen`
    useEffect(() => {
        setIsActive(isOpen);
    }, [isOpen]);

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClick(); // Notify parent to close the dropdown
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClick]);

    const defaultOptions = [
        { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
        { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
        { label: "Option 3", onClick: () => console.log("Option 3 clicked") },
    ];

    const dropdownOptions = options.length ? options : defaultOptions;

    return (
        <div className="relative inline-block dropdown-container" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                className={`inline-flex items-center justify-between rounded-[3px] px-3 transition-all duration-300 ${
                    disabled
                        ? "cursor-not-allowed bg-[#C0E6E6]"
                        : isActive
                        ? "bg-[#C0E6E6]" // Active state
                        : "bg-teal-700 hover:bg-[#60B3B3]" // Default and hover state
                }`}
                style={{
                    color: "white",
                    width: width,
                    height: height,
                    fontSize: textSize,
                    outline: "none",
                    boxShadow: "none",
                }}
                onClick={onClick} // 👈 Use the parent state management
                disabled={disabled}
            >
                {children}
                <img
                    src={`/icons/Icon-ArrowDown.svg`}
                    alt="Dropdown Arrow"
                    className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    style={{
                        width: iconSize,
                        height: iconSize,
                    }}
                />
            </button>

            {/* Dropdown Content */}
            <div
                className={`absolute left-0 mt-2 min-w-[50%] bg-white rounded shadow-lg transition-all duration-300 overflow-hidden z-50 ${
                    isOpen ? "opacity-100 scale-100 max-h-60" : "opacity-0 scale-95 max-h-0 pointer-events-none"
                }`}
                style={{
                    transformOrigin: "top",
                    zIndex: 50,
                }}
            >
                {dropdownOptions.map((option, index) => (
                    <button
                        key={index}
                        className="w-full px-3 py-2 text-left text-gray-800 hover:bg-gray-200 transition"
                        onClick={() => {
                            option.onClick();
                            onClick(); // Close dropdown after selection
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}