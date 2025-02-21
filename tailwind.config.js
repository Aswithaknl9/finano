/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        "jump-in": "jump-in 0.6s ease-in-out forwards",
        "zoom-in-out": "zoom-in-out 5s ease infinite",
        'fade-right': 'fadeRight 700ms ease-out',
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "jump-in": {
          "0%": { transform: "scale(0.8) translateY(10px)", opacity: "0" },
          "50%": { transform: "scale(1.1) translateY(-5px)", opacity: "1" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        "zoom-in-out": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "fadeRight": {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        "fadeUp": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

      },
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
};
