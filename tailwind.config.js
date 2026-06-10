/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        creme: '#F9F8F6',      
        branco: '#FFFFFF',
        carbono: '#111111',    
        cinzaEscuro: '#333333',
        cinzaClaro: '#E5E5E5',
        vermelhoP: '#A91B1B',  
        vermelhoEscuro: '#7A1010',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      letterSpacing: {
        tightest: '-.06em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
