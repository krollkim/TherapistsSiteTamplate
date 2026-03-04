'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Star } from 'lucide-react'
import therapistData from '@/lib/therapistData'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
}
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const waHref = `https://wa.me/${therapistData.whatsappNumber}`
  const lines  = therapistData.heroHeadline.split('\n')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cp-100 blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cp-50 blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-16 lg:px-24 pt-28 pb-16 grid md:grid-cols-2 items-center gap-12 lg:gap-20">

        {/* ── Text ── */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show"
            className="inline-flex w-fit items-center gap-2 bg-cp-100 text-cp-700 text-xs font-assistant font-semibold px-4 py-1.5 rounded-full">
            <Star size={12} className="fill-cp-400 text-cp-400" />
            {therapistData.tagline}
          </motion.div>

          <div className="space-y-0">
            {lines.map((line, i) => (
              <motion.h1 key={i} variants={fadeUp} custom={i + 1} initial="hidden" animate="show"
                className={`font-heebo font-bold leading-tight ${
                  i === 0
                    ? 'text-4xl md:text-5xl lg:text-6xl text-charcoal'
                    : 'text-4xl md:text-5xl lg:text-6xl gradient-text'
                }`}>
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p variants={fadeUp} custom={3} initial="hidden" animate="show"
            className="font-assistant text-charcoal/60 text-base md:text-lg leading-relaxed max-w-md">
            {therapistData.heroSubtext}
          </motion.p>

          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show"
            className="flex flex-wrap gap-2">
            {therapistData.specialties.slice(0, 4).map((s) => (
              <span key={s} className="bg-white border border-cp-200 text-cp-700 font-assistant text-xs px-3 py-1 rounded-full shadow-sm">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show"
            className="flex flex-wrap items-center gap-4 pt-2">
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-cp-600 hover:bg-cp-700 text-white font-assistant font-semibold text-base px-7 py-3.5 rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-0.5">
              קביעת פגישה עכשיו
              <ArrowLeft size={17} className="group-hover:-translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="font-assistant text-sm text-charcoal/60 hover:text-cp-600 underline-offset-4 hover:underline transition-colors">
              קראי עוד עלי
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={6} initial="hidden" animate="show"
            className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2 space-x-reverse">
              {['ד','מ','ר','ש'].map((letter) => (
                <div key={letter} className="w-8 h-8 rounded-full border-2 border-white bg-cp-200 flex items-center justify-center text-cp-700 text-xs font-bold">
                  {letter}
                </div>
              ))}
            </div>
            <p className="font-assistant text-xs text-charcoal/50">
              <span className="font-semibold text-charcoal/70">{therapistData.stats.clients}</span> מטופלים הפכו את חייהם
            </p>
          </motion.div>
        </div>

        {/* ── Image ── */}
        <motion.div variants={fadeRight} initial="hidden" animate="show"
          className="relative order-1 md:order-2 flex justify-center">
          <div className="absolute inset-0 m-auto w-[92%] h-[92%] rounded-full bg-cp-100 opacity-60" />
          <div className="absolute inset-0 m-auto w-[108%] h-[108%] rounded-full border-2 border-cp-200 opacity-40" />

          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden shadow-soft-lg ring-4 ring-white">
            <Image src={therapistData.heroImage} alt={therapistData.name}
              fill className="object-cover" priority />
          </div>

          {/* Floating – credentials */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-soft px-4 py-3 max-w-[180px]">
            <p className="font-heebo text-xs text-charcoal/50 mb-0.5">הסמכה</p>
            <p className="font-assistant font-semibold text-cp-700 text-xs leading-snug">
              {therapistData.credentials}
            </p>
          </motion.div>

          {/* Floating – availability */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute top-8 -left-4 md:-left-8 bg-cp-600 text-white rounded-2xl shadow-soft px-4 py-3">
            <p className="font-assistant text-xs font-light opacity-80">פנויה ל</p>
            <p className="font-heebo font-bold text-sm">פגישת היכרות</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-assistant text-xs text-charcoal/30">גלול למטה</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-5 bg-cp-300 rounded-full" />
      </motion.div>
    </section>
  )
}
