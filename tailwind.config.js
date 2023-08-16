/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1f2632',
        'dark-graylish': '#323a49',
        'graylish-blue': '#4e5d73',
        'neon-green': '#52ffa8',
        'light-cyan': '#cee3e9',
      },
      borderRadius: {
        large: '1.25rem',
      },
      letterSpacing: {
        large: '0.2rem',
      },
    },
  },
  plugins: [],
};
