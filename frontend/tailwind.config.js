/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        blue: "#0077B6",
        "light-gray": "#C4B6B6",
        gray: "#E4E4EC",
      },
    },
  },
  plugins: [],
};
