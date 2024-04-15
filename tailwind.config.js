/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        headerBack: "calc(100vh - 60px)",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
