/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC300",
        primaryHover: "#FFB200",
        secondary: "#190B28",
        secondaryHover: "#10071C",
        bgColorPrimary: "#2A2E34",
        bgColorSecondary: "#020122",
        error: "#D90429",
        success: "#00C851",
        warning: "#FFC107",
        info: "#1D4E89",
        disabledBg: "#A3A3A3",
        disabledText: "#666666",
        textPrimary: "#E9EAEC",
        border: "#4E4E50",
        divider: "#3A3B3D",
        overlay: "rgba(0, 0, 0, 0.6)",
        focus: "#4CAF50",
        gradientStart: "#FFC300",
        gradientEnd: "#190B28",
        shadowPrimary: "rgba(0, 0, 0, 0.15)",
        shadowSecondary: "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["InterVariable", "sans-serif"],
      },
      boxShadow: {
        default: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "8px",
          large: "12px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
      themes: {
        light: {
          primary: "#FFC300",
          secondary: "#190B28",
          background: "#FFFFFF",
          text: "#2A2E34",
          border: "#4E4E50",
          focus: "#4CAF50",
        },
        dark: {
          primary: "#FFB200",
          secondary: "#10071C",
          background: "#020122",
          text: "#E9EAEC",
          border: "#3A3B3D",
          focus: "#00C851",
        },
      },
    }),
  ],
};
