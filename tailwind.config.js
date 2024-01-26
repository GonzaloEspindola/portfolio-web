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
          "error": "#ff6f6f",
          ".badge-nuxt": {
            "border-color": "rgba(34, 197, 94, 0.6)",
            "background-color": "rgba(34, 197, 94, 0.05)",
            "color": "white"
          },
          ".badge-nuxt:hover": {
            "background-color": "rgba(34, 197, 94, 0.1)"
          },
          ".badge-nuxt": {
            "border-color": "rgba(65, 184, 131, 0.6)",
            "background-color": "rgba(65, 184, 131, 0.05)",
            "color": "white"
          },
          ".badge-nuxt:hover": {
            "background-color": "rgba(65, 184, 131, 0.1)"
          },

          // Clase .badge-typescript
          ".badge-typescript": {
            "border-color": "rgba(49, 120, 198, 0.6)",
            "background-color": "rgba(49, 120, 198, 0.05)",
            "color": "white"
          },
          ".badge-typescript:hover": {
            "background-color": "rgba(49, 120, 198, 0.1)"
          },

          // Clase .badge-tailwind
          ".badge-tailwind": {
            "border-color": "rgba(56, 189, 248, 0.6)",
            "background-color": "rgba(56, 189, 248, 0.05)",
            "color": "white"
          },
          ".badge-tailwind:hover": {
            "background-color": "rgba(56, 189, 248, 0.1)"
          },

          // Clase .badge-mongodb
          ".badge-mongodb": {
            "border-color": "rgba(0, 237, 100, 0.6)",
            "background-color": "rgba(0, 237, 100, 0.05)",
            "color": "white"
          },
          ".badge-mongodb:hover": {
            "background-color": "rgba(0, 237, 100, 0.1)"
          },

          // Clase .badge-aws
          ".badge-aws": {
            "border-color": "rgba(255, 153, 0, 0.6)",
            "background-color": "rgba(255, 153, 0, 0.05)",
            "color": "white"
          },
          ".badge-aws:hover": {
            "background-color": "rgba(255, 153, 0, 0.1)"
          },

          // Clase .badge-loopback
          ".badge-loopback": {
            "border-color": "rgba(63, 93, 255, 0.6)",
            "background-color": "rgba(63, 93, 255, 0.05)",
            "color": "white"
          },
          ".badge-loopback:hover": {
            "background-color": "rgba(63, 93, 255, 0.1)"
          },

          // Clase .badge-mysql
          ".badge-mysql": {
            "border-color": "rgba(62, 110, 147, 0.6)",
            "background-color": "rgba(62, 110, 147, 0.05)",
            "color": "white"
          },
          ".badge-mysql:hover": {
            "background-color": "rgba(62, 110, 147, 0.1)"
          },
          // Clase .badge-sybase
          ".badge-sybase": {
            "border-color": "rgba(63, 93, 255, 0.6)",
            "background-color": "rgba(63, 93, 255, 0.05)",
            "color": "white"
          },
          ".badge-sybase:hover": {
            "background-color": "rgba(63, 93, 255, 0.1)"
          },
          // Clase .badge-nest
          ".badge-nest": {
            "border-color": "rgba(226, 31, 80, 0.6)",
            "background-color": "rgba(226, 31, 80, 0.05)",
            "color": "white"
          },
          ".badge-nest:hover": {
            "background-color": "rgba(226, 31, 80, 0.1)"
          },
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

