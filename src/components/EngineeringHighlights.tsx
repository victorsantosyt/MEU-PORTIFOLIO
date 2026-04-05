import { motion } from "framer-motion";
import { Cpu, Network, Server } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const EngineeringHighlights = () => {
  const { t } = useI18n();

  const highlights = [
    {
      icon: Cpu,
      title: t("highlights.arch.title"),
      desc: t("highlights.arch.desc"),
    },
    {
      icon: Network,
      title: t("highlights.net.title"),
      desc: t("highlights.net.desc"),
    },
    {
      icon: Server,
      title: t("highlights.infra.title"),
      desc: t("highlights.infra.desc"),
    },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        {t("highlights.title")}
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {highlights.map((h, i) => (
          <motion.div key={i} variants={item} className="glass-card rounded-2xl p-8 text-center">
            <h.icon className="w-8 h-8 text-neon-green mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-3">{h.title}</h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EngineeringHighlights;
