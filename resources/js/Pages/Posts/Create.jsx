import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Breadcrumb from '@/Components/Breadcrumb';
import { LuChevronLeft, LuChevronRight, LuDownload, LuEllipsis, LuEye, LuPencil, LuPlus, LuSearch, LuSlidersHorizontal, LuSquarePen, LuTrash2 } from 'react-icons/lu';

const Create = () => {
	return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Posts" />
            <Breadcrumb title="Posts" subtitle="Create New Post" />

            <div className="py-6">
				<div className="card">
					<div className="card-header">
						<h6 className="card-title">Create New Post</h6>
						<Link href="/dashboard/posts" className="btn btn-sm bg-primary text-white">
							<LuChevronLeft className="size-4 me-1" />
							Go Back
						</Link>
					</div>
<div className="flex items-center justify-around max-w-sm space-y-3">
    <div className="relative">
        <input 
            type="email" 
            id="hs-floating-input-email" 
            className="peer p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
            focus:pt-6
            focus:pb-2
            not-placeholder-shown:pt-6
            not-placeholder-shown:pb-2
            autofill:pt-6
            autofill:pb-2" 
            placeholder="you@email.com"
        />
        <label 
            htmlFor="hs-floating-input-email" 
            className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:scale-90
            peer-focus:translate-x-0.5
            peer-focus:-translate-y-1.5
            peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
            peer-not-placeholder-shown:scale-90
            peer-not-placeholder-shown:translate-x-0.5
            peer-not-placeholder-shown:-translate-y-1.5
            peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500">Email</label>
    </div>
    <div className="relative">
        <input 
            type="password" 
            id="hs-floating-input-passowrd" 
            className="peer p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
            focus:pt-6
            focus:pb-2
            not-placeholder-shown:pt-6
            not-placeholder-shown:pb-2
            autofill:pt-6
            autofill:pb-2"
            placeholder="********"
        />
        <label 
            htmlFor="hs-floating-input-passowrd"
            className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:scale-90
            peer-focus:translate-x-0.5
            peer-focus:-translate-y-1.5
            peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
            peer-not-placeholder-shown:scale-90
            peer-not-placeholder-shown:translate-x-0.5
            peer-not-placeholder-shown:-translate-y-1.5
            peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500">Password</label>
    </div>
</div>
					<div className="card-footer">
						<p>Card Footer</p>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}

export default Create;
