import { Link } from '@inertiajs/react';
import { LuChevronRight } from 'react-icons/lu';

const Breadcrumb = ({ title, subtitle}) => {
	return (
		<div className="flex items-center md:justify-between flex-wrap gap-2 mb-4 print:hidden">
		    <h4 className="text-default-900 text-lg font-semibold">{title}</h4>

		    <div className="md:flex hidden items-center gap-2 text-sm font-semibold">
		        <Link href="#" className="text-sm font-medium text-default-700">
		            Home
		        </Link>

		        <LuChevronRight className="text-sm flex-shrink-0 text-default-500 rtl:rotate-180" size={14} />

		            <Link href="#" className="text-sm font-medium text-default-700">
		                {title}
		            </Link>

		            <LuChevronRight className="text-sm flex-shrink-0 text-default-500 rtl:rotate-180" size={14} />

		        {subtitle && <>
			        <Link href="#" className="text-sm font-medium text-default-700" aria-current="page">
			            {subtitle}
			        </Link>
		        </>}
		    </div>
		</div>
	)
}

export default Breadcrumb;
