import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontSize: {
        sm: "clamp(0.75rem, 0.2vw + 0.5rem, 0.875rem)",
        base: "clamp(1rem, 0.5vw + 0.75rem, 1.125rem)",
        lg: "clamp(1.25rem, 0.75vw + 1rem, 1.375rem)",
        xl: "clamp(1.5rem, 1vw + 1.25rem, 1.625rem)",
        "2xl": "clamp(1.75rem, 1.25vw + 1.5rem, 1.875rem)",
        "3xl": "clamp(2rem, 1.5vw + 1.75rem, 2.125rem)",
        "4xl": "clamp(2.5rem, 2vw + 2rem, 2.625rem)",
        "5xl": "clamp(3rem, 2.5vw + 2.5rem, 3.125rem)",
        "6xl": "clamp(3.5rem, 3vw + 3rem, 3.75rem)",
        "7xl": "clamp(4rem, 3.5vw + 3.5rem, 4.25rem)",
        "8xl": "clamp(4.5rem, 4vw + 4rem, 4.75rem)",
        "9xl": "clamp(5rem, 4.5vw + 4.5rem, 5.25rem)",
        "10xl": "clamp(5.5rem, 5vw + 5rem, 5.75rem)",
      },
    },
  },
  plugins: [],
};

export default config;
