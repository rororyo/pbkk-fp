/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        17: "150px", // Ganti '6rem' dengan ukuran yang sesuai
      },
      height: {
        17: "150px", // Ganti '6rem' dengan ukuran yang sesuai
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
