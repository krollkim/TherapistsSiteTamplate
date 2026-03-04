'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Clock, CheckCircle2, MapPin, type LucideProps } from 'lucide-react'
import React from 'react'
import therapistData from '@/lib/therapistData'

const iconMap: Record<string, React.FC<LucideProps>> = {
  Award, Clock, CheckCircle2, MapPin,
}

export default function AboutSection() {
  // highlights from config + address always appended as last item
  const highlights = [
    ...therapistData.highlights.map((h) => ({
      Icon: iconMap[h.icon] ?? CheckCircle2,
      label: h.label,
    })),
    { Icon: MapPin, label: therapistData.address },
  ]

  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Image ── */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center">
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-cp-50 rounded-2xl -z-0" />

            <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-soft-lg ring-4 ring-white">
              <Image src={therapistData.profileImage}
                alt={`${therapistData.name} – ${therapistData.title}`}
                fill className="object-cover" />
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute top-6 -left-4 md:-left-8 z-20 bg-cp-600 text-white rounded-2xl px-5 py-4 shadow-soft text-center">
              <p className="font-heebo font-bold text-3xl leading-none">{therapistData.stats.experience}</p>
              <p className="font-assistant text-xs mt-1 opacity-80">שנות ניסיון</p>
            </motion.div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6">
            <span className="inline-block w-fit bg-cp-100 text-cp-700 font-assistant font-semibold text-xs px-4 py-1.5 rounded-full">
              אודותי
            </span>

            <h2 className="font-heebo font-bold text-3xl md:text-4xl text-charcoal leading-tight">
              {therapistData.name}
              <br />
              <span className="gradient-text text-2xl font-medium">{therapistData.title}</span>
            </h2>

            <div className="space-y-4">
              {therapistData.aboutText.map((para, i) => (
                <p key={i} className="font-assistant text-charcoal/65 text-base leading-relaxed">{para}</p>
              ))}
            </div>

            <ul className="space-y-3 pt-2">
              {highlights.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cp-100 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-cp-600" />
                  </div>
                  <span className="font-assistant text-sm text-charcoal/70">{label}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-cp-200">
              <p className="font-assistant text-cp-600 italic text-xl"
                style={{ fontFamily: "'Dancing Script', cursive" }}>
                {therapistData.name}
              </p>
              <p className="font-assistant text-xs text-charcoal/40 mt-1">{therapistData.credentials}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
