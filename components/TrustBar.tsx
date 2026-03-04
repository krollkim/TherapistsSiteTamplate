'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import therapistData from '@/lib/therapistData'

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-cp-200 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between">

          <div className="flex items-center gap-2 text-charcoal/40 shrink-0">
            <ShieldCheck size={16} className="text-cp-400" />
            <span className="font-assistant text-xs font-medium whitespace-nowrap">
              חברה ומוסמכת על ידי:
            </span>
          </div>

          <div className="hidden md:block h-8 w-px bg-cp-200 mx-8" />

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10">
            {therapistData.trustLogos.map((logo, i) => (
              <motion.div key={logo.name}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 rounded-xl bg-cp-50 border border-cp-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="font-heebo font-bold text-cp-600 text-xs tracking-tight">
                    {logo.abbr}
                  </span>
                </div>
                <span className="font-assistant text-[10px] text-charcoal/40 text-center max-w-[80px] leading-tight">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats – from config */}
          <div className="hidden lg:flex items-center gap-8 mr-auto">
            {[
              { value: therapistData.stats.experience, label: 'שנות ניסיון' },
              { value: therapistData.stats.clients,    label: 'מטופלים' },
              { value: therapistData.stats.satisfaction, label: 'שביעות רצון' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heebo font-bold text-2xl text-cp-600">{stat.value}</p>
                <p className="font-assistant text-xs text-charcoal/40">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
