/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: 'rgba(38, 38, 38, 0.6)',
        placeholder: '#EBEEF3',
      },
      gridTemplateColumns: {
        mainSection: '1fr 350px',
        todatNews: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
};
