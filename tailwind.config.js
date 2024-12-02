/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        status: "#528bbd",
        action: "#68d555",
        condition: "#d5c234"
      }
    },
  },
  plugins: [],
}
