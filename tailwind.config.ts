import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'mentorShadow': '0px 4px 20px rgba(110, 127, 185, 0.1)',
      },
      inset: {
        '54%': '54%',
        '40%': '40%',
      },
      colors: {
        primary: "#FF4D4D",
        secondary: "#FFA500",
        bodyBg: "#0A0A0A",
        darkmode: "#1A1A1A",
        tablebg: "#2A2A2A",
        border: "#333333",
        lightblue: "#4D79FF",
      },
      blur: {
        390: '390px',
        
      },
      backgroundImage: {
        "banner-image": "linear-gradient(90deg,#FF4D4D80,#FFA50080 97.15%)",
        "simple-bg": "linear-gradient(90deg,rgba(255,77,77,.1),rgba(255,165,0,.1) 97.15%)",
        "arrow-bg": "url('/images/simple/arrow-bg.png')",
        "newsletter": "url('/images/newsletter/hands.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
