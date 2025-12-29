import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: "#FCE7F3",      // Rosa bem clarinho (fundo)
          roseDark: "#FBCFE8",  // Rosa um pouco mais forte (detalhes)
          silver: "#9CA3AF",    // Prata (ícones/textos secundários)
          black: "#1F2937",     // Preto suave (texto principal)
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;