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
        blue_gray: {
          50: "#eef0fa",
          400: "#8383a0",
          600: "#5a5a89",
          800: "#44444f",
        },
        indigo: {
          200: "#a1a3d4",
          500: "#5756b3",
          800: "#383874",
          "800_0f": "#2934950f",
          "800_90": "#38387490",
          A700: "#0239ff",
        },
        yellow: { 500: "#fae634", A400_a2: "#f9e000a2" },
        red: {
          300: "#fc717d",
          "500_09": "#ff2b2b09",
          A100_01: "#ff737d",
          A100: "#ff7e7e",
          A200_a2: "#ff505da2",
        },
        blue: { 300: "#65c7ff", "300_01": "#659aff" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        green: { A200: "#7bdda2", A700: "#00b828" },
        deep_purple: {
          300: "#a46ce9",
          A200_cc_01: "#695dfbcc",
          A200: "#8575ff",
          A200_01: "#695dfb",
          A200_02: "#9352e5",
          A700_0a: "#840de20a",
          "500_05": "#6c49ac05",
          A200_cc: "#9352e5cc",
        },
        deep_orange: { 300: "#ff9066" },
        pink: { 300: "#ff708b", "500_09": "#e20d9409" },
        orange: { A200: "#f8a243", A200_01: "#ffa63e" },
        gray: { 100: "#f1f1f5", 300: "#dbdef1", 900: "#171625" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", roboto: "Roboto", archivo: "Archivo" },
      boxShadow: {
        bs3: "0px 2.32px  1px 0px #ff2b2b09",
        bs: "0px 2.77px  2px 0px #6c49ac05",
        bs1: "0px 3.02px  2px 0px #840de20a",
        bs4: "0px 4px  4px 0px #0000003f",
        bs2: "0px 3.02px  2px 0px #e20d9409",
        bs5: "0px 3.9px  3px 0px #2934950f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
