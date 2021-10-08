module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'picton-blue': {
          '50': '#f3fbfe',
          '100': '#e7f6fd',
          '200': '#c3eaf9',
          '300': '#9fddf5',
          '400': '#57c3ee',
          '500': '#0fa9e6',
          '600': '#0e98cf',
          '700': '#0b7fad',
          '800': '#09658a',
          '900': '#075371'
        } //https://javisperez.github.io/tailwindcolorshades/
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
