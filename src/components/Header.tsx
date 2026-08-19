"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.header 
      className={styles.header} 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
    >
      <motion.div className={styles.headerLeft} variants={itemVariants}>
        <Link href="/">
          <img src="/logo/Mobisa-Logo.png" alt="Mobisa Logo" />
        </Link>
      </motion.div>
      
      <motion.div className={styles.headerCenter} variants={itemVariants}>
        mobisa
      </motion.div>
      
      <motion.nav className={styles.headerRight} variants={itemVariants}>
        <Link href="#work">Work</Link>
        <Link href="#process">Process</Link>
        <Link href="#contact">Contact</Link>
      </motion.nav>
    </motion.header>
  );
}
