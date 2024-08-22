/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        myDark: {
          primary: '#6A0DAD',
          'primary-content': '#000000',
          secondary: '#F1E1FF',
          'secondary-content': '#000000',
          accent: '#FFEC9E',
          'accent-content': '#000000',
          neutral: '#808080',
          'neutral-content': '#FFFFFF',
          'base-100': '#000000',
          'base-200': '#000000',
          'base-300': '#000000',
          'base-content': '#F8F8FF',
          info: '#00A7E6',
          'info-content': '#FFFFFF',
          success: '#6ABE45',
          'success-content': '#FFFFFF',
          warning: '#F97316',
          'warning-content': '#FFFFFF',
          error: '#F54748',
          'error-content': '#FFFFFF',
        },
      },
      {
        myLight: {
          primary: '#6A0DAD',
          'primary-content': '#000000',
          secondary: '#F1E1FF',
          'secondary-content': '#000000',
          accent: '#FFEC9E',
          'accent-content': '#000000',
          neutral: '#808080',
          'neutral-content': '#000000',
          'base-100': '#F8F8FF',
          'base-200': '#F0F0F0',
          'base-300': '#E8E8E8',
          'base-content': '#000000',
          info: '#00A7E6',
          'info-content': '#FFFFFF',
          success: '#6ABE45',
          'success-content': '#FFFFFF',
          warning: '#F97316',
          'warning-content': '#FFFFFF',
          error: '#F54748',
          'error-content': '#FFFFFF',
        },
      },
    ],
  },
};
