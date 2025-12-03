import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4b84',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
} satisfies Config;
