// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			animation: {
				'fade-in-scale': 'fadeInScale 0.6s ease-out forwards',
			},
			keyframes: {
				fadeInScale: {
					'0%': { opacity: 0, transform: 'scale(0.95)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
			},
		},
	},
}
