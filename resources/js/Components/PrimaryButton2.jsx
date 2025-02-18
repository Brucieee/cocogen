import React, { useState, useEffect } from "react";

export default function PrimaryButton2({
    children,
    size = "medium",
    isActive,
    onClick,
    onRightClick,
    disabled,
}) {
    const sizes = {
        huge: { width: "114px", height: "48px", textSize: "23px", expandedWidth: "160px", iconSize: "23px" },
        medium: { width: "91px", height: "44px", textSize: "16px", expandedWidth: "131px", iconSize: "16px" },
        small: { width: "79px", height: "40px", textSize: "12px", expandedWidth: "105px", iconSize: "12px" },
        tiny: { width: "72px", height: "32px", textSize: "10px", expandedWidth: "85px", iconSize: "10px" },
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
            if (!event.target.closest(".primary-button-2")) {
                setIsExpanded(false);
                setIsClicked(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const baseStyles = `inline-flex items-center justify-center border-[1px] border-solid rounded-[3px] leading-[28px] relative group transition-all duration-300 primary-button-2 focus:outline-none`;

    return (
        <button
            className={`${baseStyles} ${disabled ? "cursor-not-allowed" : ""}`}
            style={{
                color: isClicked ? "#E4509A" : "#FFFFFF",
                width: isExpanded && !disabled ? expandedWidth : width,
                height: height,
                fontSize: textSize,
                fontWeight: 500,
                backgroundColor: isClicked
                    ? "#FFFFFF"
                    : disabled
                    ? "#F3CDE0"
                    : "#E4509A",
                borderColor: "#E4509A",
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
                    style={{
                        filter: isClicked
                            ? "invert(15%) sepia(100%) saturate(3000%) hue-rotate(315deg) brightness(90%) contrast(110%)"
                            : "invert(100%) brightness(100%) grayscale(100%)",
                        width: iconSize,
                        height: iconSize,
                    }}
                />
            )}
            {children}
        </button>
    );
}
