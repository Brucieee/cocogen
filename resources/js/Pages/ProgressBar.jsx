import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import ProgressBarComponent from "../Components/ProgressBarComponent";

export default function ProgressBar() {    
    const { todos } = usePage().props;

    console.log(todos);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Progress Bar
                </h2>
            }
        >   
            <Head title="Progress Bar" 
            />

            <ProgressBarComponent />


           
        </AuthenticatedLayout>
    );
}
