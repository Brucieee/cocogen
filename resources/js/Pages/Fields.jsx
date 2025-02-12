import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


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
            <div className="w-[214px] h-[56px] group">
                <div className="h-[12px] p-[10px]">
                    <span className="text-teal-900 text-[10px] font-normal group-hover:text-labelhover">
                        Field Label
                    </span>
                    <span className="text-red-600 text-[10px] font-normal">*</span>
                </div>
                <input
                    type="text"
                    placeholder="Field Label"
                    className="h-[44px] w-[214px] border-0 border-b-2 border-secondary bg-transparent flex items-center pb-[10px] gap-2.5 p-[10px] text-gray-500 text-[14px] font-normal 
                    outline-none group-hover:bg-backgroundhover group-hover:border-borderhover"
                />
            </div>
        </div>
    </AuthenticatedLayout>
    );
}
