let defaultTheme = require('tailwindcss/defaultTheme');
let forms = require('@tailwindcss/forms');

// tailwind.config.js
module.exports = {
	content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
		'./resources/**/*.blade.php',
		'./resources/**/*.jsx',
	],
	theme: {
		extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
		},
	},
	plugins: [forms],
}
