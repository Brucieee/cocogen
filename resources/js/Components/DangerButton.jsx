import React, { useState, useEffect } from "react";

export default function DangerButton({ children, size = "medium", isActive, onClick, onRightClick, disabled }) {
    const sizes = {
        huge: { width: "114px", height: "48px", textSize: "23px", expandedWidth: "160px", iconSize: "20px" },
        medium: { width: "91px", height: "44px", textSize: "16px", expandedWidth: "131px", iconSize: "16px"},
        small: { width: "79px", height: "40px", textSize: "12px", expandedWidth: "105px", iconSize: "14px" },
        tiny: { width: "72px", height: "32px", textSize: "10px", expandedWidth: "85px", iconSize: "12px" },
    };

    const { width, height, textSize, expandedWidth, iconSize } = sizes[size];
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
            if (!event.target.closest(".danger-button")) {
                setIsExpanded(false);
                setIsClicked(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const handleMouseDown = () => {
        if (!disabled) {
            setIsExpanded(true);
            setIsClicked(true);
        }
    };

    const handleMouseUp = () => {
        if (!disabled) {
            setIsExpanded(true); // Keep expanded after release
        }
    };

    return (
        <button
            className={`inline-flex items-center justify-center border-[1px] border-solid rounded-[3px] leading-[28px] relative group transition-all duration-300 danger-button focus:outline-none ${disabled ? "cursor-not-allowed" : ""}`}
            style={{
                color: disabled ? "#FFE2E2" : "#FFFFFF",
                width: isExpanded && !disabled ? expandedWidth : width,
                height: height,
                fontSize: textSize,
                backgroundColor: disabled ? "transparent" : isClicked ? "#FFAFAF" : "#FF0000",
                borderColor: disabled ? "#FFE2E2" : isClicked ? "#FFAFAF" : "#FF0000",
                paddingLeft: isExpanded && !disabled ? "25px" : "12px",
                paddingRight: isExpanded && !disabled ? "10px" : "12px",
                transition: "all 0.3s ease-in-out",
                outline: "none",
                boxShadow: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
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
                if (!disabled && !isClicked) {
                    setIsExpanded(false);
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
                        filter: "invert(100%) brightness(100%) grayscale(100%)",
                        width: iconSize,
                        height: iconSize,
                    }}
                />
            )}
            {children}
        </button>
    );
}
