import { Link } from '@inertiajs/react';
import SimplebarClient from '@/Components/client-wrapper/SimplebarClient';
import IconifyIcon from '@/Components/client-wrapper/IconifyIcon';
import { LuChevronRight } from 'react-icons/lu';
import { menuItemsData } from '@/menu';

const isItemActive = (item, pathname) => {
    if (item.href && pathname === item.href) return true;
    if (item.children) {
        return item.children.some(child => isItemActive(child, pathname));
    }
    return false;
}

const MenuItemWithChildren = ({ item }) => {
	const Icon = item.icon;
	const pathname = window.location.pathname;
	const isActive = isItemActive(item, pathname);

	return (
		<li className={`menu-item hs-accordion ${isActive ? 'active' : ''}`}>
		    <button className={`hs-accordion-toggle menu-link ${isActive ? 'active' : ''}`}>
		        {Icon && <span className="menu-icon">
		            <Icon />
		        </span>}
		        <span className="menu-text">{item.label}</span>
		        <span className="menu-arrow">
		            <LuChevronRight />
		        </span>
		    </button>

		    <ul className={`sub-menu hs-accordion-content hs-accordion-group ${isActive ? 'block' : 'hidden'}`}>
		        {item.children?.map(child => child.children ? <MenuItemWithChildren key={child.key} item={child} /> : <MenuItem key={child.key} item={child} />)}
		    </ul>
		</li>
	)
}

const MenuItem = ({ item }) => {
	const Icon = item.icon;
	const pathname = window.location.pathname;
	const isActive = pathname === item.href;

	return (
		<li className={`menu-item ${isActive ? 'active' : ''}`}>
		    <Link href={item.href ?? '#'} className={`menu-link ${isActive ? 'active' : ''}`}>
		        {Icon && <span className="menu-icon">
		            <Icon />
		        </span>}
		        <div className="menu-text">
		            {item.label}
		        </div>
		    </Link>
		</li>
	)
}

const AppMenu = () => {
	return (
		<ul className="side-nav p-3 hs-accordion-group">
		    {menuItemsData.map(item => item.isTitle ? <li className="menu-title" key={item.key}>
		        <span>{item.label}</span>
		    </li> : item.children ? <MenuItemWithChildren key={item.key} item={item} /> : <MenuItem key={item.key} item={item} />)}
		</ul>
	)
}

const Sidebar = () => {
	return (
		<aside id="app-menu" className="app-menu">

		    <Link href="/" className="logo-box sticky top-0 flex min-h-topbar-height items-center justify-start px-6 backdrop-blur-xs">
		        <div className="logo-light">
		            {/* <img src={logoLight} className="logo-lg h-6" alt="Light logo" width={111} /> */}
		            {/* <img src={logoSm} className="logo-sm h-6" alt="Small logo" /> */}
		        </div>

		        <div className="logo-dark">
		            {/* <img src={logoDark} className="logo-lg h-6" alt="Dark logo" width={111} /> */}
		            {/* <img src={logoSm} className="logo-sm h-6" alt="Small logo" /> */}
		        </div>
		    </Link>

		    <div className="absolute top-0 end-5 flex h-topbar items-center justify">
			    <button id="button-hover-toggle">
			        <IconifyIcon icon="tabler:circle" className="size-5" />
			    </button>
			</div>

		    <div className="relative min-h-0 flex-grow">
		        <SimplebarClient className="size-full">
		            <AppMenu />
		        </SimplebarClient>
		    </div>
		</aside>
	)
}

export default Sidebar;
