/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.8rem",
          lg: "1.6rem",
        },
      },

      fontFamily: {
        iran: ["iran"],
      },
    },
  },
  plugins: [],
};
