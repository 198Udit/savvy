export default {
  theme: {
    extend: {
      animation: {
        breathe: 'breathe 4s ease-in-out infinite',
        fadeIn: 'fadeIn 1.5s ease forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', strokeOpacity: '0.7' },
          '50%': { transform: 'scale(1.05)', strokeOpacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        mono: ['Anonymous Pro', 'monospace'],
      },
    },
  },
  plugins: [],
};
