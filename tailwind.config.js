export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f12",
        light: "#f5f5f5"
      },
    },
  },
  plugins: [],

  extend: {
    animation: {
      gradient: "gradient 6s ease infinite",
    },
    keyframes: {
      gradient: {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
    },
  },

}
