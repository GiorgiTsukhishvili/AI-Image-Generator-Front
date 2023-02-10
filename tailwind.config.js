/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          550: "#EC9524",
        },
        gray: {
          550: "#6C757D",
          350: "#CED4DA",
          950: "#181624",
        },
      },
    },
  },
  plugins: [],
};
