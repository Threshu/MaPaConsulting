import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4b84',
          50: '#f0f6fb',
          100: '#e0ecf7',
          200: '#c1d9ef',
          300: '#92bde3',
          400: '#5c9dd4',
          500: '#1a4b84',
          600: '#2867a4',
          700: '#215285',
          800: '#1e476f',
          900: '#1e3c5d',
          950: '#14273e',
        },

        // Neutral/Gray Scale
        title: '#2b2b2b',
        body: '#4a4a4a',

        // State Colors
        success: '#2e7d32',
        info: '#0277bd',
        warning: '#f57f17',
        error: '#c62828',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        'xs': ['0.813rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['2.25rem', { lineHeight: '1.3' }],
        '4xl': ['3rem', { lineHeight: '1.2' }],
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },

      maxWidth: {
        'container': '1250px',
      },
    },
  },
} satisfies Config;
