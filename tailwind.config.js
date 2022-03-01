module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'norte':"url('/public/img/Norte.jpg')",
        'chinacota':"url('/public/img/chinacota.jpg')",
        'cacota':"url('/public/img/Cacota.jpg')",
        'ocaña':"url('/public/img/Ocaña.jpg')",
        'pamplona':"url('/public/img/Pamplona.jpg')",
        'playa':"url('/public/img/Playadebelen.jpg')"
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary':'#0c2787',
        'second': '#08adff',
        'terciary':'#120907'

      }),
      textColor:{
        'primary':'#0c2787',
        'second': '#08adff',
        'terciary':'#120907'
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};