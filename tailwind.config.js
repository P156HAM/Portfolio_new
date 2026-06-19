/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: "var(--text)",
        paper: "var(--bg)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        hair: "var(--border)",
        accent: "var(--accent)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
