import { Link } from '@inertiajs/react';

const Footer = () => {
	return (
		<footer className="mt-auto footer flex items-center py-5 border-t border-default-200">
		    <div className="lg:px-8 px-6 w-full flex md:justify-between justify-center gap-4">
		        <div>
		            currentYear © {import.meta.env.VITE_APP_NAME || "Laravel App"}
		        </div>
		        <div className="md:flex hidden gap-2 item-center md:justify-end">
		            Design &amp; Develop by
		            <Link href="#" target="_blank" className="text-primary">
		                appAuthor
		            </Link>
		        </div>
		    </div>
		</footer>
	)
}

export default Footer;
