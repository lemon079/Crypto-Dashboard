/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey400: '#F3F3F7',
        customGrey500: '#EEEEF4',
        customGrey600: '#797E82',
        customGrey800: '#535D66',
        customPurple800: '#5F00D9',

      },
    },
  },
  plugins: [],
}

