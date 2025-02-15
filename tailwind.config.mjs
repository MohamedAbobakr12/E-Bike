/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF5ED",
          100: "#FFE8D4",
          200: "#FFCDA9",
          300: "#FFAA72",
          400: "#FE7B39",
          500: "#FD5915",
          600: "#EE3C08",
          700: "#C52A09",
          800: "#9C2310",
          900: "#7E1F10",
          950: "#440C06",
        },
        gray: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#101010",
        },
        BG: "#1C1B1B",
      },
      boxShadow: {
        outer: "0px -3px 30px rgba(238, 60, 8, 0.4)",
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],
};
