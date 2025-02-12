import React from "react";

export default function Button({ text, size, variant, isActive, onClick, onRightClick, disabled }) {
    const sizes = {
        huge: { width: "114px", height: "48px", textSize: "23px", expandedWidth: "160px" },
        medium: { width: "91px", height: "44px", textSize: "16px", expandedWidth: "131px" },
        small: { width: "79px", height: "40px", textSize: "12px", expandedWidth: "105px" },
        tiny: { width: "72px", height: "32px", textSize: "10px", expandedWidth: "85px" },
    };

    const { width, height, textSize, expandedWidth } = sizes[size];

    const baseStyles = `custom-button inline-flex items-center justify-center border-[3px] border-solid rounded-[3px] leading-[28px] relative group transition-all duration-300`;

    const defaultStyles = `text-white`;
    const disabledStyles = `text-white cursor-not-allowed`;

    return (
        <button
            className={`${baseStyles} ${variant === "disabled" ? disabledStyles : defaultStyles}`}
            style={{
                color: "white",  // Force white text for disabled buttons
                width: isActive && variant !== "disabled" ? expandedWidth : width,
                height: height,
                fontSize: textSize,
                backgroundColor: variant === "disabled" ? "#C0E6E6" : isActive ? "#60B3B3" : "#008080",
                borderColor: variant === "disabled" ? "#C0E6E6" : isActive ? "#60B3B3" : "#008080",
                paddingLeft: isActive && variant !== "disabled" ? "25px" : "12px",
                paddingRight: isActive && variant !== "disabled" ? "10px" : "12px",
                transition: "all 0.3s ease-in-out",
            }}
            
            onMouseDown={!disabled ? onClick : undefined}
            onContextMenu={!disabled ? onRightClick : undefined}
            disabled={disabled}
            onMouseEnter={(e) => {
                if (!disabled) {
                    e.currentTarget.style.width = expandedWidth;
                    e.currentTarget.style.paddingLeft = "25px";
                    e.currentTarget.style.paddingRight = "10px";
                }
            }}
            onMouseLeave={(e) => {
                if (!disabled && !isActive) {
                    e.currentTarget.style.width = width;
                    e.currentTarget.style.paddingLeft = "12px";
                    e.currentTarget.style.paddingRight = "12px";
                }
            }}
        >
            {/* Hide arrow on disabled buttons */}
            {variant !== "disabled" && (
                <span
                    className={`absolute left-3 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                >
                    ➔
                </span>
            )}
            {text}
        </button>
    );
}
