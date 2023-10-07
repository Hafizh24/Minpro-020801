const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          500: "#E2DDD7",
        },
      },
      fontFamily: {
        garamond: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
});
