import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ObjectiveSection from '@/components/portfolio/ObjectiveSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import LanguagesSection from '@/components/portfolio/LanguagesSection';
import AchievementsSection from '@/components/portfolio/AchievementsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ObjectiveSection />
          <CertificationsSection />
          <SkillsSection />
          <ProjectsSection />
          <LanguagesSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
