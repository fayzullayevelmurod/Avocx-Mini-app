/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A72FF",
        white: "#E8E8E8",
        black: "#161616",
        charcoal: "#242424",
        dark: "#1A1A1A",
        "body-bg": "#161616",
        "base-white": "#E8E8E8",
        purple: "#9544FF",
        iron: "#464646",
        carbon: "#242424",
        orange: "#FF6C11",
        grayCustom: "#A3A3A3",
        "dark-gray": "#333333",
        green: "#00D79A",
      },
      fontSize: {
        15: "15px",
      },
      lineHeight: {
        full: "100%",
      },
      boxShadow: {
        'pay-card': "0px 0px 10px 0px #96BBF7"
      },
      blur: {
        10: "10px"
      }
    },
  },
  plugins: [],
};
