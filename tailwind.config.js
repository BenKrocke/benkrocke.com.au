const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		colors: {
			white: '#ffffff',
			nord: {
				blue: '#5E81AC',
				frost: '#8C9FC0',
				black: '#4C566A',
				gray: '#ECEFF4'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['"Inter"', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}

