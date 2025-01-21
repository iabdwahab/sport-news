/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: 'rgba(38, 38, 38, 0.6)',
        placeholder: '#B8C2CE',
      },
    },
  },
  plugins: [],
};
