/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [],
  theme: {
    screens: {
      "5xs": "320px",
      // => @media (min-width: 320px) { for iphone 5 }

      "4xs": "360px",
      // => @media (min-width: 320px) { for Samsung phone }

      "3xs": "360px",
      // => @media (min-width: 380px) { ... }

      "2xs": "380px",
      // => @media (min-width: 380px) { ... }

      xs: "512px",
      // => @media (min-width: 512px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdx1: "800px",
      // => @media (min-width: 800px) { ... }
      mdx2: "850px",
      // => @media (min-width: 850px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }

      "4xl": "1920px",
      // => @media (min-width: 1920px) { Full hd screens }
      "5xl": "2560px",
      // => @media (min-width: 2560px) { for 2k 27" screens }
    },
    fontFamily: {
      body: ["Roboto"],
      diplay: ["Roboto"],
      sans: ["Roboto"],
      serif: ["Roboto"],
      poppin: ["Poppins"],
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        opaq: "0 4px 16px 6px rgba(0,0,0,0.4)",
        full: "0 3px 1px -2px rgba(0,0,0, 0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12) ",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
