/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hisbah-primary': '#006400', // Dark Green
        'hisbah-secondary': '#FFD700', // Gold
        'hisbah-light': '#F0FFF0',
        'hisbah-dark': '#003300',
      },
    },
  },
  plugins: [],
};
    
