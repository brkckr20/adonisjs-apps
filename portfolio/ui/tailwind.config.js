/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0F0F0F",
        "secondary": "#676767",
        "info": "#1f1f1f"
      },
      maxWidth: {
        "custom": "1170px"
      }
    },
  },
  plugins: [],
}

