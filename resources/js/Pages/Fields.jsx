import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InputField from '../components/InputField';
import InputFieldIcon from '../components/InputFieldWithIcon';
import InputFieldInfo from '../components/InputFieldWithInfo';
import InputFieldDisabled from '../components/InputDisabled';
import InputMobile from '../components/InputMobile';
import DropdownWithSearch from "../components/DropDownWithSearch";
import InputDate from "../components/InputDate";



export default function Fields() {
    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Fields
            </h2>
        }
    >
        <Head title="Fields" />
        <div className="grid grid-cols-3 gap-6 p-6">
            {/* Column 1: Input Fields */}
            <div>
                <h3 className="text-primary font-semibold mb-4">Input Fields</h3>
                <div className="space-y-6">
                    <InputField label="Field Label" required={true} placeholder="Field Label" />
                    <InputFieldIcon label="Field with Icon" required={true} placeholder="Field Label" />
                    <InputFieldInfo label="Field with Info Icon" required={true} placeholder="Field Label" />
                    <InputFieldDisabled label="Field Disabled" required={true} placeholder="Field Label" />
                </div>
            </div>
            
            {/* Column 2: Mobile Input */}
            <div>
                <h3 className="text-primary font-semibold mb-4">Mobile Input</h3>
                <div className="space-y-6">
                    <InputMobile label="Mobile Input" required={true} placeholder="09XX-XXX-XXXX" />
                </div>
            </div>
            
            {/* Column 3: Input with Dropdowns */}
            <div>
                <h3 className="text-primary font-semibold mb-4">Input with Dropdowns</h3>
                <DropdownWithSearch label="Select Language" required={true} placeholder="Choose a language" />

                <h3 className="text-primary font-semibold mb-4 mt-4">Input using Calendar</h3>
                <InputDate label="Pick a Date" required />
             

            </div>
        </div>
    </AuthenticatedLayout>
    );
}