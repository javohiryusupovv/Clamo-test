/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '10px',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1184px',
      },
    },
    extend: {
      screens: {
        ll: "450px",
        xxs: "400px",
        xxl:"480px",
        xcc:"1184px"
      },
      boxShadow: {
        'hero-left': '84px 100px 200px 12px rgb(166,217,242)',
        'box-shadow': '-119px 161px 240px -116px rgba(255,255,255,0.75)',
      },
    },
  },
  plugins: [],
};
