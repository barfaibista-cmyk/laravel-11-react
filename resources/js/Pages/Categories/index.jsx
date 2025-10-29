import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Breadcrumb from '@/Components/Breadcrumb';
import { LuChevronLeft, LuChevronRight, LuDownload, LuEllipsis, LuEye, LuPencil, LuPlus, LuSearch, LuSlidersHorizontal, LuSquarePen, LuTrash2 } from 'react-icons/lu';

const Categories = () => {
	const categories = usePage().props.categories;

	return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Categories" />
            <Breadcrumb title="Categories" />

            <div className="py-6">
<div className="card">
    <div className="card-header">
        <h6 className="card-title">Categories List</h6>
        <button className="btn btn-sm bg-primary text-white">
            <LuPlus className="size-4 me-1" />
            Add Category
        </button>
    </div>

    <div className="card-header">
        <div className="md:flex items-center md:space-y-0 space-y-4 gap-3">
            <div className="relative">
                <input type="email" className="form-input form-input-sm ps-9" placeholder="Search for name,email" />
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <LuSearch className="size-3.5 flex items-center text-default-500 fill-default-100" />
            </div>
        </div>

        <select className="form-input form-input-sm">
            <option defaultValue="">select status</option>
            <option>Hidden</option>
            <option>Rejected</option>
            <option>Verified</option>
            <option>Waiting</option>
        </select>
    </div>

    <div className="flex gap-2 items-center flex-wrap">
        <button type="button" className="btn btn-sm bg-transparent border border-dashed border-primary  text-primary hover:bg-primary/10">
            <LuDownload className="size-4" />
            Import
        </button>

        <button type="button" className="btn btn-sm size-7.5 bg-default-100 text-default-500 hover:bg-default-1500  hover:text-white">
            <LuSlidersHorizontal className="size-4" />
        </button>
    </div>
</div>

    <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                        <thead className="bg-default-150">
                            <tr className="text-sm font-normal text-default-700 whitespace-nowrap">
                                <th className="ps-4 text-start">
                                    <input id="checkbox-all" type="checkbox" className="form-checkbox" />
                                </th>
                                <th className="px-3.5 py-3 text-start">ID</th>
                                <th className="px-3.5 py-3 text-start">Title</th>
                                <th className="px-3.5 py-3 text-start">Active</th>
                                <th className="px-3.5 py-3 text-start">Created By</th>
                                <th className="px-3.5 py-3 text-start">Created At</th>
                                <th className="px-3.5 py-3 text-start">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(category => <tr key={category.id} className="text-default-800 font-normal text-sm whitespace-nowrap">
                                <td className="py-3 ps-4">
                                    <input type="checkbox" className="form-checkbox" />
                            </td>
                            <td className="px-3.5 py-3 text-primary">{category.id}</td>
                        <td className="py-3 px-3.5">{category.title}</td>
                        <td className="py-3 px-3.5">{category.active}</td>
                        <td className="py-3 px-3.5">{category.created_by}</td>
                        <td className="py-3 px-3.5">{category.created_at}</td>
                        <td className="px-3.5 py-3">
                            <div className="hs-dropdown relative inline-flex">
                                <button type="button" className="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500">
                                    <LuEllipsis className="size-4" />
                                </button>
                                <div className="hs-dropdown-menu" role="menu">
                                    <Link href={`categories/${category.id}`} className="flex items-center gap-1.5 py-1.5 px-3 text-default-500 hover:bg-default-150 rounded">
                                        <LuEye className="size-3" /> Detail
                                    </Link>
                                    <Link href="#" className="flex items-center gap-1.5 py-1.5 px-3 text-default-500 hover:bg-default-150 rounded">
                                        <LuSquarePen className="size-3" /> Edit
                                    </Link>
                                    <Link href="#" className="flex items-center gap-1.5 py-1.5 px-3 text-default-500 hover:bg-default-150 rounded">
                                        <LuTrash2 className="size-3" /> Delete
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>)}
                </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <p className="text-default-500 text-sm">
                Showing <b>{categories.length}</b> of <b>{categories.length}</b> Results
            </p>
            <nav className="flex items-center gap-0" aria-label="Pagination">
                <button type="button" className="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
                    <LuChevronLeft className="size-4 me-1" /> Prev
                </button>
    
                <button type="button" className="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
                    1
                </button>
    
                <button type="button" className="btn size-7.5 bg-primary text-white">
                    2
                </button>
    
                <button type="button" className="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
                    3
                </button>
    
                <button type="button" className="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
                    Next
                    <LuChevronRight className="size-4 ms-1" />
                </button>
            </nav>
        </div>
    </div>
</div>

            </div>
        </AuthenticatedLayout>
	)
}

export default Categories;

/*

*/


/*
                <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">

                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Category</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Title</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Headline</th>
                                                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
											categorys.map((category, i) => (
	                                            <tr key={i} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
	                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{category.category_id}</td>
	                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{category.title}</td>
	                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{category.headline === 'Y' ? 'Yes' : 'No'}</td>
	                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
<div className="hs-dropdown relative inline-flex">
    <button id="hs-dropdown-custom-icon-trigger" type="button" className="hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
        <svg className="flex-none size-4 text-gray-600 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
    </button>

    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-custom-icon-trigger">
        <div className="p-1 space-y-0.5">
            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                Detail
            </Link>
            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                Edit
            </Link>
            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                Delete
            </Link>
        </div>
    </div>
</div>
	                                                </td>
	                                            </tr>
											))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
*/
