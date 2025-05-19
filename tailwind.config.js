/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Update this based on your file locations
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      dropShadow: {
        white: "0 0 8px 10px rgba(255, 255, 255, 0.7)", // custom white shadow
      },
    },
  },
  plugins: [],
};
