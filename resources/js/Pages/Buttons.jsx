import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Button from "../Components/Button"; 


export default function Buttons() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (event, buttonId) => {
        event.stopPropagation();
        setActiveButton(buttonId);
    };

    const handleRightClick = (event, buttonId) => {
        event.preventDefault();
        event.stopPropagation();
        setActiveButton(buttonId);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".custom-button")) {
                setActiveButton(null);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Buttons</h2>}>
            <Head title="Buttons" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                        {["Default", "Disabled"].map((title, index) => (
                            <div key={index} className="relative">
                                <h3 className="text-[25px] font-jost font-medium text-black">{title}</h3>
                                <div className="mt-2 w-full h-[3px] bg-black"></div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                        <div className="flex flex-col items-left gap-4">
                            {/* Primary Buttons */}
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <Button
                                    key={index}
                                    text="Button"
                                    size={size}
                                    variant="primary"
                                    isActive={activeButton === size}
                                    onClick={(event) => handleButtonClick(event, size)}
                                    onRightClick={(event) => handleRightClick(event, size)}
                                />
                            ))}
                        </div>

                        <div className="flex flex-col items-left gap-4">
                            {/* Disabled Buttons */}
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <Button key={index} text="Button" size={size} variant="disabled" disabled />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
