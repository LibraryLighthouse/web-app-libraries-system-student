// tailwind.config.js
import flowbitePlugin from 'flowbite/plugin'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    autoprefixer: {},
  },
  plugins: [flowbitePlugin],
}
