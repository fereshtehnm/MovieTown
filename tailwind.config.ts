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
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-red": "#c72c2c",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'curves' : "url('/curves.png')"
      }
    },
  },
  plugins: [],
};