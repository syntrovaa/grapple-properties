import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A17",
        sand: "#EAE6D9",
        card: "#FBF9F3",
        line: "#D9D2BE",
        green: {
          DEFAULT: "#1B5E3A",
          deep: "#0F3D25",
          soft: "#E4EDE6",
        },
        gold: "#AD7C2B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
