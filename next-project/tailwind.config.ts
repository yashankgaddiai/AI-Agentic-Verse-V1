import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        page: '#FBFAF8',
        band: '#F4F1EC',
        surface: '#FFFFFF',
        terracotta: {
          DEFAULT: '#C25A3C',
          hover: '#A94B30',
          tint: '#FDF3EE',
        },
        primary: '#1A1815',
        secondary: '#37332C',
        body: '#5F5A52',
        muted: '#6E685E',
        caption: {
          DEFAULT: '#857F74',
          alt: '#8A8479',
        },
        placeholder: '#A39C90',
        border: {
          hairline: 'rgba(26, 24, 21, 0.12)',
          card: 'rgba(26, 24, 21, 0.14)',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
