import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

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
      colors: {
        primary: "#008000", // Set your primary color here
        secondary: "rgba(242, 248, 242, 0.5)",
        "custom-black": "#181818",
        "custom-gray": "rgb(21, 20, 20)",
      },
      fontFamily: {
        "area-normal": ["area-normal", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        graphik: ['Graphik', 'sans-serif'],
      },
      fontSize: {
        'h1': "48px",
        'h2': "34px",
        'h3': "20px",
        'p':"16px",
        'base': "16px",
      },
      // lineHeight: {
      //   'h1': "55px",
      //   'h2': "134%",
      //   'h3': "100%",
      //   'base': "143%",
      // },
    },
  },
  plugins: [
    plugin(({ addBase, theme }: { addBase: any, theme: Function }) => {
      const headingStyles: { [key: string]: any } = {
        'h1': { fontSize: theme('fontSize.h1') },
        'h2': { fontSize: theme('fontSize.h2') },
        'h3': { fontSize: theme('fontSize.h3') },
      };
      addBase(headingStyles);
    }),
  ],
};
export default config;
