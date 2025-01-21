/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2974E7', 
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(110deg, rgba(183, 203, 255, .34), rgba(255, 249, 242, .4) 50%, rgba(183, 203, 255, .48))', 
        'backgroundimg': 'linear-gradient(90deg, #031530, #174181)', 
        'backgroungdd': 'linear-gradient(90deg, #3d99f0, #0065aa)',
      },
    },
  },
  plugins: [],
}
