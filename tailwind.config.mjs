/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			backgroundImage: {

				"bg-horse": "url('/images/featured-card-horse.jpg')",
				"bg-team": "url('/images/featured-card-team.jpg')",
				"bg-vineyard": "url('/images/featured-card-vineyard.jpg')",

			},
			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"brown": "#90784e",

			},
			fontFamily: {

				"montserrat": [ "Montserrat","sans-serif" ],
				"oswald": [ "Oswald","sans-serif" ]

			},
			boxShadow: {

				'bottom-only': '0 4px 6px -3px rgba(0, 0, 0, 0.1)'

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
