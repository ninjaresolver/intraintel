/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens : {
      'mobile' : 'max-740px',
      'sm' : '640px',
      'lg' : '768px',
      'xl' : '1024px',
      '2xl' : '1536px'
    }
  },
  plugins: [],
}