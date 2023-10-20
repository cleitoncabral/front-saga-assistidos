/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greenDefault: '#219653',
        greenDefaultHover: '#1a7741',
        redDefault: '#ff3333',
        gray: '#D9D5DA',
        grayCard: '#0F1110',
      }
    },
    fontFamily: {
      'title': ['Poppins'],
      'bodyContent' : ['Lato']
    }
    
  },
  plugins: [
  ],
}
