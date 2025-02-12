import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import PrimaryDropdownButton from "@/Components/PrimaryDropdownButton";

export default function Buttons() {
    const [activeButton, setActiveButton] = useState(null); // Tracks active button (primary/secondary)
    const [activeDropdown, setActiveDropdown] = useState(null); // Tracks active dropdown
    const [enableDisabledButtons, setEnableDisabledButtons] = useState(false); // Toggles disabled buttons
    const [selectedOptions, setSelectedOptions] = useState({}); // Tracks selected dropdown options

    // Handles button clicks (primary/secondary)
    const handleButtonClick = (event, buttonId, type) => {
        event.stopPropagation();

        if (type === "dropdown") {
            // Toggle dropdown state
            setActiveDropdown((prev) => (prev === `dropdown-${buttonId}` ? null : `dropdown-${buttonId}`));
            setActiveButton(null); // Ensure no button is active when dropdown is clicked
        } else {
            // Set active button and close any open dropdown
            setActiveDropdown(null);
            setActiveButton((prev) => (prev === `${type}-${buttonId}` ? null : `${type}-${buttonId}`));
        }
    };

    // Handles right-click on buttons
    const handleRightClick = (event, buttonId, type) => {
        event.preventDefault();
        event.stopPropagation();
        setActiveButton(`${type}-${buttonId}`);
    };

    // Handles dropdown item selection
    const handleDropdownItemClick = (size, label) => {
        setSelectedOptions((prev) => ({ ...prev, [size]: label })); // Update selected option
        setActiveDropdown(null); // Close dropdown
    };

    // Handles clicks outside buttons/dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".custom-button")) {
                setActiveButton(null); // Reset active button
                setActiveDropdown(null); // Close dropdown
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
                    {/* Toggle for disabled buttons */}
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

                    {/* Primary Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black">Primary Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                        {/* Enabled Primary Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <PrimaryButton
                                    key={index}
                                    size={size}
                                    isActive={activeButton === `primary-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "primary")}
                                    onRightClick={(event) => handleRightClick(event, size, "primary")}
                                    disabled={false}
                                >
                                    Button
                                </PrimaryButton>
                            ))}
                        </div>

                        {/* Disabled Primary Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <PrimaryButton
                                    key={index}
                                    size={size}
                                    isActive={activeButton === `primary-disabled-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "primary-disabled")}
                                    onRightClick={(event) => handleRightClick(event, size, "primary-disabled")}
                                    disabled={!enableDisabledButtons}
                                >
                                    Button
                                </PrimaryButton>
                            ))}
                        </div>
                    </div>

                    {/* Dropdown Primary Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Primary Dropdown Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-1 gap-4 mt-6 text-left">
                        {["huge", "medium", "small", "tiny"].map((size, index) => (
                            <PrimaryDropdownButton
                                key={index}
                                size={size}
                                isOpen={activeDropdown === `dropdown-${size}`}
                                onClick={(event) => handleButtonClick(event, size, "dropdown")}
                                options={[
                                    { label: "Option 1", onClick: () => handleDropdownItemClick(size, "Option 1") },
                                    { label: "Option 2", onClick: () => handleDropdownItemClick(size, "Option 2") },
                                    { label: "Option 3", onClick: () => handleDropdownItemClick(size, "Option 3") },
                                ]}
                                disabled={false}
                            >
                                {selectedOptions[size] || "Button"} {/* Update the button label */}
                            </PrimaryDropdownButton>
                        ))}
                    </div>

                    {/* Secondary Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Secondary Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                        {/* Enabled Secondary Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <SecondaryButton
                                    key={index}
                                    text="Button"
                                    size={size}
                                    isActive={activeButton === `secondary-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "secondary")}
                                    onRightClick={(event) => handleRightClick(event, size, "secondary")}
                                    disabled={false}
                                />
                            ))}
                        </div>

                        {/* Disabled Secondary Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <SecondaryButton
                                    key={index}
                                    text="Button"
                                    size={size}
                                    isActive={activeButton === `secondary-disabled-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "secondary-disabled")}
                                    onRightClick={(event) => handleRightClick(event, size, "secondary-disabled")}
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