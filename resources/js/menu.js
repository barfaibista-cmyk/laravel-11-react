import {
	LuBookOpen,
    LuCalendar1,
    LuCircuitBoard,
    LuClipboardList,
    LuCodesandbox,
    LuFileText,
    LuFingerprint,
    LuLayoutPanelLeft,
    LuLock,
    LuMail,
    LuMessagesSquare,
    LuMonitorDot,
    LuPackage,
    LuPictureInPicture2,
    LuShare2,
    LuShieldAlert,
    LuShieldCheck,
    LuShieldHalf,
    LuShoppingBag,
    LuSquareUserRound,
    LuTags,
    LuUsers
} from 'react-icons/lu';

export const menuItemsData = [{
    key: 'Overview',
    label: 'Overview',
    isTitle: true
}, {
    key: 'Dashboards',
    label: 'Dashboards',
    icon: LuMonitorDot,
    children: [{
      key: 'Analytics',
      label: 'Analytics',
      href: '/analytics'
    },
    {
        key: 'Ecommerce',
        label: 'Ecommerce',
        href: '/index'
    }]
},{
    key: 'Content',
    label: 'Content',
    isTitle: true
}, {
    key: 'Posts',
    label: 'Posts',
    icon: LuBookOpen,
}, {
    key: 'Categories',
    label: 'Categories',
    icon: LuTags,
}, {
    key: 'Comments',
    label: 'Comments',
    icon: LuMessagesSquare,
}, {
	key: 'User',
	label: 'User',
	isTitle: true
}, {
	key: 'Users',
	label: 'Users',
	icon: LuUsers
}, {
	key: 'Roles',
	label: 'Roles',
	icon: LuShieldHalf
}, {
	key: 'Permissions',
	label: 'Permissions',
	icon: LuShieldAlert
}];


/*
 {
    key: 'Landing Page',
    label: 'Landing Page',
    icon: LuPictureInPicture2,
    children: [{
        key: 'One Page',
        label: 'One Page',
        href: '/onepage-landing',
        target: '_blank'
    },
        {
            key: 'Product',
            label: 'Product',
            href: '/product-landing',
            target: '_blank'
        }]
}, {
    key: 'Apps',
    label: 'Apps',
    isTitle: true
}, {
    key: 'Chat',
    label: 'Chat',
    icon: LuMessagesSquare,
    href: '/chat'
}, {
    key: 'Calendar',
    label: 'Calendar',
    icon: LuCalendar1,
    href: '/calendar'
}, {
    key: 'Email',
    label: 'Email',
    icon: LuMail,
    href: '/mailbox'
}, {
    key: 'Notes',
    label: 'Notes',
    icon: LuClipboardList,
    href: '/notes'
}, {
    key: 'Ecommerce',
    label: 'Ecommerce',
    icon: LuShoppingBag,
    children: [{
        key: 'Products',
        label: 'Products',
        href: '/product-list'
    },
        {
            key: 'Products Grid',
            label: 'Products Grid',
            href: '/product-grid'
        },
        {
            key: 'Product Details',
            label: 'Product Details',
            href: '/product-overview'
        },
        {
            key: 'Shopping Cart',
            label: 'Shopping Cart',
            href: '/cart'
        },
        {
            key: 'Checkout',
            label: 'Checkout',
            href: '/checkout'
        },
        {
            key: 'Add Products',
            label: 'Add Products',
            href: '/product-create'
        },
        {
            key: 'Orders',
            label: 'Orders',
            href: '/orders'
        },
        {
            key: 'Order Details',
            label: 'Order Details',
            href: '/order-overview'
        },
        {
            key: 'Sellers',
            label: 'Sellers',
            href: '/sellers'
        }]
}, {
    key: 'HR Management',
    label: 'HR Management',
    icon: LuCircuitBoard,
    children: [{
        key: 'Employee List',
        label: 'Employee List',
        href: '/employee'
    },
        {
            key: 'Holidays',
            label: 'Holidays',
            href: '/holidays'
        },
        {
            key: 'Leave Manage',
            label: 'Leave Manage',
            href: '#',
            children: [{
                key: 'By Employee',
                label: 'By Employee',
                href: '/leave-employee'
            },
                {
                    key: 'Add Leave(Employee)',
                    label: 'Add Leave(Employee)',
                    href: '/create-leave-employee'
                },
                {
                    key: 'By HR',
                    label: 'By HR',
                    href: '/leave'
                },
                {
                    key: 'Add Leave(HR)',
                    label: 'Add Leave(HR)',
                    href: '/create-leave'
                }]
        },
        {
            key: 'Attendance',
            label: 'Attendance',
            href: '#',
            children: [{
                key: 'Attendance(HR)',
                label: 'Attendance(HR)',
                href: '/attendance'
            },
                {
                    key: 'Main Attendance',
                    label: 'Main Attendance',
                    href: '/attendance-main'
                }]
        },
        {
            key: 'Department',
            label: 'Department',
            href: '/department'
        },
        {
            key: 'Sales',
            label: 'Sales',
            href: '#',
            children: [{
                key: 'Estimates',
                label: 'Estimates',
                href: '/sales-estimates'
            },
                {
                    key: 'Payments',
                    label: 'Payments',
                    href: '/sales-payments'
                },
                {
                    key: 'Expenses',
                    label: 'Expenses',
                    href: '/sales-expenses'
                }]
        },
        {
            key: 'Payroll',
            label: 'Payroll',
            href: '#',
            children: [{
                key: 'Employee Salary',
                label: 'Employee Salary',
                href: '/payroll-employee-salary'
            },
                {
                    key: 'Payslip',
                    label: 'Payslip',
                    href: '/payroll-payslip'
                },
                {
                    key: 'Create Payslip',
                    label: 'Create Payslip',
                    href: '/create-payslip'
                }]
        }]
}, {
    key: 'Invoice',
    label: 'Invoice',
    icon: LuFileText,
    children: [{
        key: 'Overview',
        label: 'Overview',
        href: '/overview'
    },
        {
            key: 'List Invoice',
            label: 'List Invoice',
            href: '/list'
        },
        {
            key: 'Add Invoice',
            label: 'Add Invoice',
            href: '/add-new'
        }]
}, {
    key: 'Users',
    label: 'Users',
    icon: LuSquareUserRound,
    children: [{
        key: 'List View',
        label: 'List View',
        href: '/users-list'
    },
        {
            key: 'Grid View',
            label: 'Grid View',
            href: '/users-grid'
        }]
}, 
*/
