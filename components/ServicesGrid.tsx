'use client'

import { motion } from 'framer-motion'
import { Brain, Heart, Users, Video, Leaf, Sparkles, Gem, Zap, Compass, Wind, Layout, Smile, UserCheck, Home, Shield, Anchor, ShieldCheck, UserPlus, ArrowLeft, type LucideProps } from 'lucide-react'
import therapistData from '@/lib/therapistData'
import React from 'react'

const iconMap: Record<string, React.FC<LucideProps>> = {
  Brain, Heart, Users, Video, Leaf, Sparkles, Gem, Zap, Compass, Wind, Layout, Smile,
  UserCheck, Home, Shield, Anchor, ShieldCheck, UserPlus,
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ServicesGrid() {
  return (
    <section id="services" className="section-pad bg-cream">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <span className="inline-block bg-cp-100 text-cp-700 font-assistant font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            תחומי טיפול
          </span>
          <h2 className="font-heebo font-bold text-3xl md:text-4xl text-charcoal leading-tight">
            כיצד אני יכולה<br />
            <span className="gradient-text">לעזור לך?</span>
          </h2>
          <p className="mt-4 font-assistant text-charcoal/55 max-w-xl mx-auto text-base leading-relaxed">
            גישה אינטגרטיבית המשלבת שיטות טיפול מוכחות, מותאמות לצרכייך הייחודיים.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapistData.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            return (
              <motion.div key={service.title} variants={cardVariants} custom={i}
                initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-7 shadow-soft hover:shadow-soft-lg border border-cp-100 hover:border-cp-200 transition-all duration-300 cursor-default overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cp-50/0 to-cp-100/0 group-hover:from-cp-50 group-hover:to-cp-100/40 transition-all duration-300 rounded-2xl opacity-60" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cp-100 group-hover:bg-cp-200 flex items-center justify-center mb-5 transition-colors">
                    <Icon size={22} className="text-cp-600" />
                  </div>
                  <h3 className="font-heebo font-bold text-lg text-charcoal mb-2">{service.title}</h3>
                  <p className="font-assistant text-sm text-charcoal/55 leading-relaxed">{service.description}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-cp-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-assistant text-xs font-semibold">פרטים נוספים</span>
                    <ArrowLeft size={13} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
