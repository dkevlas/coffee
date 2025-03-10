import tailwindcssAnimate from 'tailwindcss-animate';

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
				'light-beige': '#e2d9c8',
				'dark-brown': '#30261c',
				'toasted-coffee': '#4e3b2a',
				'cloud-white': '#f1f0ee',
				'cool-beige': '#e6e4d9',
				'olive-gray': '#696053',
				'pale-beige': '#eeebe6'
			},
			fontFamily: {
				poppins: ['Poppins'],
				opensans: ['Open Sans'],
				playwriteindia: ['Playwrite IN']
			}
  	}
  },
  plugins: [
		tailwindcssAnimate,
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-light-beige': {
					textShadow: '#e2d9c8 0 0 20px, #e2d9c8 0 0 10px'
				}
			})
		}
	],
}
