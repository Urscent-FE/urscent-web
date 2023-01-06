module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        default: '#9859E7',
        defaulthalf: 'rgba(151, 104, 209, 0.5)',
      },
      boxShadow: {
        default: '0 5px 10px rgba(151, 104, 209, 0.5)',
        inputfocus: '0 5px 10px rgba(151, 104, 209, 0.9)',
      },
      transitionDuration: {
        400: '400ms',
      },
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(50% 50% at 50% 50%, #8D24E0 59.32%, rgba(151, 104, 209, 0) 100%)',
      },
      fontFamily: {
        hk: 'Noto Sans HK',
      },
      fontSize: {
        title: ['32px', '46px'],
        little: ['13px', '19px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
