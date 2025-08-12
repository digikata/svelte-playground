import type { Config } from 'tailwindcss';

const config = {
  // With Tailwind v4 + @tailwindcss/vite, content scanning is automatic.
  // Keeping this is harmless, but optional.
  content: ['./src/**/*.{html,js,svelte,ts}'],
  // DaisyUI v5 options are read from here when using the CSS @plugin directive
  // in app.css. No need to add daisyui to the plugins array in v4.
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false
  }
} satisfies Config & { daisyui?: Record<string, unknown> };

export default config;
