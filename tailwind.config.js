/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // scan app router files
    "./components/**/*.{js,ts,jsx,tsx}", // scan components if you have them
  ],
  theme: {
    extend: {
      height: {
        dvh: "100dvh", // dynamic viewport height
      },
    },
  },
  plugins: [],
};
