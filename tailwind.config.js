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
          100: '#60A5FA', 
          200: '#1E3A8A', 
        }
      }
    },
  },
  plugins: [],
};
