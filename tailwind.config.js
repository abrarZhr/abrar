// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      caveat: ["Caveat", "cursive"],
    },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
