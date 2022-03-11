module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      screens: {
        '3xl': '1600px',
        'heroBreak1': '1065px',
        'heroBreak2': '967px',
        'navBreak1': '1327px',

      },

      fontSize: {
        '3xs': '0.75rem', // 13px
        '2xs': '0.875rem', // 16px
        '1xs': '1rem', // 16px
        'subtitle': '1.125rem', // 18px
        'title': '3.125rem', // 50px
        'smallerTitle': '1.625rem', // 26px
        'largeTitle': '5rem', // 80px
        'medTitle': '2.25rem', // 36px

      },

      scale: {
        '38': '.38',
        '40': '.4',

      },

      lineHeight: {
        'eighty': '5rem', // 80px
        'thirtyone': '1.969rem', // 31.5px
        'fortyfive': '2.813rem', //45px
        'sixtytwo': '3.906rem' //62.5px
      },

      letterSpacing: {
        widest: '.2em',
        widestBtn: '.16em',
        minus1: '-2px'
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
      },



      colors: {
        darkGrey: '#191919', // dark grey
        darkGreyFaded: 'rgba(25, 25, 25, 0.7)', // dark grey
        lightGreyFaded:'rgba(242, 242, 242, 0.7)', // light grey
        lightGrey:'#F2F2F2', // light grey
      },

      spacing: {
        '1.25': '0.3125rem', //5px          
        '2.5': '0.625rem', //10px 
        '2.75': '0.6875rem', //11px 
        '3.75': '0.9375rem', //15px
        '5.25': '1.3125rem', //21px           
        '7.5': '1.875rem', //30px       
        '12.5': '3.125rem', //50px
        '13.5': '3.375rem', //54px
        '15': '3.75rem', //60px 
        '15.5': '3.875rem', //62px           
        '17.5': '4.375rem', //70px 
        '22.5': '5.625rem', //90px 
        '25': '6.25rem', //100px  
        '33.75': '8.4375rem', //135px 
        '30': '7.5rem', //120px
        '50': '12.5rem', //200px 
        '78': '19.5rem', //312px 
        '95': '23.75rem', //380px 
        '200': '50rem', //800px    


      },

      maxWidth: {

      }
    },




    fontFamily: {
      'acumin': ['acumin-pro, sans-serif'],
      'libre': ['libre-franklin, sans-serif'],
    },

    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      normal: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',

    },
  },
  plugins: [],
}