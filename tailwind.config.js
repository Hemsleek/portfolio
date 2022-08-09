/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "h-blue": "#1F2937",
        "h-black": "#171717",
        "h-grey": "#B9B9B9",
        "deep-blue": "#1F2937"

      }
    },
  },

  plugins: [],
}
