module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
  variants: {
    extend: {},
  },
  plugins: [],
}

