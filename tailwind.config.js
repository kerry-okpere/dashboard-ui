module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#635CFF',
        secondary: '#5469D4',
        tertiary: '#7DABF8',
        'gray-10': '#C2C7CF',
        'gray-20': '#E3E8EE',
        'gray-30': '#D9DCE1',
        'gray-40': '#F7FAFC',
        'gray-600': '#697386',
        'green-60': '#CBF4C9',
        'green-70': '#0E6245'
      },
      spacing: {
        '9/20': '45%',
        '11/20': '55%',
        '39/50': '78%',
        '530': '530px',
        '5.5': '22px',
        '73': '19rem',
        '18': '4.75rem',
        '-18': '-4.75rem'
      },
      inset: {
        '535': '535px'
      }
    },
    boxShadow: {
      primary: '0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12)',
      secondary: '0px 5px 15px rgba(0, 0, 0, 0.12), 0px 15px 35px rgba(60, 66, 87, 0.08);',
      tertiary: '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 2px 5px rgba(60, 66, 87, 0.08);'
    },
    fontSize: {
      'xxs': '.6888rem',
      'xs': '.75rem',
      'xsm': '.814rem',
      'sm': '.875rem',
      'base': '1rem',
      '2xl': '1.5rem',
      '2.5xl': '1.75rem',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
