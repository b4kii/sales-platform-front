/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid:
          "repeat(auto-fit, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
