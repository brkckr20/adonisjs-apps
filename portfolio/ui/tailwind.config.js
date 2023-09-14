/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#28e98c",
        "secondary": "#999999",
        "info": "#1f1f1f"
      }
    },
  },
  plugins: [],
}

