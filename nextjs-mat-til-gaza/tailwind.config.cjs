/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cotton': '#FFFBF6',
        'vipps': '#ff5b24',
        'background': '#fce9e983'
      },
      fontFamily: {
        // Here we link the class 'font-quicksand' to the variable we made in Step 1
        // We add 'sans-serif' as a backup
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
