import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Button from "../Components/Button"; 
import DropdownButton from "@/Components/DropdownButton";

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
                    {/* Checkbox to Enable Disabled Buttons */}
                    <div className="mb-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={enableDisabledButtons}
                                onChange={() => setEnableDisabledButtons(!enableDisabledButtons)}
                                className="w-4 h-4"
                            />
                            <span>Enable Disabled Buttons</span>
                        </label>
                    </div>

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
                                    isActive={activeButton === `default-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "default")}
                                    onRightClick={(event) => handleRightClick(event, size, "default")}
                                    disabled={false} // Always enabled
                                />
                            ))}

                            {/* Regular Dropdown Buttons */}
                            <DropdownButton text="Button" size="huge" variant="primary" options={["Option 1", "Option 2"]} />
                            <DropdownButton text="Button" size="medium" variant="primary" options={["Option A", "Option B"]} />
                            <DropdownButton text="Button" size="small" variant="primary" options={["Item 1", "Item 2"]} />
                            <DropdownButton text="Button" size="tiny" variant="primary" options={["Choice X", "Choice Y", "Choice Z"]} />
                        </div>

                        <div className="flex flex-col items-left gap-4">
                            {/* Disabled Buttons */}
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <Button
                                    key={index}
                                    text="Button"
                                    size={size}
                                    variant={enableDisabledButtons ? "primary" : "disabled"}
                                    isActive={activeButton === `disabled-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "disabled")}
                                    onRightClick={(event) => handleRightClick(event, size, "disabled")}
                                    disabled={!enableDisabledButtons}
                                />
                            ))}

                            {/* Disabled Dropdown Buttons */}
                            <DropdownButton text="Button" size="huge" variant={enableDisabledButtons ? "primary" : "disabled"} options={enableDisabledButtons ? ["Option 1", "Option 2"] : []} />
                            <DropdownButton text="Button" size="medium" variant={enableDisabledButtons ? "primary" : "disabled"} options={enableDisabledButtons ? ["Option A", "Option B"] : []} />
                            <DropdownButton text="Button" size="small" variant={enableDisabledButtons ? "primary" : "disabled"} options={enableDisabledButtons ? ["Item 1", "Item 2"] : []} />
                            <DropdownButton text="Button" size="tiny" variant={enableDisabledButtons ? "primary" : "disabled"} options={enableDisabledButtons ? ["Choice X", "Choice Y", "Choice Z"] : []} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
