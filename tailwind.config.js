const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '15px',
					sm: '10px',
					md: '15px',
				},
				screens: {
					sm: '600px',
					md: '728px',
					lg: '1024px',
				},
			},
			colors: {
				primary: {
					DEFAULT: '#0057fc',
					light: '#6b83ff',
					dark: '#002fc8',
				},
			},
			width: {},
			minWidth: {},
			minHeight: {},
			maxHeight: {},
			gridTemplateColumns: {
				sm: 'repeat(auto-fill, minmax(130px, 1fr))',
				lg: 'repeat(auto-fill, minmax(160px, 1fr))',
			},
		},
	},
	plugins: [],
};
