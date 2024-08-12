/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'mob': "url('/mobPyscho.png')",
        'ctScan':"url('/ctScan.png')",
        'goParty':"url('/goParty.png')",
        'meditate':"url('/meditate.png')",
        'snowBall':"url('/snowBall.png')",
        'Train' :"url('/Train.png')",
      },
      fontFamily: {
        'roboto-mono': ["Roboto Mono", "monospace"],
      },
    },
    
  },
  plugins: [],
}

