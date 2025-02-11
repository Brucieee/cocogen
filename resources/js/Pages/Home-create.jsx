import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, router } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';


export default function HomeCreate() {    
    const [todoName, setTodoName] = useState('');



    const handleSubmit = async (e) => {
       e.preventDefault();
        
        if(todoName == ""){

            toast.error("Name Required");
            return;
        }

        try{
            const {data} = await axios.post("/api/postTodo",{
                name: todoName,
            });

            if(data){
                toast.success(data.message)
                router.visit('/home');
            }

            console.log(data);
        }catch (error) {
            console.error(error)
        }


    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >
            <Head title="HomeCreate" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="overflow-x-auto">
                                <form onSubmit={handleSubmit}>
                                    <input 
                                        type="text" 
                                        placeholder="Name..." 
                                        className="input input-bordered w-full"
                                        value={todoName} 
                                        onChange={(e) => setTodoName(e.target.value)}
                                    />
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-md w-full mt-4"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </AuthenticatedLayout>
    );
}
