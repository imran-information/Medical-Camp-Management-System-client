export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"roboto", "Roboto", serif'
      ]
    },
    extend: {
      colors: {
        primary: '#0056b3',
        lightBlue: '#4da8da',
        green: '#28a745',
        orange: '#ff9900',
        darkGray: '#343a40',
        lightGray: '#f8f9fa',
        red: '#dc3545',
        yellow: '#ffc107',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

