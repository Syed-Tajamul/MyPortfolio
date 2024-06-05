export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgreen: "#003c2f",
        textcolor: "#22ad01",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        float: "float 2s alternate infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        float: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-23px)" },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        NotoSans: ["Noto Sans", "sans - serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
