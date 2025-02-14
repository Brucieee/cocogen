import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ReminderDefault from '@/Components/ReminderDefault';
import ReminderCheckbox from '@/Components/ReminderCheckbox';
import ReminderUpdateProfile from '@/Components/ReminderUpdateProfile';
import ReminderPromo from '@/Components/ReminderPromo';
import ReminderIncorrect from '@/Components/ReminderIncorrect';
import ReminderConversionNote from '@/Components/ReminderConversionNote';
import InformationGray from '@/Components/InformationGray';
import InformationSecurity from '@/Components/InformationSecurity';
import InformationTandCDefault from '@/Components/InformationTandCDefault';
import InformationDisclaimer from '@/Components/InformationDisclaimer';
import InformationBlue from '@/Components/InformationBlue';
import ReminderSelectGateway from '@/Components/ReminderSelectGateway';

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
                    {/* White-edged background container with padding */}
                    <div className="bg-white rounded-lg shadow-sm p-6"> {/* Add padding here */}
                        <ReminderDefault
                            plan="Auto Excel Plus Comprehensive Motor Insurance Premium Plan"
                            coverage="Acts of Nature (AON)"
                            amount="3,890.50"
                        />
                        <ReminderCheckbox />

                        {/* Add gap between components */}
                        <div className="flex flex-col gap-6">
                            
                            <ReminderUpdateProfile />
                            <ReminderPromo
                                amount="<Amount>"
                                discountedAmount="<Discounted Amount>"
                            />

                            <ReminderIncorrect/>

                            <ReminderConversionNote/>

                            <InformationGray/>

                            <InformationSecurity/>

                            <InformationTandCDefault/>

                            <InformationDisclaimer/>

                            <InformationBlue
                                date="February 14,2025"
                                time="5:00 P.M"
                            />

                            <ReminderSelectGateway/>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}