/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#06142E',
      'blue': '#1b3358',
      'dark-purple': '#473e66',
      'purple': '#bd83b8',
      'white': '#f5d7db',
      'orange': '#f1916d'
    }
  },
  plugins: [],
}

