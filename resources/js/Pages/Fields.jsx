import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InputField from '../Components/InputField';
import InputFieldIcon from '../Components/InputFieldWithIcon';
import InputFieldInfo from '../Components/InputFieldWithInfo';


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

            <Head title='Field with Icon'/>
           <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 m-5">
                <InputFieldInfo label="Field with Icon" required={true} placeholder="Field Label" hasIcon={true} />
            </div>


        </AuthenticatedLayout>
    );
}