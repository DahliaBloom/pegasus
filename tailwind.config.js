/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3B82F6',
          secondary: '#F000B8',
          accent: '#7DD3FC',
          neutral: '#9ca3af',
          'base-100': '#1f2937',
          info: '#447CC5',
          success: '#4ade80',
          warning: '#fbbf24',
          error: '#F82112'
        }
      }
    ]
  }
}
