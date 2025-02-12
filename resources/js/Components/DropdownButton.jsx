import React, { useState } from "react";

export default function DropdownButton({ text, size, variant, options }) {
    const [isOpen, setIsOpen] = useState(false);

    const sizes = {
        huge: { width: "144px", height: "48px", textSize: "23px" },
        medium: { width: "116px", height: "44px", textSize: "16px" },
        small: { width: "101px", height: "40px", textSize: "12px" },
        tiny: { width: "91px", height: "32px", textSize: "10px" },
    };

    const { width, height, textSize } = sizes[size];

    const isDisabled = variant === "disabled";

    return (
        <div className="relative inline-block text-left">
            {/* BUTTON */}
            <button
                className={`flex items-center justify-between border-[3px] border-solid rounded-[3px] transition-all duration-300 ${
                    isDisabled ? "bg-gray-300 border-gray-300 text-white cursor-not-allowed" : "text-white"
                }`}
                style={{
                    width,
                    height,
                    fontSize: textSize,
                    backgroundColor: isDisabled ? "#C0E6E6" : isOpen ? "#60B3B3" : "#008080",
                    borderColor: isDisabled ? "#C0E6E6" : isOpen ? "#60B3B3" : "#008080",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                }}
                onClick={() => !isDisabled && setIsOpen(!isOpen)}
                disabled={isDisabled}
            >
                {text}
                <img
                    src={isOpen ? "/icons/Icon-ArrowUp.svg" : "/icons/Icon-ArrowDown.svg"}
                    alt="Arrow Icon"
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${isDisabled ? "opacity-50" : ""}`}
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </button>

            {/* DROPDOWN MENU (Only Appears If Not Disabled) */}
            {!isDisabled && (
                <div
                    className={`absolute left-0 z-10 w-3/4 mt-2 bg-white border border-gray-300 rounded shadow-md transition-all duration-300 transform ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                alert(`Clicked: ${option}`);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
