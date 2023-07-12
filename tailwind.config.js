/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
          raleway: ['var(--font-raleway)'],
        },
        fontStyle: {
          italic: 'italic',
        },
        
      },
    },
  plugins: [],
}
