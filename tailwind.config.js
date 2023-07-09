/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'rectangle-64': "url('/images/the punk logo png white.png')",
      }),
      backgroundSize: {
        'size-contain': 'contain',
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        oswald: "Oswald",
        nunito_sans: "Nunito Sans",
        comforter: "Comforter",
        jost: "Jost",
        "bebas-neue": "Bebas Neue",
      },
      boxShadow: {
        custom: '-8px 10px 53px 19px rgba(0,0,0,0.75)',
      }
    }
  },
  plugins: [],
}
