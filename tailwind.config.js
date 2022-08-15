module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    colors: {
      orange: {
        DEFAULT: '#FF9F66',
        100: '#FFF1E8',
        200: '#FFB081',
        hover: '#FF9454',
      },
      green: {
        DEFAULT: '#258675',
        100: '#D4EEE9',
        200: '#94CAC0',
        300: '#45A090',
      },
      yellow: '#EDC988',
      pink: {
        DEFAULT: 'FF7D6B',
        100: '#FFE9E4',
        200: '#FEAEA3',
      },
      heading: '#1C0A0A',
      paragraph: '#584F49',
      stroke: {
        1: '#B0B4C0',
        2: '#CFCFCF',
        3: '#F4F5F7',
      },
      section: '#F5F6F9',
      shape: '#E8EEF0',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        circle: "url('/src/assets/img/hero/bg.png')",
        cardsBg: "url('/src/assets/img/cards/bg.png')",
        video: "url('/src/assets/img/video/video.png')",
        contact: "url('/src/assets/img/contact/bg.png')",
      },
      boxShadow: {
        primary: '0px 18px 36px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
