import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ReminderDefault from '@/Components/ReminderDefault';
import ReminderCheckbox from '@/Components/ReminderCheckbox';

export default function Reminder() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Reminder
                </h2>
            }
        >
            <Head title="Reminder" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <ReminderDefault
                                plan="Auto Excel Plus Comprehensive Motor Insurance Premium Plan"
                                coverage="Acts of Nature (AON) "
                                amount="3,890.50"
                            />
                            <ReminderCheckbox/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
