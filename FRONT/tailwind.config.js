
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#29514e",
        secondary: "#6D6466",
        tertiary: "#192632",
        fourtiary:"#E3DBDe",
        dynamic:"#9fbda9"
      },
      fontFamily: { 
        textPrimary:["Poppins", "sans-serif"],
        textSecondary : ["Bruno Ace", "sans-serif"]
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

