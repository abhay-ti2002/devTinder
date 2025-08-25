/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "576px",
      tablet: "768px",
      laptop: "992px",
      dekstop: "1200px", 
    },
  },
  plugins: [require("daisyui")],
};
