/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors:{
        primary:{
          veryDarkBlue:"hsl(233, 47%, 7%)",
          darkDesaturatedBlue:"hsl(244, 38%, 16%)",
          softViolet:"hsl(277, 64%, 61%)"
        },
        neutral:{
          white:"hsl(0, 0%, 100%)",
          transparentWhite:"hsla(0, 0%, 100%, 0.75)",
          transparentWhite2:"hsla(0, 0%, 100%, 0.6)"
        }
      },
      fontFamily:{
        "Inter":"'Inter', sans-serif",
        "Lexend_Deca":"'Lexend Deca', sans-serif"
      }
    },
  },
  plugins: [],
}
