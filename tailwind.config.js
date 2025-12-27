/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-dark': '#2c2c2c',
        'warm-gray': '#5a5a5a',
        'warm-white': '#fafaf8',
        'soft-sand': '#f5f4f0',
        'ocean': '#5b8fa3',
        'champagne': '#e8d5c4',
      },
    },
  },
  plugins: [],
};
