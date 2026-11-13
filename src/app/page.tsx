import Hero from '@/components/home/Hero'
import ServicesSection from '@/components/home/ServicesSection'
import AudienceSection from '@/components/home/AudienceSection'
import SpecialtySection from '@/components/home/SpecialtySection'
import PlatformSection from '@/components/home/PlatformSection'
import EducationSection from '@/components/home/EducationSection'
import TeamSection from '@/components/home/TeamSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CtaBanner from '@/components/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AudienceSection />
      <SpecialtySection />
      <PlatformSection />
      <EducationSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
