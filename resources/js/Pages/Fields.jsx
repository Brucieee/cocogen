import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InputField from '../Components/InputField';

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
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                <InputField label="Field Label" required={true} placeholder="Field Label" />
            </div>
        </AuthenticatedLayout>
    );
}