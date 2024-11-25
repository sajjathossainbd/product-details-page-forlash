/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6c84",
        black: "#000000",
        white: "#ffffff"
      }
    },
  },
  plugins: [],
};
