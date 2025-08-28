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
          600: '#60A5FA',  // darker
          800: '#1E3A8A',  // darkest
        }
      }
    },
  },
  plugins: [],
};
