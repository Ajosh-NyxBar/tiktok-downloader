export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        irisGrover: ['"Iris Grover"', 'sans-serif'],
      },
      colors: {
        primary: '#8B0000', // Dark Red
        secondary: '#FFD700', // Gold
        gradientStart: '#FFD700', // Gold
        gradientEnd: '#FF4500', // OrangeRed
      },
    },
  },
  plugins: [],
}