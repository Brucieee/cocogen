import React, { useState, useEffect } from "react";

export default function PrimaryButton({
    children,
    size = "medium",
    isActive,
    onClick,
    onRightClick,
    disabled,
    onToggle,
}) {
    const sizes = {
        huge: { width: "114px", height: "48px", textSize: "23px", expandedWidth: "160px", iconSize: "20px" },
        medium: { width: "91px", height: "44px", textSize: "16px", expandedWidth: "131px", iconSize: "16px" },
        small: { width: "79px", height: "40px", textSize: "12px", expandedWidth: "105px", iconSize: "14px" },
        tiny: { width: "72px", height: "32px", textSize: "10px", expandedWidth: "85px", iconSize: "12px" },
    };

    const { width, height, textSize, expandedWidth, iconSize } = sizes[size];
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setIsExpanded(isActive && !disabled); // Sync expansion state with active state and disabled state
    }, [isActive, disabled]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".primary-button")) {
                setIsExpanded(false); // Collapse when clicking outside
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const baseStyles = `inline-flex items-center justify-center border-[3px] border-solid rounded-[3px] leading-[28px] relative group transition-all duration-300 primary-button focus:outline-none`;

    const handleButtonClick = (event) => {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        event.stopPropagation();
        setIsExpanded(true); // Expand the button on click
        onClick && onClick(event);
        onToggle && onToggle(); // Trigger parent's toggle function
    };

    const handleButtonRightClick = (event) => {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        setIsExpanded(true);
        onRightClick && onRightClick(event);
        onToggle && onToggle();
    };

    return (
        <button
            className={`${baseStyles} ${disabled ? "cursor-not-allowed" : ""}`}
            style={{
                color: "#FFFFFF",
                width: isExpanded && !disabled ? expandedWidth : width,
                height: height,
                fontSize: textSize,
                backgroundColor: disabled ? "#C0E6E6" : isActive ? "#60B3B3" : "#008080", // Active or default color
                borderColor: disabled ? "#C0E6E6" : isActive ? "#60B3B3" : "#008080", // Active or default border color
                paddingLeft: isExpanded && !disabled ? "25px" : "12px",
                paddingRight: isExpanded && !disabled ? "10px" : "12px",
                transition: "all 0.3s ease-in-out",
                outline: "none",
                boxShadow: "none",
            }}
            onClick={handleButtonClick}
            onContextMenu={handleButtonRightClick}
            onMouseEnter={() => {
                if (!disabled) {
                    setIsExpanded(true); // Expand on hover if not disabled
                }
            }}
            onMouseLeave={() => {
                if (!disabled && !isActive) {
                    setIsExpanded(false); // Collapse if not active
                }
            }}
            disabled={disabled}
        >
            {!disabled && (
                <img
                    src="/icons/Icon-ArrowRight.svg"
                    alt="Arrow"
                    className={`absolute left-3 transition-opacity duration-300 ${
                        isExpanded ? "opacity-100" : "opacity-0"
                    }`}
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