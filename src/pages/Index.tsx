import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import EngineeringHighlights from "@/components/EngineeringHighlights";
import Architecture from "@/components/Architecture";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { I18nProvider } from "@/lib/i18n";

const Index = () => {
  return (
    <I18nProvider>
      <div className="relative min-h-screen">
        <NetworkBackground />
        <div className="relative z-10">
          <LanguageSwitcher />
          <Hero />
          <Terminal />
          <TechStack />
          <EngineeringHighlights />
          <Projects />
          <Architecture />
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
};

export default Index;
