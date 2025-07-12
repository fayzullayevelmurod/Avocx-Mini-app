/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1A1A1A',
        "body-bg": "#161616",
        'base-white': "#E8E8E8",
        'purple': "#9544FF",
        'charcoal': "#272727",
        "iron": "#464646",
        "primary": "#1A72FF",
        "carbon": "#242424",
        "orange": "#FF6C11",
        grayCustom: '#A3A3A3',
        'dark-gray': '#333333',
        'green': "#00D79A"
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
        'select-theme': '0px 0px 10px 0px #1A72FF',
        'tariff': '0px 4px 7px 0px #21212166',
        'selected-tariff': '0px 0px 16.9px 0px #1A72FF',
        'btn-inset': "0px 0px 5px 0px #FFFFFF inset",
        'card-shd': '0px 0px 5px 0px #656565',
        'sort': "0 4px 23px 0 #2B2B2B"
      },
      blur: {
        50: '50px',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      dropShadow: {
        'select-theme': '0px 0px 10px 0px #1A72FF'
      },
      backgroundImage: {
        'green-dark-gradient': 'linear-gradient(90deg, #2AC32E 0%, #161616 31.11%)',
        'ai-card': "linear-gradient(92.53deg, #232323 9.26%, #0F0F0F 90.74%)",
        "nav":"linear-gradient(169.23deg, #181818 2.37%, #111111 97.63%)"
      },
      lineHeight: {
        'full': "100%"
      }
    },
  },
  plugins: [],
}
