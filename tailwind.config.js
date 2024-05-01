/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        vb_green: {
          100: '#cce6e0',
          200: '#99cdc1',
          300: '#66b4a3',
          400: '#339b84',
          500: '#008265',
          600: '#088172',
          700: '#66B4A3',
        },
        vb_teal: {
          100: '#d2e5eb',
          200: '#a5cbd7',
          300: '#79b1c2',
          400: '#4c97ae',
          500: '#1f7d9a',
          600: '#177e8d',
          700: '#108080',
        },
        vb_blue: {
          100: '#ccdbe9',
          200: '#99b6d3',
          300: '#6692bc',
          400: '#336da6',
          500: '#004990',
          600: '#01417b',
          700: '#013967',
          800: '#023152',
          900: '#00293D',
        },
        vb_gray: {
          100: '#ccd4d8',
          200: '#9aa9b1',
          300: '#677f8b',
          400: '#355464',
          500: '#02293d',
        },
        vb_orange: {
          100: '#fbe8d0',
          200: '#f0d6bb',
          300: '#f6d0a1',
          400: '#eebd84',
          500: '#f2b973',
          600: '#eba34c',
          700: '#eda144',
          800: '#e9a815',
        },
        vb_white: {
          100: '#fafafa',
          200: '#f8f7f8',
          300: '#f6f5f6',
          400: '#f4f3f4',
          500: '#f2f0f2',
        },
        vb_yellow: {
          100: '#ffda85',
        },
        vb_red: {
          100: '#f48566',
        },
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1300px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('tw-elements/dist/plugin.cjs')],
}
