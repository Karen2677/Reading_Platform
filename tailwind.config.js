/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 主色调 - 墨绿色系
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1aa',
          400: '#5bb380',
          500: '#3a9960',
          600: '#2d7a4c',
          700: '#26623f',
          800: '#1f4f34',
          900: '#1a412c',
          950: '#0d2318',
        },
        // 深绿色 - 用于文字和重要元素
        forest: {
          50: '#f0f7f4',
          100: '#dbeee3',
          200: '#b9dcc9',
          300: '#8cc4a7',
          400: '#5ba582',
          500: '#3a8965',
          600: '#2a6e50',
          700: '#225842',
          800: '#1d4636',
          900: '#18392d',
          950: '#0c1f18',
        },
        // 橙色系 - 用于按钮和强调
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // 米白色背景
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf4e8',
          300: '#f5ead5',
          400: '#eedbb8',
          500: '#e4c794',
          600: '#d6b071',
          700: '#c69555',
          800: '#a37749',
          900: '#84613e',
          950: '#473220',
        },
        // 保留原有的蓝色作为辅助色
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};