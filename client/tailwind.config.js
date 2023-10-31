const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [
    require('flowbite/plugin')
  ],
});
