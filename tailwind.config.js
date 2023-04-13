/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './assets/js/*.{js,mjs}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			screens: {
				support: { raw: '(hover: hover)' }, // check if hover is supported on the device
				lg: '1014px', // overriding the default value (@media (min-width: 972px))
			},
			colors: {
				charcoal: '#353535',
				turquoise: '#13BBAF',
			},
		},
	},
};
