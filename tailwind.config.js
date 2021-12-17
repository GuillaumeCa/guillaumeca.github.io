module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          dark: "#346dff",
          light: "#65afff",
        },
      },
      borderWidth: {
        10: "10px",
      },
      boxShadow: {
        light: "5px 5px 0 #65afff",
        dark: "10px 10px 0 #346dff",
        dark10: "10px 10px 0 #346dff",
        dark20: "20px 20px 0 #346dff",
      },
    },
  },
  variants: {},
  plugins: [],
};
