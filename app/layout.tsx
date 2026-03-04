import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Heebo, Assistant } from 'next/font/google'
import './globals.css'
import therapistData, { type Palette } from '@/lib/therapistData'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: `${therapistData.name} | ${therapistData.title}`,
  description: therapistData.heroSubtext,
}

/** Maps therapistData.palette → CSS custom properties on <html>.
 *  Components read these via Tailwind's cp-* classes (e.g. bg-cp-600). */
function buildThemeVars(p: Palette): CSSProperties {
  return {
    '--cp-50':  p['50'],  '--cp-100': p['100'], '--cp-200': p['200'],
    '--cp-300': p['300'], '--cp-400': p['400'], '--cp-500': p['500'],
    '--cp-600': p['600'], '--cp-700': p['700'], '--cp-800': p['800'],
    '--cp-900': p['900'],
    '--cp-bg':         p.bg,
    '--cp-grad-start': p.gradStart,
    '--cp-grad-end':   p.gradEnd,
  } as CSSProperties
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${assistant.variable}`}
      style={buildThemeVars(therapistData.palette)}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
