/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-bg": "#161616",
        'base-white': "#E8E8E8",
        'purple': "#9544FF",
        'charcoal': "#272727",
        "iron": "#464646",
        "primary": "#1A72FF",
        "carbon": "#242424",
        "orange": "#FF6C11",
        grayCustom: '#A3A3A3',
      },
      fontSize: {
        '15': "15px",
        'xxs': "10px"
      },
      borderRadius: {
        "base": "15px"
      },
      boxShadow: {
        'inset-light': 'inset 0px 0px 5px 0px #EDEDED',
        'inset-gray': 'inset 0px 0px 6px 0px #696969',

      },
      blur: {
        50: '50px',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },

      backgroundImage: {
        'green-dark-gradient': 'linear-gradient(90deg, #2AC32E 0%, #161616 31.11%)',
      },
    },
  },
  plugins: [],
}
