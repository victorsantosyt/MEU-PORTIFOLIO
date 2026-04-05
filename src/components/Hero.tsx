import { motion } from "framer-motion";
import { ExternalLink, Mail, MessageCircle, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground" style={{ textWrap: "balance" }}>
          Victor Santos
        </h1>
        <p className="text-neon-green font-mono text-sm mb-4 tracking-widest uppercase">
          {t("hero.subtitle")}
        </p>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          {t("hero.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/victorsantosyt" target="_blank" rel="noopener noreferrer">
            <Button variant="neon" size="lg" className="gap-2">
              GitHub <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          <a href="mailto:victordev.tec@gmail.com">
            <Button variant="neon-outline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" /> E-mail
            </Button>
          </a>
          <a href="https://wa.me/5566981309903?text=Ol%C3%A1%20victor%20santos%2C%20vim%20atravez%20do%20seu%20portif%C3%B3lio" target="_blank" rel="noopener noreferrer">
            <Button variant="neon-outline" size="lg" className="gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </Button>
          </a>
          <Link to="/sobre">
            <Button variant="neon-outline" size="lg" className="gap-2">
              <User className="w-4 h-4" /> Sobre mim
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
