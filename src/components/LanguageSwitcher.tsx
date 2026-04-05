import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
  const { locale, setLocale, availableLocales } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-surface text-muted-foreground hover:text-neon-green hover:border-neon-green/50 transition-colors text-xs font-mono"
      >
        <Globe className="w-3.5 h-3.5" />
        {locale.toUpperCase()}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 rounded-md border border-border bg-surface shadow-neon-sm overflow-hidden"
          >
            {availableLocales.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-xs font-mono transition-colors ${
                  locale === l.code
                    ? "text-neon-green bg-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
