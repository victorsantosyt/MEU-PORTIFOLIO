import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const techs = [
  "Node.js", "Next.js", "React", "TypeScript", "PostgreSQL",
  "Prisma", "Docker", "Linux", "MikroTik", "WireGuard",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const TechStack = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        {t("tech.title")}
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
      >
        {techs.map((tech) => (
          <motion.div
            key={tech}
            variants={item}
            className="glass-card rounded-xl p-4 text-center font-mono text-sm text-neon-green cursor-default"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
