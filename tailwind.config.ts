import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: '#008000', // Set your primary color here
        'custom-black': '#181818',
        'custom-gray': 'rgb(21, 20, 20)',
      },
        fontFamily: {
          'area-normal': ['area-normal', 'sans-serif'],
          'inter': ['Inter', 'sans-serif'],
          'lato': ['Lato', 'sans-serif'],
        },
        fontSize: {
          'h1': '48px',
          'h2': '30px',
          'h3': '24px',
          'base': '17px',
        },
        lineHeight: {
          'h1': '55px',
          'h2': '134%',
          'h3': '100%',
          'base': '143%',
        },     
    },
  },
  plugins: [],
};
export default config;
