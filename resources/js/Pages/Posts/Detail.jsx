import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Breadcrumb from '@/Components/Breadcrumb';

export default function Detail() {
	const post = usePage().props.post;

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Detail Post</h2>}
        >
            <Head title="Dashboard" />
            <Breadcrumb title="Dashboard" subtitle="Detail Post" />

            <div className="py-12">
				<h3>{post?.title}</h3>
				<div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
            </div>
        </AuthenticatedLayout>
    )
}
