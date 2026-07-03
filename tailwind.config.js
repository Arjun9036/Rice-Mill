/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#d4af37",
        "primary-alt": "#ecb913",
        "background-light": "#f8f8f6",
        "background-beige": "#faf0e6",
        "background-dark": "#221e10",
        "surface": "#1a170b",
        "text": "#1A1A1A",
        "text-inverse": "#FDFBF7",
        "muted": "#8C8C8C",
        "accent": "#E63946"
      },
      fontFamily: {
        "heading": ['Cormorant Garamond', 'serif'],
        "display": ["Inter", "sans-serif"],
        "body": ['Lora', 'serif'],
        "ui": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0px", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
      letterSpacing: {
        'tightest': '-0.02em',
        'widest': '0.1em',
        'wider': '0.05em',
        'button': '0.05em',
        'heading': '-0.02em'
      }
    },
  },
  plugins: [],
}

