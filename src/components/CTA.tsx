"use client";

import styles from "./styles.module.css";
import { SITE_DATA } from "../data/portfolio";
import { motion } from "framer-motion";

export default function CTA() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="contact" className={styles.ctaSection}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <motion.h2 variants={itemVariants} className={styles.ctaHeadline}>
          {SITE_DATA.ctaHeadline}
        </motion.h2>
        <motion.a href="mailto:team@mobisa.in" className={styles.ctaButton}>
          <span>{SITE_DATA.ctaButton}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          <span style={{ fontWeight: 400, opacity: 0.8 }}>team@mobisa.in</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
