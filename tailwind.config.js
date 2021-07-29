module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      heading: ["Roboto", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: {
        main: "#000000",
        light: "#262626",
      },
      blue: {
        primary: "#18364f", //#00213D #0b2b46 #0c2c46 #18364f #234058
        medium: "#0074E0", // Main blue color
        tetiary: "#00213d", //'#000B14'
        main: "#0063c5",
      },
      red: {
        primary: "#e3342f", // danger
      },
      grey: {
        primary: "#E1DFE9", //disabled #E1DFE9
        secondary: "#908E9B", // labelled
        main: "#F9F9F9", // gray-100 #D1D5DB #F2F2F2
        medium: "#425563", // gray-600
        800: "#1F2937",
      },
      transparent: {
        primary:"#00000000"
      },
      green: {
        primary: "#0DD360",
        secondary: "#0A9946",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
