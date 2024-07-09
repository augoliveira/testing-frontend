/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^bg-/,
      variants: ['blue', 'red', 'green']
    },
    {
      pattern: /^text-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)']
      },
      boxShadow: {
        navbarShadow: ' 0 10px 30px -10px rgba(2,12,27,0.7)',
        button: '0px 0px 68px 7px rgba(5, 150, 105, 0.4)'
      },
      colors: {
        primary: '#201f27',
        secundary: '#2E3038',
        link: '#f72585',
        'dark-purple': '#081A51',
        'light-white': 'rgba(255,255,255,0.18)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
