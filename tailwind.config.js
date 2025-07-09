export default {
  theme: {
    extend: {
      animation: {
        breathe: "breathe 4s ease-in-out infinite",
        fadeIn: "fadeIn 1.7s ease forwards",
        neonPulse: "neonPulse 3s ease-in-out infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", strokeOpacity: "0.7" },
          "50%": { transform: "scale(1.05)", strokeOpacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        neonPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 2px #00f0ff) drop-shadow(0 0 4px #6b73ff)",
            strokeOpacity: "0.9",
          },
          "50%": {
            transform: "scale(1.02)",
            filter: "drop-shadow(0 0 3px #00f0ff) drop-shadow(0 0 6px #6b73ff)",
            strokeOpacity: "1",
          },
        },
      },
      fontFamily: {
        mono: ["Anonymous Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
