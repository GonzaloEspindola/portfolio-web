/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app.vue'],
  theme: {
    extend: {
      colors: {
        "badge-default": "border-white/40 bg-white/5 hover:bg-white/10"
      },
      fontFamily: {
        Megrim: ["Megrim", "sans-serif"]
      },
      "animation": {
        "background-shine": "background-shine 3s linear infinite",
      },
      "keyframes": {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        },
      },
    }
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",
          "secondary": "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          "accent": "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          "neutral": "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#3d4451",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          "info": "#66c6ff",
          "success": "#22c55e",
          "warning": "#EAB308",
          "error": "#ff6f6f"
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

