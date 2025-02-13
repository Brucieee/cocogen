import React, { useState, useEffect, useRef } from "react";

export default function SecondaryButton({ children, size, isActive, onClick, onRightClick, disabled, }) {
    const sizes = {
        huge: { width: "114px", height: "48px", textSize: "23px", expandedWidth: "160px", iconSize: "20px" },
        medium: { width: "91px", height: "44px", textSize: "16px", expandedWidth: "131px", iconSize: "16px" },
        small: { width: "79px", height: "40px", textSize: "12px", expandedWidth: "105px", iconSize: "14px" },
        tiny: { width: "72px", height: "32px", textSize: "10px", expandedWidth: "85px", iconSize: "12px" },
    };

    const { width, height, textSize, expandedWidth, iconSize } = sizes[size];
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
            setIsExpanded(isActive);
            if (!isActive) {
                setIsClicked(false);
            }
        }, [isActive]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".danger-button")) {
                setIsExpanded(false);
                setIsClicked(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);
    
    return (
        <button
            className={`secondary-button inline-flex items-center justify-center rounded-[1px] leading-[28px] relative group transition-all duration-300
                ${disabled ? "cursor-not-allowed text-[#A8D9D9] bg-[#C0E6E6]" : ""}`}
            style={{
                width: isExpanded ? expandedWidth : width,
                height: height,
                fontSize: textSize,
                paddingLeft: isExpanded ? "25px" : "12px",
                paddingRight: isExpanded ? "10px" : "12px",
                transition: "all 0.3s ease-in-out",
                outline: "none",
                border: "none",
                boxShadow: "none",
                backgroundColor: disabled
                    ? "#C0E6E6" // Disabled state
                    : isActive
                    ? "#C0E6E6" // Active state, based on parent's state
                    : "white", // Default state
                color: disabled ? "#A8D9D9" : "#008080",
            }}
            onClick={(event) => {
                if (!disabled) {
                    event.stopPropagation();
                    setIsExpanded(true);
                    setIsClicked(true);
                    onClick && onClick(event);
                }
            }}
            onContextMenu={(event) => {
                if (!disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                    setIsExpanded(true);
                    setIsClicked(true);
                    onRightClick && onRightClick(event);
                }
            }}
            onMouseEnter={() => {
                if (!disabled) {
                    setIsExpanded(true);
                }
            }}
            onMouseLeave={() => {
                if (!disabled && !isActive) {
                    setIsExpanded(false); // Keep it expanded only if active
                }
            }}
            disabled={disabled}
        >
            {!disabled && (
                <img
                    src="/icons/Icon-ArrowRight.svg"
                    alt="Arrow"
                    className={`absolute left-3 transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
                    style={{
                        width: iconSize,
                        height: iconSize,
                        filter: "invert(30%) sepia(98%) saturate(791%) hue-rotate(130deg) brightness(90%) contrast(90%)",
                    }}
                />
            )}
            {children}
        </button>
    );
}