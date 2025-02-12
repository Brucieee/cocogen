import React, { useState, useEffect } from "react";

export default function PrimaryButton({ text, size, isActive, onClick, onRightClick, disabled }) {
    const sizes = {
        huge: { width: "114px", height: "48px", textSize: "23px", expandedWidth: "160px" },
        medium: { width: "91px", height: "44px", textSize: "16px", expandedWidth: "131px" },
        small: { width: "79px", height: "40px", textSize: "12px", expandedWidth: "105px" },
        tiny: { width: "72px", height: "32px", textSize: "10px", expandedWidth: "85px" },
    };

    const { width, height, textSize, expandedWidth } = sizes[size];
    const [isExpanded, setIsExpanded] = useState(isActive);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsExpanded(isActive);
        if (!isActive) {
            setIsClicked(false);
        }
    }, [isActive]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".primary-button")) {
                setIsExpanded(false);
                setIsClicked(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const baseStyles = `inline-flex items-center justify-center border-[3px] border-solid rounded-[3px] leading-[28px] relative group transition-all duration-300 primary-button focus:outline-none`;

    return (
        <button
            className={`${baseStyles} ${disabled ? "cursor-not-allowed" : ""}`}
            style={{
                color: "white",
                width: isExpanded && !disabled ? expandedWidth : width,
                height: height,
                fontSize: textSize,
                backgroundColor: disabled ? "#C0E6E6" : isClicked ? "#60B3B3" : "#008080",
                borderColor: disabled ? "#C0E6E6" : isClicked ? "#60B3B3" : "#008080",
                paddingLeft: isExpanded && !disabled ? "25px" : "12px",
                paddingRight: isExpanded && !disabled ? "10px" : "12px",
                transition: "all 0.3s ease-in-out",
                outline: "none",
                boxShadow: "none",
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
                    setIsExpanded(false);
                }
            }}
        >
            {!disabled && (
                <img
                    src="/icons/Icon-ArrowRight.svg"
                    alt="Arrow"
                    className={`absolute left-3 transition-opacity duration-300 ${
                        isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ width: "16px", height: "16px" }}
                />
            )}
            {text}
        </button>
    );
}
