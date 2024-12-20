/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6c84",
        primaryLight: "#FEEBE8",
        secondary: "#3C348A",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
