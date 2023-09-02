/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "black-1000": "#2B2C35",
        "prim-blue": {
          DEFAULT: "#1788ff",
          100: "#F5F8FF",
        },
      },
      backgroundImage: {
        'main-bg': "url('/main_bg.png')"
      }
    },
  },
  plugins: [],
};