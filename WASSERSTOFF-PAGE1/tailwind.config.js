module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: { 100: "#e7a4ff" },
        blue_gray: { 50: "#eef0fa", 400: "#8383a0", 600: "#5a5a89" },
        indigo: {
          200: "#a1a3d4",
          500: "#5756b3",
          800: "#383874",
          "800_0f": "#2934950f",
          A700: "#0239ff",
        },
        blue: { 300: "#65c7ff", "300_01": "#659aff" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        green: { A200: "#7bdda2", A700: "#00b828" },
        deep_orange: { 300: "#ff9066" },
        deep_purple: { A200: "#8575ff", "500_05": "#6c49ac05" },
        pink: { 300: "#ff708b" },
        orange: { A200: "#f8a243", A200_01: "#ffa63e" },
        red: { A100: "#ff7e7e" },
        gray: { 300: "#dbdef1", 900: "#171625" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", roboto: "Roboto", archivo: "Archivo" },
      boxShadow: {
        bs2: "0px 2.77px  2px 0px #6c49ac05",
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "0px 3.9px  3px 0px #2934950f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
