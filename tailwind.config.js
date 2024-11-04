/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    background: {
      primary: 'var(--app-background)',
      secondary: 'var(--app-accent)',
    },
    extend: {
      fontFamily: {
        'header': ['Comfortaa', 'sans-serif'],
        'body': ['Comfortaa Normal', 'sans-serif'],
        'slogan': ['Lexend Italic', 'sans-serif'],
      },
      colors: {
        'app-background': '#f0f0f0',
        'app-accent': '#385cf3',
        'app-accent-secondary': '#500000',
        'app-cta': '#fbec0c',
        'app-text': '#ffffff',
        'app-text-secondary': '#202020',
      },
    },
  },
  plugins: [],
}
