/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
             'mont':"'Montserrat', sans-serif;",
      },
      backgroundColor:{
        'light_blue':"rgb(244,247,249)",
        'd-blue':"rgb(229,243,255)",
      }
    },
  },
  plugins: [],
}

