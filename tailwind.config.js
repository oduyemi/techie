/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        main: "#2F2FA2",
        pinkie: "#F64C72",
        dark: "#0C1713",
        subtext: "#FEF9EF",
        pee: "#553D67",
        ggreen: "#002A22",
        fadedpee: "#99738E",
        brownie: "#3B0D11",
        placeholderColor: "#FAE8EB"
      },
    },
  },
  plugins: [],
};

