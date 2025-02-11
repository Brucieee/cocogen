import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';

export default function Home() {    
    const { todos } = usePage().props;

    console.log(todos);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div className="overflow-x-auto">
                            <div className="flex justify-end">
                                <Link 
                                    href={route("home.create")}
                                    className="btn btn-primary btn-sm">
                                 Add 
                                </Link>
                            </div>
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                { todos.map((row)=>(
                                    <tr key={row.id}>
                                        <th>{row.id}</th>
                                        <td>{row.name}</td>
                                        <td>{row.status}</td>
                                </tr>
                                ))}    
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
