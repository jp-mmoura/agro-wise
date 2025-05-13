import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'agro': {
          'green': {
            50: '#f0f9f1',
            100: '#dcf1de',
            200: '#bae3bf',
            300: '#8dce96',
            400: '#5ab56a',
            500: '#3a9c4a',
            600: '#2c7d3a',
            700: '#256430',
            800: '#21502a',
            900: '#1d4224',
          },
          'brown': {
            50: '#faf6f4',
            100: '#f3e9e3',
            200: '#e7d3c7',
            300: '#d4b3a3',
            400: '#bc8c77',
            500: '#a6735d',
            600: '#8c5c4a',
            700: '#734a3d',
            800: '#5d3d34',
            900: '#4c332c',
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 