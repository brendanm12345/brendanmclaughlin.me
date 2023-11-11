/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        source: ["Source Serif Pro", "serif"],
        sourcesans: ["Source Sans Pro", "sansserif"],
        ibmmono: ["IBM Plex Mono", "monospace"]
      },
      colors: {
        duskwine: '#0E0616',
        moonmist: '#DEDDE0',
        moonmist05: 'rgba(222, 221, 224, 0.09)',
        saltlake: '#E7E7E7',
        sundown: '#D7263D',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}