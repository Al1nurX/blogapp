import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '475px',
        'xs': '350px',
      },
      backgroundColor: {
        'textColor': 'var(--textColor)',
        'bg': 'var(--bg)',
        'softBg': 'var(--softBg)',
      },
      textColor: {
        'softTextColor': 'var(--softTextColor)',
      },
      borderColor: {
        'custom': 'var(--textColor)',
      },
    },
  },
  plugins: [],
}
export default config
