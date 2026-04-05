import { motion } from "framer-motion";
import { ArrowLeft, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NetworkBackground from "@/components/NetworkBackground";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { I18nProvider, useI18n } from "@/lib/i18n";

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.23c8.248.054 14.474 2.452 18.502 7.13 2.932 3.405 4.893 8.11 5.864 14.05-7.314-1.244-15.224-1.626-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.35-22.809-.169-40.06-7.484-51.275-21.741C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 96c.223 28.685 6.88 51.516 19.787 67.92 14.504 18.438 36.094 27.886 64.196 28.08h.113c24.925-.168 42.426-6.713 56.88-21.156 18.513-18.501 17.951-41.533 11.866-55.764-4.364-10.17-12.663-18.457-24.306-23.892Zm-42.659 38.075c-10.423.585-21.24-4.098-21.783-14.192-.4-7.48 5.322-15.82 22.498-16.822 1.968-.114 3.905-.169 5.814-.169 6.076 0 11.754.558 16.95 1.598-1.927 24.008-13.58 28.959-23.479 29.585Z"/>
  </svg>
);

const AboutContent = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <div className="relative z-10">
        <LanguageSwitcher />

        <div className="pt-8 px-6 max-w-5xl mx-auto">
          <Button
            variant="neon-outline"
            size="sm"
            className="gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>

        <section className="pt-10 pb-8 px-6 max-w-5xl mx-auto flex flex-col items-center gap-8">

          {/* Foto quadrada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-72 md:w-96 aspect-square"
          >
            <img
              src="/images/imagen.jpg"
              alt="Victor Santos"
              className="w-full h-full rounded-2xl object-cover"
              style={{ boxShadow: "0 0 32px rgba(57,255,20,0.08)" }}
            />
          </motion.div>

          {/* Biografia */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            <div className="project-card p-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-foreground text-center">
                {/* nome */}
              </h1>
              <p className="text-neon-green font-mono text-sm mb-6 tracking-widest uppercase text-center">
                {/* subtítulo */}
              </p>
              <p className="text-foreground/80 text-base leading-relaxed mb-4">{t("about.bio1")}</p>
              <p className="text-foreground/80 text-base leading-relaxed mb-4">{t("about.bio2")}</p>
              <p className="text-foreground/80 text-base leading-relaxed">{t("about.bio3")}</p>
            </div>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="project-card px-10 py-6 inline-flex items-center gap-8"
          >
            <a
              href="https://www.instagram.com/victorsantos.dev_?igsh=MXV5a3l6Yjh3MmxtZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors group"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-victor-santos-lima-42a751210?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.threads.com/@victorsantos.dev_?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-green transition-colors group"
            >
              <ThreadsIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

        </section>

        <Footer />
      </div>
    </div>
  );
};

const About = () => (
  <I18nProvider>
    <AboutContent />
  </I18nProvider>
);

export default About;
