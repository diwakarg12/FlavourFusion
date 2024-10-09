/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],    
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

