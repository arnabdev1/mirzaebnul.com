/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)" ,
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
        primary: "#000000",
        secondary: {
          DEFAULT: "#e90802",
          50: "#fff1f0",
          100: "#ffd6d5",
          200: "#ffb3b0",
          300: "#ff7f72",
          400: "#ff4f3f",
          500: "#e90802",
          600: "#c00600",
          700: "#9a0400",
          800: "#700300",
          900: "#470200",
        },
        light: "#ffffff",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode:'class',
}