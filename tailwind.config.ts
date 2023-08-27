import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-color-red': '#EB3850',
        'dark-10': '#1A191E',
        'dark-20': '#1a1a1a',
        'rose-white': '#323a4e',
        'brand-color-white': '#FFF8F9',
      },
      fontFamily: {
        inter: ['var(--font-family-inter)'],
        dmSans: ['var(--font-family-dmsans)'],
      },
    },
  },
  plugins: [],
}
export default config
