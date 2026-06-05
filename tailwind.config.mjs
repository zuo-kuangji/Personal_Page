/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f5ef",
        ink: "#161716",
        muted: "#696965",
        rule: "#ded9ce",
        card: "#fffdf8",
        red: "#b84c43",
        teal: "#3d8d86",
        moss: "#6f8061",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: ["Georgia", "ui-serif", "serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(22, 23, 22, 0.08)",
      },
    },
  },
};
