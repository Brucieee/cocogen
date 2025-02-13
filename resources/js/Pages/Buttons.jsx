import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import PrimaryDropdownButton from "@/Components/PrimaryDropdownButton";
import DangerButton from "@/Components/DangerButton";
import DangerButtonLined from "@/Components/DangerButtonLined";
import PrimaryButton2 from "@/Components/PrimaryButton2";
import Pill from "@/Components/Pill";
import UploadButton from "@/Components/UploadButton";

export default function Buttons() {
    const [activeButton, setActiveButton] = useState(null);
    const [enableDisabledButtons, setEnableDisabledButtons] = useState(false);

    const handleButtonClick = (event, size, type) => {
        console.log(`${type} button clicked of size ${size}`);
        setActiveButton((prev) => (prev === `${type}-${size}` ? null : `${type}-${size}`));
    };

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
                                    onClick={(event) => {
                                        if (enableDisabledButtons) { // Only handle click if the button is enabled
                                            handleButtonClick(event, size, "primary-disabled");
                                        }
                                    }}
                                    disabled={!enableDisabledButtons}
                                >
                                    Button
                                </PrimaryButton>
                            ))}
                        </div>
                    </div>

                    {/* Primary Dropdown Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Primary Dropdown Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="mt-6 text-left">
                        {/* Create a single grid with fixed columns for each size */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Loop through the sizes and render both enabled and disabled buttons in the same row */}
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <React.Fragment key={index}>
                                    {/* Enabled Primary Dropdown Button */}
                                    <div className="flex justify-center items-center">
                                        <PrimaryDropdownButton
                                            size={size}
                                            options={[
                                                { label: "Option 1" },
                                                { label: "Option 2" },
                                                { label: "Option 3" },
                                            ]}
                                        />
                                    </div>

                                    {/* Disabled Primary Dropdown Button */}
                                    <div className="flex justify-center items-center">
                                        <PrimaryDropdownButton
                                            size={size}
                                            options={[
                                                { label: "Option 1" },
                                                { label: "Option 2" },
                                                { label: "Option 3" },
                                            ]}
                                            disabled={!enableDisabledButtons}
                                        />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
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
                                    size={size}
                                    isActive={activeButton === `secondary-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "secondary")}
                                    disabled={false}
                                >
                                    Button
                                </SecondaryButton>
                            ))}
                        </div>

                        {/* Disabled Secondary Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <SecondaryButton
                                    key={index}
                                    size={size}
                                    isActive={activeButton === `secondary-disabled-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "secondary-disabled")}
                                    disabled={!enableDisabledButtons}
                                >
                                    Button
                                </SecondaryButton>
                            ))}
                        </div>
                    </div>

                    {/* Danger Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Danger Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                        {/* Enabled Danger Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <DangerButton
                                    key={index}
                                    size={size}
                                    isActive={activeButton === `danger-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "danger")}
                                    disabled={false}
                                >
                                    Button
                                </DangerButton>
                            ))}
                        </div>

                        {/* Disabled Danger Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <DangerButton
                                    key={index}
                                    size={size}
                                    isActive={activeButton === `danger-disabled-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "danger-disabled")}
                                    disabled={!enableDisabledButtons}
                                >
                                    Button
                                </DangerButton>
                            ))}
                        </div>
                    </div>

                    {/* Danger Lined Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Danger Lined Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-1 gap-4 mt-6 text-left">
                        {/* Enabled Danger Lined Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <DangerButtonLined
                                    key={index}
                                    size={size}
                                    isActive={activeButton === `danger-lined-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "danger-lined")}
                                >
                                    Button
                                </DangerButtonLined>
                            ))}
                        </div>
                    </div>

                    {/* Pill Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Pill</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>
                    <div className="mt-6">
                        <Pill
                            options={["Selection title", "Selection title"]}
                            onSelect={(index) => {
                                console.log("Selected option:", index);
                            }}
                        />
                    </div>

                    {/* Primary2 Buttons */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Primary 2 Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                        {/* Enabled Primary2 Buttons */}
                        <div className="flex flex-col items-left gap-4">
                            {["huge", "medium", "small", "tiny"].map((size, index) => (
                                <PrimaryButton2
                                    key={index}
                                    size={size}
                                    isActive={activeButton === `primary2-${size}`}
                                    onClick={(event) => handleButtonClick(event, size, "primary2")}
                                    disabled={false}
                                >
                                    Button
                                </PrimaryButton2>
                            ))}
                        </div>
                    </div>

                    {/* Upload Button */}
                    <h3 className="text-[25px] font-jost font-medium text-black mt-10">Upload Button</h3>
                    <div className="mt-2 w-full h-[3px] bg-black"></div>

                    <div className="mt-6">
                        <UploadButton />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
