/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        mobile: "calc(100% - 30px)",
        "mob-section": "calc(100% - 30px)",
      },
    },
  },
  plugins: [],
};
