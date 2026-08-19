"use client";

import styles from "./styles.module.css";
import { SITE_DATA } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Statement() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section className={styles.statementHeroSection}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
        }}
        className={styles.statementWrapper}
      >
        <motion.div variants={itemVariants} className={styles.rating}>
          {SITE_DATA.rating}
        </motion.div>
        
        <motion.h1 variants={itemVariants} className={styles.killerStatement}>
          {SITE_DATA.killerStatement}
        </motion.h1>
        
        <motion.p variants={itemVariants} className={styles.killerSub}>
          {SITE_DATA.killerStatementSub}
        </motion.p>
      </motion.div>
    </section>
  );
}
