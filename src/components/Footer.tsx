import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          {t("footer.built")} <span className="text-foreground font-medium">Victor Santos</span>
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/victorsantosyt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-green transition-colors text-sm flex items-center gap-1"
          >
            GitHub <ExternalLink className="w-3 h-3" />
          </a>
          <Link to="/" className="text-muted-foreground hover:text-neon-green transition-colors text-sm">
            {t("footer.portfolio")}
          </Link>
          <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors text-sm">
            {t("footer.resume")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
