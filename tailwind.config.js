/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#A855F7",
        "primary-dark": "#7E22CE",
        secondary: "#EC4899",
        "background-light": "#F3F4F6",
        "background-dark": "#0F0518",
        "surface-dark": "#1A0B2E",
        "accent-pink": "#EC4899",
        "accent-purple": "#9333EA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #301c4d 1px, transparent 1px), linear-gradient(to bottom, #301c4d 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#A855F7",
          secondary: "#EC4899",
          accent: "#9333EA",
          neutral: "#3D4451",
          "base-100": "#F3F4F6",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        dark: {
          primary: "#A855F7",
          secondary: "#EC4899",
          accent: "#9333EA",
          neutral: "#191D24",
          "base-100": "#0F0518",
          "base-200": "#1A0B2E",
          "base-300": "#2A1B3D",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
