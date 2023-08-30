/** @type {import('tailwindcss').Config} */
const defaultFont = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#6F7DFB",
        secondery: "#E8F7FB",
        dark: {
          light: "#023047",
          black: "#070917",
        },
        iconic: "#057ADA",
        orange: "#DA722C",
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        Raleway: "'Raleway', sans-serif;",
      },
      margin: {
        15: "3.75rem",
        25: "6.25rem",
      },
      width: {
        45: "11.375rem",
        25: "6.25rem",
      },
      padding: {
        15: "3.75rem",
        17: "4.375rem",
        25: "6.25rem",
      },
      lineHeight: {
        11: "2.875rem",
      },
      height: {
        19: "4.68rem",
        25: "6.25rem",
      },
      boxShadow: {
        primaryShadow: "5px 5px 0px 4px #4853c0",
        box: "0px 9px 36px 0px rgba(0, 0, 0, 0.20)",
        course: "0px 4px 8px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
