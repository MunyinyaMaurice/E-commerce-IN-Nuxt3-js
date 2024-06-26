/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: "#52525b",
      // white: bg - white,
    },
    fontFamily: {
      sans: ['"Source Sans 3"', "sans-serif"],
      serif: ['"Source Serif 4"', "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  // plugins: [
  //   require('flowbite/plugin')
  // ],
  plugins: [
    require("flowbite/plugin")({
      charts: true,
      forms: true,
      tooltips: true,
    }),
  ],
};
