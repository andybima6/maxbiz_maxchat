import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  safelist: [
    "animate-fade-in",
    "animate-scale-in",
    "animate-slide-in-left",
    "animate-slide-in-right",
    "animate-bounce-in",
    "animate-rotate-in",
    "animate-zoom-in",
    "animate-slide-in-up",
    "animate-slide-in-down",
    "animate-pulse-in",
    "animate-slide-in-up-close",
    "animate-slide-merge-left",
    "animate-slide-merge-right",
    "animate-slide-merge-up",
    "animate-slide-merge-down",
    "opacity-0",
    "opacity-100",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(var(--secondary-light))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          darker: "hsl(var(--muted-darker))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          green: "hsl(var(--accent-green))",
          "green-foreground": "hsl(var(--accent-green-foreground))",
          orange: "hsl(var(--accent-orange))",
          "orange-foreground": "hsl(var(--accent-orange-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "scale-in": "scale-in 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "slide-in-up": "slide-in-up 0.8s ease-out forwards",
        "slide-in-down": "slide-in-down 0.8s ease-out forwards",
        "bounce-in": "bounce-in 1s ease-out forwards",
        "rotate-in": "rotate-in 0.8s ease-out forwards",
        "zoom-in": "zoom-in 0.8s ease-out forwards",
        "pulse-in": "pulse-in 0.8s ease-in-out forwards",
        "slide-in-up-close": "slide-in-up-close 0.8s ease-in forwards",
        "slide-merge-left": "slide-merge-left 0.8s ease-in-out forwards",
        "slide-merge-right": "slide-merge-right 0.8s ease-in-out forwards",
        "slide-merge-up": "slide-merge-up 0.8s ease-in-out forwards",
        "slide-merge-down": "slide-merge-down 0.8s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-up": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-down": {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "50%": { transform: "translateY(-10px)", opacity: "0.7" },
          "70%": { transform: "translateY(5px)", opacity: "0.9" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "rotate-in": {
          "0%": { transform: "rotate(-90deg)", opacity: "0" },
          "100%": { transform: "rotate(0)", opacity: "1" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "pulse-in": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        "slide-in-up-close": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "slide-merge-left": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-merge-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-merge-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-merge-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-glass": "var(--gradient-glass)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // keyframes: {
      //   "accordion-down": {
      //     from: {
      //       height: "0",
      //     },
      //     to: {
      //       height: "var(--radix-accordion-content-height)",
      //     },
      //   },
      //   "accordion-up": {
      //     from: {
      //       height: "var(--radix-accordion-content-height)",
      //     },
      //     to: {
      //       height: "0",
      //     },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
