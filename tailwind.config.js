/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-dark': '#4A4A4A',
        'warm-gray': '#6B6B6B',
        'warm-white': '#FAFAF8',
        'warm-cream': '#F5F1E8',
        'soft-sand': '#F5F1E8',
        'taupe': '#A89B8A',
        'ocean': '#5b8fa3',
        'champagne': '#e8d5c4',
        'navy': '#2C3E50',
        'charcoal': '#3A3A3A',
        'phone': '#2d7a5e',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
