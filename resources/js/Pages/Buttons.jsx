import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";

export default function Buttons() {
    const [activeButton, setActiveButton] = useState(null);
    const [enableDisabledButtons, setEnableDisabledButtons] = useState(false);

    const handleButtonClick = (event, buttonId, type) => {
        event.stopPropagation();
        setActiveButton(`${type}-${buttonId}`);
    };

    const handleRightClick = (event, buttonId, type) => {
        event.preventDefault();
        event.stopPropagation();
        setActiveButton(`${type}-${buttonId}`);
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
                    <div className="mb-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={enableDisabledButtons}
                                onChange={() => setEnableDisabledButtons(!enableDisabledButtons)}
                                className="w-4 h-4 cursor-pointer"
                            />
                            <span>Enable Disabled Buttons</span>
                        </label>
                    </div>

                    <h3 className="text-[25px] font-jost font-medium text-black">Primary Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                        <div className="flex flex-col items-left gap-4">
                            {[
                                "huge",
                                "medium",
                                "small",
                                "tiny"
                            ].map((size, index) => (
                                <PrimaryButton
                                    key={index}
                                    text="Button"
                                    size={size}
                                    isActive={activeButton === `default-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "default")}
                                    onRightClick={(event) => handleRightClick(event, size, "default")}
                                    disabled={false}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-left gap-4">
                            {[
                                "huge",
                                "medium",
                                "small",
                                "tiny"
                            ].map((size, index) => (
                                <PrimaryButton
                                    key={index}
                                    text="Button"
                                    size={size}
                                    isActive={activeButton === `disabled-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "disabled")}
                                    onRightClick={(event) => handleRightClick(event, size, "disabled")}
                                    disabled={!enableDisabledButtons}
                                />
                            ))}
                        </div>
                    </div>

                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Secondary Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                        <div className="flex flex-col items-left gap-4">
                            {[
                                "huge",
                                "medium",
                                "small",
                                "tiny"
                            ].map((size, index) => (
                                <SecondaryButton
                                    key={index}
                                    text="Button"
                                    size={size}
                                    isActive={activeButton === `default-secondary-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "default-secondary")}
                                    onRightClick={(event) => handleRightClick(event, size, "default-secondary")}
                                    disabled={false}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-left gap-4">
                            {[
                                "huge",
                                "medium",
                                "small",
                                "tiny"
                            ].map((size, index) => (
                                <SecondaryButton
                                    key={index}
                                    text="Button"
                                    size={size}
                                    isActive={activeButton === `disabled-secondary-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "disabled-secondary")}
                                    onRightClick={(event) => handleRightClick(event, size, "disabled-secondary")}
                                    disabled={!enableDisabledButtons}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
