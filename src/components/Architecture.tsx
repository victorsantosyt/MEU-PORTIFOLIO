import { motion } from "framer-motion";
import React from "react";
import { useI18n } from "@/lib/i18n";

const Architecture = () => {
  const { t } = useI18n();

  const nodes = [
    t("arch.user"),
    t("arch.payment"),
    t("arch.backend"),
    t("arch.relay"),
    "WireGuard",
    "MikroTik Router",
  ];

  return (
    <section className="py-24 bg-surface/30 border-y border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-16 font-mono tracking-tight text-muted-foreground"
        >
          {t("arch.title")}
        </motion.h2>
        <div className="flex flex-col items-center gap-0">
          {nodes.map((node, i) => (
            <React.Fragment key={node}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="arch-node w-full max-w-xs py-4 rounded-md text-sm text-neon-green shadow-neon-sm text-center"
              >
                {node}
              </motion.div>
              {i < nodes.length - 1 && (
                <div className="h-8 w-px bg-gradient-to-b from-neon-green to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
