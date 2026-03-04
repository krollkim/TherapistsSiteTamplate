import Navbar        from '@/components/Navbar'
import Hero           from '@/components/Hero'
import TrustBar       from '@/components/TrustBar'
import ServicesGrid   from '@/components/ServicesGrid'
import AboutSection   from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import therapistData  from '@/lib/therapistData'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutSection />
      <ContactSection />

      <footer className="bg-cp-900 text-cp-200 py-8 px-6 text-center">
        <p className="font-assistant text-sm">
          © {new Date().getFullYear()} כל הזכויות שמורות ל{therapistData.name}, {therapistData.title}
        </p>
        <p className="font-assistant text-xs text-cp-400 mt-1">
          הטיפול מתנהל בסודיות מלאה בהתאם לחוק הגנת הפרטיות
        </p>
      </footer>
    </main>
  )
}
