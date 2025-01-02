/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**//**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        bounceText: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        bounceText: "bounceText 2s infinite",
      },
    },
  },
  plugins: [],
};
