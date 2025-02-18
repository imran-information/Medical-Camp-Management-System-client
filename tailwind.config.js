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
        primary: '#2563eb',
        secondary: '#38B2AC',
        background: '#F8FAFC',
        accent: '#4CAF50',
        text: '#374151',
        alert: '#DC2626',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

