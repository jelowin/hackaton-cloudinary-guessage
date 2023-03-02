const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      animation: {
        scroll: "scroll 1600s linear infinite",
      },
      keyframes: {
        scroll: {
          "100%": { backgroundPosition: "-30000px 30000px" },
        },
      },
      backgroundImage: {
        "main-bg-image": "url('/question.svg')",
      },
    },
  },
  plugins: [],
};
