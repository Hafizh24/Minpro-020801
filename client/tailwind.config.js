const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "event-background": "url('../src/assets/banner-event.jpg')",
      },
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
  plugins: [require("flowbite/plugin")],
});
