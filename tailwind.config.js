/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Audiowide: ["Audiowide", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-50": "#EFF8FF",
        "primary-600": "#1570EF",
      },
    },
  },
  plugins: [],
};
