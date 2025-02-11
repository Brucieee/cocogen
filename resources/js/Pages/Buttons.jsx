import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from "react";

export default function Buttons() {
    const [activeButton, setActiveButton] = useState(null);

    const handleMouseDown = (event, buttonId) => {
        event.stopPropagation();
        setActiveButton(buttonId);
    };

    const handleRightClick = (event, buttonId) => {
        event.preventDefault();
        event.stopPropagation();
        setActiveButton(buttonId);
    };

    // Reset button color when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setActiveButton(null);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Buttons</h2>}
        >
            <Head title="Buttons" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-[35px] font-jost text-black text-left">Primary Button</h2>

                    <div className="grid grid-cols-3 gap-4 mt-6 text-left">
                        {["Default", "Tapped", "Disabled"].map((title, index) => (
                            <div key={index} className="relative">
                                <h3 className="text-[25px] font-jost font-medium text-black">{title}</h3>
                                <div className="mt-2 w-full h-[3px] bg-black"></div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                        <div className="flex flex-col items-left gap-4">
                            <button 
                                className="inline-flex items-center justify-center w-[114px] h-[48px] px-[20px] py-[10px] border-[3px] border-solid rounded-[3px] text-white text-[23px] leading-[28px] relative group transition-all duration-300 hover:w-[145px] hover:pl-[30px] hover:pr-[10px]"
                                style={{
                                    backgroundColor: activeButton === "button1" ? "#60B3B3" : "#008080",
                                    borderColor: activeButton === "button1" ? "#60B3B3" : "#008080"
                                }}
                                onMouseDown={(event) => handleMouseDown(event, "button1")}
                                onContextMenu={(event) => handleRightClick(event, "button1")}
                            >
                                <span className="absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">➔</span>
                                Button
                            </button>

                            <button 
                                className="inline-flex items-center justify-center w-[114px] h-[48px] px-[20px] py-[10px] border-[3px] border-solid rounded-[3px] text-white text-[23px] leading-[28px] relative group transition-all duration-0 hover:w-[145px] hover:pl-[30px] hover:pr-[10px]"
                                style={{
                                    backgroundColor: activeButton === "button2" ? "#60B3B3" : "#008080",
                                    borderColor: activeButton === "button2" ? "#60B3B3" : "#008080"
                                }}
                                onMouseDown={(event) => handleMouseDown(event, "button2")}
                                onContextMenu={(event) => handleRightClick(event, "button2")}
                            >
                                <span className="absolute left-3 opacity-0 group-hover:opacity-100">➔</span>
                                Button
                            </button>
                        </div>

                        {/* Tapped Column */}
                        <div className="flex flex-col items-center gap-4">
                            <button className="btn font-inter text-lg bg-blue-700 hover:bg-blue-800 px-[20px] py-[10px] rounded-[3px]">
                                Button
                            </button>
                        </div>

                        {/* Disabled Column */}
                        <div className="flex flex-col items-center gap-4">
                            <button className="btn font-inter text-lg bg-gray-400 text-gray-700 cursor-not-allowed px-[20px] py-[10px] rounded-[3px]" disabled>
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
