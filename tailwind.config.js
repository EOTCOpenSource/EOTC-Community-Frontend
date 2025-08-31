/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: '#721111', // burgenday // dont check my spelling
          600: '#5c0d0d',  // darker
          800: '#420909',  // darkest
        }
      }
    },
  },
  plugins: [],
};
