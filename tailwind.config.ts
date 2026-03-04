import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Dynamic theme palette ─────────────────────────────────────────────
        // Values are CSS custom properties injected by layout.tsx from therapistData.palette
        // Usage: bg-cp-100, text-cp-600, hover:bg-cp-700, border-cp-200, etc.
        cp: {
          50:  'var(--cp-50)',
          100: 'var(--cp-100)',
          200: 'var(--cp-200)',
          300: 'var(--cp-300)',
          400: 'var(--cp-400)',
          500: 'var(--cp-500)',
          600: 'var(--cp-600)',
          700: 'var(--cp-700)',
          800: 'var(--cp-800)',
          900: 'var(--cp-900)',
        },
        // Page background – driven by palette.bg
        cream:    'var(--cp-bg)',
        // Static dark text – never changes
        charcoal: '#2c2c2c',
      },
      fontFamily: {
        heebo:     ['var(--font-heebo)', 'sans-serif'],
        assistant: ['var(--font-assistant)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft':    '0 4px 24px rgba(0,0,0,0.06)',
        'soft-lg': '0 8px 48px rgba(0,0,0,0.10)',
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  },
  plugins: [],
}
export default config
