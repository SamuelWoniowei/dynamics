/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0078D4", // Blue accent for text highlights
        grey100: "#F3F3F3", // Light gray for background
        grey200: "#CCCCCC", // General gray
        grey300: "#333333", // Dark text
        green100: "#28A745", // Green progress bar
        purple100: "#6A1B9A", // Subtle purple highlight
      },
    },
  },
};
