/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html,md,mdx,tsx,js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white-44": "rgba(255, 255, 255, 0.44)",
        "fg-primary": "#efebf5",
        grey: {
          100: "#828282",
          200: "#010101",
          300: "#393939",
          400: "#D0D0D0",
          500: "#1a1a1a",
          600: "#D6D6D6",
          700: "#D9D9D9"
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    }
  }
};
