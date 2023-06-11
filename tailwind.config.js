/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#11192A",
        "light-white": "rgba(255,255,255,0.17)",
        "icon-menu-cyan": "#40C4FF"
      }
    },
  },
  plugins: [],
}

