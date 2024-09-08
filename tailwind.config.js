/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customRed: 'rgb(200, 180, 37,1)',
        tableRed: 'rgb(231,233,235,1)' // Adds a custom RGB color
      },
    },
  },
  plugins: [],
}

