/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './assets/js/app.js', './assets/js/modules/*.mjs'],
	darkMode: ['class', '[data-theme="dark"]'],
	future: { hoverOnlyWhenSupported: true },
	theme: {
		extend: {
			colors: {
				charcoal: '#353535',
				turquoise: '#13BBAF',
			},
			outlineOffset: {
				'3px': '3px',
			},
			outlineWidth: {
				'2.5px': '2.5px',
			},
			borderRadius: {
				px: '1px',
				inherit: 'inherit',
			},
			transitionDuration: {
				250: '250ms',
			},
			height: {
				12.5: '3.125rem' /* 50px */,
			},
			flexBasis: {
				22.5: '5.625rem' /* 90px */,
			},
			spacing: {
				15: '3.75rem' /* 60px */,
				244: '61rem' /* 976px */,
				5.75: '1.4375rem' /* 23px */,
			},
			minWidth: {
				25: '6.25rem' /* 100px */,
				18.75: '4.6875rem' /* 75px */,
			},
		},
	},
};
