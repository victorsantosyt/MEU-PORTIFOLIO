import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const { t } = useI18n();

  const projects = [
    {
      title: "Lopesul Wi-Fi Platform",
      desc: t("projects.lopesul.desc"),
      features: [t("projects.lopesul.f1"), t("projects.lopesul.f2"), t("projects.lopesul.f3"), t("projects.lopesul.f4")],
      stack: ["Next.js", "Prisma", "PostgreSQL", "Docker", "MikroTik API"],
    },
    {
      title: "MikroTik Relay API",
      desc: t("projects.relay.desc"),
      features: [t("projects.relay.f1"), t("projects.relay.f2"), t("projects.relay.f3")],
      stack: ["Node.js", "Express", "WireGuard", "Docker"],
    },
    {
      title: "Wi-Fi Payment System",
      desc: t("projects.payment.desc"),
      features: [t("projects.payment.f1"), t("projects.payment.f2"), t("projects.payment.f3")],
      stack: ["Node.js", "PostgreSQL", "MikroTik API"],
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12"
      >
        {t("projects.title")}
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p, i) => (
          <motion.div key={i} variants={item} className="project-card p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-3 text-neon-green">{p.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{p.desc}</p>
            <ul className="text-sm text-foreground/80 mb-6 space-y-1 flex-grow">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-neon-green inline-block" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono bg-background border border-border px-2 py-1 rounded text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
