import {
  Header,
  HeroSection,
  WhyUsSection,
  ProgramsSection,
  MethodologySection,
  OutcomesSection,
  AudienceSection,
  FounderSection,
  PartnersSection,
  ContactSection,
  Footer,
} from '@/components/sections';

/**
 * Landing Page - Oasis Al-Ibda
 * Main page that combines all sections
 */
export default function Home() {
  return (
    <>
      <Header />
      <main >
        <HeroSection />
        <WhyUsSection />
        <ProgramsSection />
        <MethodologySection />
        <OutcomesSection />
        <AudienceSection />
        <FounderSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
