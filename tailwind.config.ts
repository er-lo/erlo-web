import type { Config } from 'tailwindcss'

const config: Config = {
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
      textColor: {
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
        brand: "var(--brand)",
        link: "var(--blue-10)",
      },
      backgroundColor: {
        primary: "var(--gray-1)",
        secondary: "var(--gray-4)",
        secondaryA: "var(--gray-a4)",
        tertiary: "var(--gray-3)",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
      }
    },
  },
  plugins: [],
}
export default config
