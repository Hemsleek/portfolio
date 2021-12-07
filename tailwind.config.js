module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "h-blue": "#1F2937",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
