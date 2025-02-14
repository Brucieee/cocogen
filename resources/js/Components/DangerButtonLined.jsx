import React, { useState, useEffect } from "react";

export default function DangerButtonLined({ 
    children, 
    size = "medium", 
    isActive, 
    onClick, 
    onRightClick 
}) {
    const sizes = {
        huge: { width: "114px", height: "48px", textSize: "23px", expandedWidth: "160px", iconSize: "20px" },
        medium: { width: "91px", height: "44px", textSize: "16px", expandedWidth: "131px", iconSize: "16px" },
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
            if (!event.target.closest(".danger-button-lined")) {
                setIsExpanded(false);
                setIsClicked(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const handleMouseDown = () => {
        setIsExpanded(true);
        setIsClicked(true);
    };

    const handleMouseUp = () => {
        setIsExpanded(true); // Keep expanded after release
    };

    const baseStyles = `inline-flex items-center justify-center border-[1px] border-solid rounded-[3px] leading-[28px] relative group transition-all duration-300 danger-button-lined focus:outline-none`;

    return (
        <button
            className={baseStyles}
            style={{
                color: "#DD0707",
                width: isExpanded ? expandedWidth : width,
                height: height,
                fontSize: textSize,
                backgroundColor: isClicked ? "#FFE2E2" : "transparent",
                borderColor: isClicked ? "#FFE2E2" : "#DD0707",
                paddingLeft: isExpanded ? "25px" : "12px",
                paddingRight: isExpanded ? "10px" : "12px",
                transition: "all 0.3s ease-in-out",
                outline: "none",
                boxShadow: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={(event) => {
                event.stopPropagation();
                setIsExpanded(true);
                setIsClicked(true);
                onClick && onClick(event);
            }}
            onContextMenu={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIsExpanded(true);
                setIsClicked(true);
                onRightClick && onRightClick(event);
            }}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => !isClicked && setIsExpanded(false)}
        >
            <img
                src="/icons/Icon-ArrowRight.svg"
                alt="Arrow"
                className={`absolute left-3 transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
                style={{ 
                    filter: "invert(11%) sepia(100%) saturate(7500%) hue-rotate(355deg) brightness(100%) contrast(110%)", 
                    width: iconSize, 
                    height: iconSize 
                }}
            />
            {children}
        </button>
    );
}
