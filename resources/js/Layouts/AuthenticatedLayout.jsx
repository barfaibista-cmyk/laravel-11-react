import Topbar from '@/Components/Topbar';
import Sidebar from '@/Components/Sidebar';
import Footer from '@/Components/Footer';
import Customizer from '@/Components/layouts/customizer';
import LayoutProvider from '@/Context/useLayoutContext';
import { usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
		<LayoutProvider>
			<div className="wrapper">
				<Sidebar />
				<div className="page-content">
					<Topbar user={user.name} />
					<main>{children}</main>
					<Customizer />
					<Footer />
				</div>
			</div>
        </LayoutProvider>
    );
}
