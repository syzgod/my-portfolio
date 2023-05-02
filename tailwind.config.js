/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {
      animation: {
        spin: 'spin 20s linear infinite',
        bounce: 'bounce 5s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-brand-colors'),
    require('tailwindcss-debug-screens'),
  ],
};
