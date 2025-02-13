import React, { useState } from "react";

export default function Pill({ options = ["Selection A", "Selection B"], onSelect }) {
    const [selected, setSelected] = useState(null);

    const handleSelect = (index) => {
        setSelected(index);
        onSelect && onSelect(index);
    };

    return (
        <div className="flex">
            {options.map((option, index) => (
                <button
                    key={index}
                    className={`relative flex items-center rounded-[25px] border border-[#E4509A] transition-all duration-300 overflow-hidden ${
                        selected === index
                            ? "bg-[#E4509A] text-white"
                            : "text-[#E4509A] bg-transparent hover:bg-[#E4509A] hover:text-white"
                    }`}
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        minWidth: "fit-content",
                        paddingLeft: "25px",
                        paddingRight: selected === index ? "25px" : "25px", // Enlarge on the right side
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        boxShadow: "none",
                        transition: "padding-right 0.3s ease", // Smooth transition for padding only
                        marginRight: index === 0 ? "11px" : "0", // Margin right for the first pill
                        marginLeft: index === 1 ? "11px" : "0",
                    }}
                    onClick={() => handleSelect(index)}
                    onMouseEnter={(e) => {
                        if (selected !== index) {
                            e.currentTarget.style.boxShadow = "1px 3px 4px 0px rgba(203, 161, 182, 0.86)";
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    <div className="flex items-center" style={{ gap: "10px" }}>
                        {selected === index && (
                            <img
                                src="/icons/Icon-CheckCircle.svg"
                                alt="Check"
                                className="w-[24px] h-[24px]"
                                style={{ marginLeft: "0px" }}
                            />
                        )}
                        <span>{option}</span>
                    </div>
                </button>
            ))}
        </div>
    );
}