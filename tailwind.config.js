// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         "loop-scroll": "loop-scroll 20s linear infinite",
//         float: "float 2s alternate infinite",
//         rotation: "rotation 5s ease infinite",
//       },
//       keyframes: {
//         "loop-scroll": {
//           from: { transform: "translateX(0)" },
//           to: { transform: "translateX(-100%)" },
//         },
//         float: {
//           from: { transform: "translateY(0)" }, // Start and end positions
//           to: { transform: "translateY(-23px)" }, // Peak position
//         },
//         rotation: {
//           "0%, 100%": { transform: "rotate(0deg)" },
//           "20%": { transform: "rotate(0deg)" },
//           "25%": { transform: "rotate(45deg)" },
//           "45%": { transform: "rotate(45deg)" },
//           "50%": { transform: "rotate(90deg)" },
//           "70%": { transform: "rotate(90deg)" },
//           "75%": { transform: "rotate(135deg)" },
//           "95%": { transform: "rotate(135deg)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // boxShadow: {
      //   darkgreen: "0 0 10px rgba(0, 128, 0, 0.5)",
      //   white: "0 0 10px rgba(255, 255, 255, 0.5)",
      // },
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
