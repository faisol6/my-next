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
      colors: {
        'midnight': '#060455',
        'metal': '#9A99BA',
        'light-grey': '#EBEBF7'
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      boxShadow: {
        'defualt': 'rgba(60, 64, 67, 0.3) 0px 1px 0px 0px, rgba(60, 64, 67, 0.15) 0px 2px 8px 5px',
        'top-shadow': 'rgba(17, 17, 26, 0.1) 0px -7px 8px',
      }
    },
  },
  plugins: [],
};
export default config;
