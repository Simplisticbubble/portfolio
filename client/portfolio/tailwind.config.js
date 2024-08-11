/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'mob': "url('/mobPyscho.png')",
      },
      fontFamily: {
        'roboto-mono': ["Roboto Mono", "monospace"],
      },
    },
    
  },
  plugins: [],
}

