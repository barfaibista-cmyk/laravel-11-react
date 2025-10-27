export default function Topbar(props) {
	return (
		<div className="app-header min-h-topbar-height flex items-center sticky top-0 z-30 bg-(--topbar-background) border-b border-default-200">
		    <div className="w-full flex items-center justify-between px-6">
		        
		        <div className="flex items-center gap-5">
		            {/* Sidenav Menu Toggle Button */}
		            <button id="button-toggle-menu" className="btn btn-icon size-8 hover:bg-default-150 rounded">
		                <i className="iconify lucide--align-left text-xl"></i>
		            </button>

		            {/* Topbar Search */}
		            <div className="lg:flex hidden items-center relative">
		                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
		                    <i className="iconify tabler--search text-base"></i>
		                </div>

		                <input type="search" id="topbar-search" className="form-input px-12 text-sm rounded border-transparent focus:border-transparent w-60" placeholder="Search something..." />

		                <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-4">
		                    <span className="ms-auto font-medium">⌘ K</span>
		                </button>
		            </div>
		        </div>

		        <div className="flex items-center gap-3">

		            {/* Light/Dark Mode Button */}
		            <div className="topbar-item">
		                <button className="btn btn-icon size-8 hover:bg-default-150 transition-[scale,background] rounded-full" id="light-dark-mode" type="button">
		                    <i className="iconify tabler--moon text-xl absolute dark:scale-0 dark:-rotate-90 scale-100 rotate-0 transition-all duration-200"></i>
		                    <i className="iconify tabler--sun text-xl absolute dark:scale-100 dark:rotate-0 scale-0 rotate-90 transition-all duration-200"></i>
		                </button>
		            </div>

		            {/* Setting Offcanvas Button */}
		            <div className="topbar-item">
		                <button className="btn btn-icon size-8 hover:bg-default-150 rounded-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="theme-customization" data-hs-overlay="#theme-customization">
		                    <i data-lucide="settings" className="size-4.5"></i>
		                </button>
		            </div>

		            {/* Profile Dropdown Button */}
		            <div className="topbar-item hs-dropdown relative inline-flex">
		                <button className="cursor-pointer bg-pink-100 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
		                    <img src="/assets/avatar-1-DOkfBXSU.png" alt="user-image" className="hs-dropdown-toggle rounded-full size-9.5" />
		                </button>

		                <div className="hs-dropdown-menu min-w-48" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-icons">
		                    <div className="p-2">
		                        <h6 className="mb-2 text-default-500">Welcome to Tailwick, {props.user}</h6>

		                        <a href="#!" className="flex gap-3">
		                            <div className="relative inline-block">
		                                <div className="rounded bg-default-200">
		                                    <img src="/assets/avatar-1-DOkfBXSU.png" alt="" className="size-12 rounded" />
		                                </div>
		                                <span className="-top-1 -end-1 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
		                            </div>

		                            <div>
		                                <h6 className="mb-1 text-sm font-semibold text-default-800">{props.user}</h6>
		                                <p className="text-default-500">
		                                    CEO & Founder
		                                </p>
		                            </div>
		                        </a>
		                    </div>

		                    <div className="border-t border-t-default-200 -mx-2 my-2"></div>

		                    <div className="flex flex-col gap-y-1">
		                        <a className="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="apps-mailbox.html">
		                            <i data-lucide="mail" className="size-4"></i>
		                            Inbox
		                            <span className="size-4.5 font-semibold bg-danger rounded text-white flex items-center justify-center text-xs">15</span>
		                        </a>

		                        <a className="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="apps-chat.html">
		                            <i data-lucide="messages-square" className="size-4"></i>
		                            Chat
		                        </a>

		                        <div className="border-t border-default-200 -mx-2 my-1"></div>

		                        <a className="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="auth-basic-logout.html">
		                            <i data-lucide="log-out" className="size-4"></i>
		                            Sign Out
		                        </a>
		                    </div>
		                </div>
		            </div>
		        </div>
		        
		    </div>
		</div>
	)
}
