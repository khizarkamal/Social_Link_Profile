/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-green": "hsl(75, 94%, 57%)",
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 20%)",
      "dark-grey": "hsl(0, 0%, 12%)",
      "off-grey": "hsl(0, 0%, 8%)",
      github: "#6e5494",
      instagram: "#8a3ab9",
      linkedin: "#0072b1",
    },
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
