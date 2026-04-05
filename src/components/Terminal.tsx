import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

const Terminal = () => {
  const { t } = useI18n();
  const [visibleLines, setVisibleLines] = useState(0);

  const lines = [
    { key: "terminal.init", color: "text-muted-foreground", delay: 0 },
    { key: "terminal.node", color: "text-neon-green", delay: 600 },
    { key: "terminal.mikrotik", color: "text-neon-green", delay: 1200 },
    { key: "terminal.payment", color: "text-neon-green", delay: 1800 },
    { key: "terminal.relay", color: "text-neon-green", delay: 2400 },
  ];

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), lines[i].delay + 500)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="px-6 pb-20 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-lg overflow-hidden border border-border bg-background/50 backdrop-blur-sm font-mono text-left text-sm shadow-2xl"
      >
        <div className="bg-surface px-4 py-2.5 border-b border-border flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
          <span className="ml-3 text-xs text-muted-foreground">terminal</span>
        </div>
        <div className="p-6 space-y-2 min-h-[180px]">
          {lines.slice(0, visibleLines).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={line.color}
            >
              {t(line.key)}
            </motion.p>
          ))}
          {visibleLines >= lines.length && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-foreground"
            >
              <span className="animate-typing-blink">_</span> {t("terminal.ready")}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Terminal;
