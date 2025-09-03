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
        17: "17px",
      },
      lineHeight: {
        full: "100%",
      },
      boxShadow: {
        "pay-card": "0px 0px 10px 0px #96BBF7",
        "option-shadow": "0px 4px 20px 0px #464646",
        "cart-btn": "0px 0px 5px 0px #FFFFFF inset",
        vip: "0px 0px 15px 0px #FFA37880, 0px 0px 10px 0px #FFA378 inset",
        'ai-btn': "0px 0px 10px 0px #C3A4FF66"
      },
      blur: {
        10: "10px",
      },
      borderRadius: {
        base: "14px",
      },
      backgroundImage: {
        vip: "linear-gradient(90deg, #FF6D44 0%, #FFB783 100%)",
        check: 'url("/images/icons/check.svg")',
      },
    },
  },
  plugins: [],
};
