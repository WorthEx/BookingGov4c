/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ["./src/**/*.{vue,js,ts,jsx,tsx,html}", "./index.html", "./public/**/*.html"],
	theme: {
		extend: {
			colors: {
				gov: '#12914c'
			}
		},
		fontFamily: {
			sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
}

