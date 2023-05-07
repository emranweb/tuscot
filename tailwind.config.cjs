/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    colors: {
      primary: {
        light: "#6C5DD3",
        default: "#6C5DD3",
        dark: "#6C5DD3",
      },
      black: "#000000",
      white: "#ffffff",
      textcolor: {
        default: "#b6b6b6",
      },
      heading: {
        default: "#000",
      },
      bgcolor: {
        body: "#F9F8F8",
        input: "#f7f8f9",
        default: "#f7f8f9",
      },
    },
  },
};
