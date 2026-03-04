'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react'
import therapistData from '@/lib/therapistData'

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function WhatsAppButton() {
  const href = `https://wa.me/${therapistData.whatsappNumber}?text=${encodeURIComponent(`שלום ${therapistData.name}, אשמח לקבוע פגישת היכרות`)}`
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      aria-label="פנו אלינו בוואטסאפ" className="whatsapp-btn">
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true) }

  const inputCls = 'w-full bg-white border border-cp-200 focus:border-cp-500 focus:ring-2 focus:ring-cp-100 rounded-xl px-4 py-3 font-assistant text-sm text-charcoal placeholder:text-charcoal/30 outline-none transition-all duration-200'

  const waHref = `https://wa.me/${therapistData.whatsappNumber}?text=${encodeURIComponent(`שלום ${therapistData.name}, אשמח לקבוע פגישת היכרות`)}`

  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Info ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }}
            className="flex flex-col gap-8">
            <div>
              <span className="inline-block w-fit bg-cp-100 text-cp-700 font-assistant font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
                צור קשר
              </span>
              <h2 className="font-heebo font-bold text-3xl md:text-4xl text-charcoal leading-tight">
                מוכנה להתחיל?<br />
                <span className="gradient-text">בואי נדבר.</span>
              </h2>
              <p className="mt-4 font-assistant text-charcoal/55 text-base leading-relaxed">
                הצעד הראשון הוא תמיד הכי קשה – אבל אני כאן כדי להקל עליו. מלאי את הטופס ואחזור אלייך תוך 24 שעות.
              </p>
            </div>

            <ul className="space-y-5">
              {[
                { icon: MessageCircle, label: 'וואטסאפ', value: `+${therapistData.whatsappNumber.replace(/^972/, '0')}`, href: waHref },
                { icon: Mail,          label: 'אימייל',  value: therapistData.email, href: `mailto:${therapistData.email}` },
                { icon: MapPin,        label: 'כתובת',   value: therapistData.address, href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cp-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={17} className="text-cp-600" />
                  </div>
                  <div>
                    <p className="font-assistant text-xs text-charcoal/40 font-medium">{label}</p>
                    <a href={href} className="font-assistant text-sm text-charcoal/80 hover:text-cp-600 transition-colors">{value}</a>
                  </div>
                </li>
              ))}
            </ul>

            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebe59] text-white font-assistant font-semibold px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all w-fit">
              {WA_ICON}
              שלחי הודעה בוואטסאפ
            </a>
          </motion.div>

          {/* ── Form ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div className="bg-white rounded-3xl shadow-soft p-8 border border-cp-100">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-cp-100 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-cp-600" />
                  </div>
                  <h3 className="font-heebo font-bold text-xl text-charcoal">תודה! קיבלנו את הודעתך</h3>
                  <p className="font-assistant text-sm text-charcoal/55">אחזור אלייך בהקדם האפשרי, תוך 24 שעות.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-heebo font-bold text-xl text-charcoal mb-2">השאירי פרטים</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-assistant text-xs text-charcoal/60 font-medium">שם מלא *</label>
                      <input type="text" required placeholder="שם מלא" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-assistant text-xs text-charcoal/60 font-medium">טלפון *</label>
                      <input type="tel" required placeholder="05X-XXX-XXXX" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-assistant text-xs text-charcoal/60 font-medium">אימייל</label>
                    <input type="email" placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-assistant text-xs text-charcoal/60 font-medium">במה אוכל לעזור?</label>
                    <textarea rows={4} placeholder="ספרי לי בקצרה מה מביא אותך אלי..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputCls} resize-none`} />
                  </div>
                  <button type="submit"
                    className="group mt-2 flex items-center justify-center gap-2.5 bg-cp-600 hover:bg-cp-700 text-white font-assistant font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md">
                    שלחי פנייה
                    <Send size={15} className="group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="font-assistant text-xs text-charcoal/30 text-center mt-1">פרטייך שמורים בסודיות מוחלטת</p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
      <WhatsAppButton />
    </section>
  )
}
