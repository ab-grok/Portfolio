module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(220, 15%, 20%)",
        input: "hsl(220, 15%, 20%)",
        ring: "hsl(220, 85%, 52%)",
        background: "hsl(220, 15%, 8%)",
        foreground: "hsl(0, 0%, 94%)",
        primary: {
          DEFAULT: "hsl(220, 85%, 52%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 85%, 62%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(280, 85%, 60%)",
          foreground: "hsl(0, 0%, 99%)",
        },
        neutral: {
          DEFAULT: "hsl(220, 15%, 8%)",
          foreground: "hsl(0, 0%, 94%)",
        },
        success: "hsl(160, 65%, 45%)",
        warning: "hsl(45, 100%, 55%)",
        gray: {
          50: "hsl(220, 10%, 97%)",
          100: "hsl(220, 10%, 90%)",
          200: "hsl(220, 9%, 75%)",
          300: "hsl(220, 8%, 60%)",
          400: "hsl(220, 8%, 50%)",
          500: "hsl(220, 10%, 40%)",
          600: "hsl(220, 12%, 30%)",
          700: "hsl(220, 15%, 20%)",
          800: "hsl(220, 22%, 12%)",
          900: "hsl(220, 25%, 6%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(220, 15%, 20%)",
          foreground: "hsl(0, 0%, 70%)",
        },
        accent: {
          DEFAULT: "hsl(220, 15%, 20%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        popover: {
          DEFAULT: "hsl(220, 22%, 12%)",
          foreground: "hsl(0, 0%, 94%)",
        },
        card: {
          DEFAULT: "hsl(220, 22%, 12%)",
          foreground: "hsl(0, 0%, 94%)",
        },
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(200, 90%, 55%), hsl(280, 85%, 65%))',
        'gradient-2': 'linear-gradient(135deg, hsl(170, 95%, 55%), hsl(220, 85%, 60%))',
        'button-border-gradient': 'linear-gradient(90deg, hsl(200, 90%, 55%), hsl(280, 85%, 65%))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "neon-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
