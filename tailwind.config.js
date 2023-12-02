module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily:{
        'Roboto':['Roboto Slab','ui-sans-serif', 'system-ui'],
        'Montserrat':['Montserrat','ui-sans-serif', 'system-ui']
      },

    extend: {
      backgroundColor: {
        'my-yellow': '#FDBF50',
        'my-gray': '#2A2C41',
        'my-orange':'#FF724C',
        'my-orange-hover':'#FF5E33'
      },
      
    },
  },
  plugins: [],
};
