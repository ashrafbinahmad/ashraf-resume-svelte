/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      color: {
        1: '#FFDCC8',
        2: '#FF7E4A',
        3: '#530030',
        4: '#2D112A',
      },
      'white': '#ffff',
      'black': '#000000',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
    },
    extend: {}
  },
  plugins: []
};