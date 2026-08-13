/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8f0',
          100: '#e8f0dc',
          200: '#d2e2ba',
          300: '#b0cd8f',
          400: '#8db463',
          500: '#6f9a43',
          600: '#557a32',
          700: '#425e29',
          800: '#374c25',
          900: '#2f4022',
          950: '#17230f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
