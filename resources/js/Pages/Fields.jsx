import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InputField from '../Components/InputField';
import InputFieldIcon from '../Components/InputFieldWithIcon';
import InputFieldInfo from '../Components/InputFieldWithInfo';
import InputFieldDisabled from '@/Components/InputDisabled';
import InputMobile from '@/Components/InputMobile';


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
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 m-5">
                <InputField label="Field Label" required={true} placeholder="Field Label" />
            </div>

           <Head title='Field with Icon'/>
           <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 m-5">
                <InputFieldIcon label="Field with Icon" required={true} placeholder="Field Label" hasIcon={true} />
            </div>

            <Head title='Field with Info Icon'/>
           <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 m-5">
                <InputFieldInfo label="Field with Info Icon" required={true} placeholder="Field Label" hasIcon={true} />
            </div>

            <Head title='Field Disabled'/>
           <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 m-5">
                <InputFieldDisabled label="Field Disabled" required={true} placeholder="Field Label" hasIcon={true} />
            </div>

            <Head title='Mobile Input'/>
           <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 m-5">
                <InputMobile label="Mobile Input" required={true} placeholder="09XX-XXX-XXXX" hasIcon={true} />
            </div>


        </AuthenticatedLayout>
    );
}