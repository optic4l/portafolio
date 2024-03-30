/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'jaguar': {
        '50': '#f3efff',
        '100': '#e7dfff',
        '200': '#c5b8ff',
        '300': '#8f79ff',
        '400': '#5131ff',
        '500': '#2c07f0',
        '600': '#2900ce',
        '700': '#2200a6',
        '800': '#1e0389',
        '900': '#1f0971',
        '950': '#04010d',
    },
    fontFamily: {
      'workSans': ["Work Sans", "sans-serif"],
      'grotesk': ["Space Grotesk", "sans-serif"],
      'inter': ["Inter", "sans-serif"]
    }
    
    }
  },
  plugins: [],
}

