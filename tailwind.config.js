/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ptSerif: "PT Serif, serif",
    },
    extend: {
      height: {
        hero: "450px",
      },
      width: {
        itemDetails: "37%",
      },
    },
  },
  plugins: [],
};
