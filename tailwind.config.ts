import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
import flowbite from "flowbite-react/tailwind";
// @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
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
        text_dark: "#424242",
        text_light: "#666",
      },
      fontFamily: {
        "area-normal": ["area-normal", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        graphik: ["Graphik", "sans-serif"],
        sans: ["Graphik", "sans-serif"],
      },
      fontSize: {
        h1: "36px",
        h2: "28px",
        h3: "20px",
        h4: "16px",
        h5: "20px",
        p: "14px",
        base: "18px",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      lineHeight: {
        h1: "125%",
        h2: "150%",
        h3: "150%",
        base: "143%",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }: { addBase: any; theme: Function }) => {
      const headingStyles: { [key: string]: any } = {
        h1: {
          fontSize: theme("fontSize.h2"),
          lineHeight: theme("lineHeight.h2"),
          color: theme("colors.text_dark"),
          fontWeight: theme("fontWeight.semibold"),
        },
        h2: {
          fontSize: theme("fontSize.h1"),
          lineHeight: theme("lineHeight.h1"),
          color: theme("colors.text_dark"),
          fontWeight: theme("fontWeight.semibold"),
        },
        h3: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.h3"),
          color: theme("colors.text_dark"),
          fontWeight: theme("fontWeight.medium"),
        },
        h4: {
          fontSize: theme("fontSize.p"),
          lineHeight: theme("lineHeight.h1"),
          color: theme("colors.text_light"),
          fontWeight: theme("fontWeight.normal"),
        },
        h5: {
          fontSize: theme("fontSize.p"),
          lineHeight: theme("lineHeight.h1"),
          color: theme("colors.text_dark"),
          fontWeight: theme("fontWeight.normal"),
        },
        "@media (min-width: 640px)": {
          h1: {
            fontSize: theme("fontSize.h1"),
            lineHeight: theme("lineHeight.h1"),
            color: theme("colors.text_dark"),
            fontWeight: theme("fontWeight.semibold"),
          },
          h2: {
            fontSize: theme("fontSize.h1"),
            lineHeight: theme("lineHeight.h1"),
            color: theme("colors.text_dark"),
            fontWeight: theme("fontWeight.semibold"),
          },
          h3: {
            fontSize: theme("fontSize.h3"),
            lineHeight: theme("lineHeight.h3"),
            color: theme("colors.text_dark"),
            fontWeight: theme("fontWeight.medium"),
          },
          h4: {
            fontSize: theme("fontSize.h4"),
            lineHeight: theme("lineHeight.h3"),
            color: theme("colors.text_light"),
            fontWeight: theme("fontWeight.normal"),
          },
          h5: {
            fontSize: theme("fontSize.h4"),
            lineHeight: theme("lineHeight.h3"),
            color: theme("colors.text_dark"),
            fontWeight: theme("fontWeight.normal"),
          },
        },
      };
      addBase(headingStyles);
    }),
    flowbite.plugin(),
  ],
};
export default config;
