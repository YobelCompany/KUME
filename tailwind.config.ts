import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 따뜻한 코럴/블러시 톤: 부드럽게 감싸주는 느낌
        brand: {
          50: "#fdf6f2",
          100: "#faeae0",
          200: "#f3cfbb",
          300: "#eaae8e",
          400: "#df8a62",
          500: "#d16c44",
          600: "#bd5732",
          700: "#9c4529",
          800: "#7d3924",
          900: "#5f2d1e",
        },
        // 배경/텍스트에 쓸 따뜻한 크림 계열
        cream: {
          50: "#fffbf6",
          100: "#fbf3e9",
          200: "#f4e6d3",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
