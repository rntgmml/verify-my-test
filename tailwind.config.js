/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-codec)']
      }
    },
    colors: {
      darkGrey: '#121212',
      white: '#FFFFFF',
      whiteSmoke: '#F8F8F8',
      grey: '#EDEDF1',
      foggyGrey: '#ACA99F',
      sonicSilver: '#777777',
      warning: '#D24340',
      lightYellow: '#FBC81D',
    },
  },
  plugins: [],
}
