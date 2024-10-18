// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         "fade-in": "fadeIn 0.5s ease-out",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//       },
//       colors: {
//         "colors-background-bg-primary": "#fff",
//         "colors-border-border-secondary": "#eaecf0",
//         "colors-text-text-quarterary-500": "#667085",
//         "content-base-base": "#4b5563",
//         "content-base-main": "#1f2937",
//         "colors-text-text-primary-900": "#101828",
//         primary: "#28621d",
//         "content-inverted-main": "#f3f4f6",
//         royalblue: "#2563eb",
//         "border-base-subtle": "#e5e7eb",
//         "input-text-hint": "#9ca3af",
//         "input-border-light-main": "#d1d5db",
//         "input-text-placeholder": "#6b7280",
//         "input-text-title": "#111827",
//         whitesmoke: {
//           100: "#f7f7f7",
//           200: "#f1f1f1",
//           300: "#f0f0f0",
//         },
//         black: "#000",
//         gray: "rgba(255, 255, 255, 0.6)",
//         "content-base-highlight": "#312e81",
//         silver: "rgba(192, 192, 192, 0.8)",
//         gainsboro: {
//           100: "#e6e6e6",
//           200: "#d9d9d9",
//         },
//         darkgray: {
//           100: "#a0a0a0",
//           200: "#999",
//         },
//         darkolivegreen: "#183b11",
//         dimgray: "#666",
//       },
//       spacing: {
//         "spacing-section-section-horizontal-padding": "16px",
//         "spacing-section-section-vertical-padding": "32px",
//         "spacing-5xl": "40px",
//         "spacing-4xl": "32px",
//         "spacing-container-md": "16px",
//         "spacing-container-xs": "12px",
//         "spacing-container-lg": "32px",
//         "spacing-xl": "16px",
//         "spacing-container-md1": "16px",
//         "spacing-container-xxs": "8px",
//         "spacing-container-xxs1": "8px",
//         "spacing-container-sm": "12px",
//         "component-inner-padding": "12px",
//         "component-trbl-padding": "24px",
//       },
//       fontFamily: {
//         "text-md-regular": "Inter",
//       },
//       borderRadius: {
//         "radius-3xl": "40px",
//         "rounded-lg": "8px",
//         "radius-xs": "4px",
//         rounded: "4px",
//         "radius-2xl": "16px",
//       },
//     },
//     fontSize: {
//       base: "1rem",
//       sm: "0.875rem",
//       xl: "1.25rem",
//       "2xl": "1.5rem",
//       xs: "0.75rem",
//       "3xl": "2rem",
//       "4xl": "2.25rem",
//       "5xl": "3rem",
//       "6xl": "3.75rem",
//       lg: "1.125rem",
//       smi: "0.813rem",
//       inherit: "inherit",
//     },
//     screens: {
//       // mq305: {
//       //   raw: 'screen and (max-width: 305px)',
//       // },
//       // mq87: {
//       //   raw: 'screen and (max-width: 87px)',
//       // },

//       xs: "501px",
//       // => @media (min-width: 501px) { ... }

//       sm: "640px",
//       // => @media (min-width: 640px) { ... }

//       md: "768px",
//       // => @media (min-width: 768px) { ... }

//       lg: "1024px",
//       // => @media (min-width: 1024px) { ... }

//       xl: "1280px",
//       // => @media (min-width: 1280px) { ... }

//       "2xl": "1520px",
//       // => @media (min-width: 1520px) { ... }
//       "3xl": "1650px",
//       // sm: {
//       //   raw: "screen and (max-width: 500px)",
//       // },
//       // tablet: {
//       //   raw: "screen and (min-width: 501px) and (max-width: 767px)",
//       // },
//       // lg: {
//       //   raw: "screen and (min-width: 768px) and (max-width: 1023px)",
//       // },
//       // xl: {
//       //   raw: "screen and (min-width: 1024px) and (max-width: 1280px)",
//       // },
//       // 2xl: {
//       //   raw: ,
//       // },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
//   plugins: [],
// };
// export default config;

import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "dash-accordion-down": "dash-accordion-down 0.2s ease-out",
        "dash-accordion-up": "dash-accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "dash-accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "dash-accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {
        // Public pages colors (unchanged)
        "colors-background-bg-primary": "#fff",
        "colors-border-border-secondary": "#eaecf0",
        "colors-text-text-quarterary-500": "#667085",
        "content-base-base": "#4b5563",
        "content-base-main": "#1f2937",
        "colors-text-text-primary-900": "#101828",
        primary: "#28621d",
        "content-inverted-main": "#f3f4f6",
        royalblue: "#2563eb",
        "border-base-subtle": "#e5e7eb",
        "input-text-hint": "#9ca3af",
        "input-border-light-main": "#d1d5db",
        "input-text-placeholder": "#6b7280",
        "input-text-title": "#111827",
        whitesmoke: {
          100: "#f7f7f7",
          200: "#f1f1f1",
          300: "#f0f0f0",
        },
        black: "#000",
        gray: "rgba(255, 255, 255, 0.6)",
        "content-base-highlight": "#312e81",
        silver: "rgba(192, 192, 192, 0.8)",
        gainsboro: {
          100: "#e6e6e6",
          200: "#d9d9d9",
        },
        darkgray: {
          100: "#a0a0a0",
          200: "#999",
        },
        darkolivegreen: "#183b11",
        dimgray: "#666",

        // Dashboard colors (using dash- prefixed variables)
        "dash-border": "hsl(var(--dash-border))",
        "dash-input": "hsl(var(--dash-input))",
        "dash-ring": "hsl(var(--dash-ring))",
        "dash-background": "hsl(var(--dash-background))",
        "dash-foreground": "hsl(var(--dash-foreground))",
        "dash-primary": {
          DEFAULT: "hsl(var(--dash-primary))",
          foreground: "hsl(var(--dash-primary-foreground))",
        },
        "dash-secondary": {
          DEFAULT: "hsl(var(--dash-secondary))",
          foreground: "hsl(var(--dash-secondary-foreground))",
        },
        "dash-destructive": {
          DEFAULT: "hsl(var(--dash-destructive))",
          foreground: "hsl(var(--dash-destructive-foreground))",
        },
        "dash-muted": {
          DEFAULT: "hsl(var(--dash-muted))",
          foreground: "hsl(var(--dash-muted-foreground))",
        },
        "dash-accent": {
          DEFAULT: "hsl(var(--dash-accent))",
          foreground: "hsl(var(--dash-accent-foreground))",
        },
        "dash-popover": {
          DEFAULT: "hsl(var(--dash-popover))",
          foreground: "hsl(var(--dash-popover-foreground))",
        },
        "dash-card": {
          DEFAULT: "hsl(var(--dash-card))",
          foreground: "hsl(var(--dash-card-foreground))",
        },
      },
      spacing: {
        "spacing-section-section-horizontal-padding": "16px",
        "spacing-section-section-vertical-padding": "32px",
        "spacing-5xl": "40px",
        "spacing-4xl": "32px",
        "spacing-container-md": "16px",
        "spacing-container-xs": "12px",
        "spacing-container-lg": "32px",
        "spacing-xl": "16px",
        "spacing-container-md1": "16px",
        "spacing-container-xxs": "8px",
        "spacing-container-xxs1": "8px",
        "spacing-container-sm": "12px",
        "component-inner-padding": "12px",
        "component-trbl-padding": "24px",
      },
      fontFamily: {
        "text-md-regular": "Inter",
        "dash-sans": ["var(--dash-font-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        "radius-3xl": "40px",
        "rounded-lg": "8px",
        "radius-xs": "4px",
        rounded: "4px",
        "radius-2xl": "16px",
        "dash-lg": "var(--dash-radius)",
        "dash-md": "calc(var(--dash-radius) - 2px)",
        "dash-sm": "calc(var(--dash-radius) - 4px)",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      xs: "0.75rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      lg: "1.125rem",
      smi: "0.813rem",
      inherit: "inherit",
    },
    screens: {
      xs: "501px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1520px",
      "3xl": "1650px",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
