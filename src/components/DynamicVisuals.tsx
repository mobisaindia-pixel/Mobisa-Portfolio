"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export default function DynamicVisuals() {
  const [mutedUgc, setMutedUgc] = useState(true);
  const [mutedAi, setMutedAi] = useState(true);

  return (
    <section className={styles.dynamicSection}>
      <motion.h2
        className={styles.sectionHeading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
      >
        dynamic <em>visuals.</em>
      </motion.h2>

      <motion.div
        className={styles.videoGrid}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left — UGC Ad (portrait, capped height) */}
        <div className={styles.videoCard}>
          <div className={styles.videoWrapper}>
            <video
              src="/Videos/ugc_elaria.mp4"
              autoPlay
              muted={mutedUgc}
              loop
              playsInline
              className={styles.video}
            />
            <button
              className={styles.muteButton}
              onClick={() => setMutedUgc((m) => !m)}
              aria-label={mutedUgc ? "Unmute UGC ad" : "Mute UGC ad"}
            >
              {mutedUgc ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
          <p className={styles.videoLabel}>ugc ads</p>
        </div>

        {/* Right — AI Ad (landscape, same height) */}
        <div className={styles.videoCard}>
          <div className={styles.videoWrapper}>
            <video
              src="/Videos/campbell_ai.mp4"
              autoPlay
              muted={mutedAi}
              loop
              playsInline
              className={styles.video}
            />
            <button
              className={styles.muteButton}
              onClick={() => setMutedAi((m) => !m)}
              aria-label={mutedAi ? "Unmute AI ad" : "Mute AI ad"}
            >
              {mutedAi ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
          <p className={styles.videoLabel}>ai ads</p>
        </div>
      </motion.div>
    </section>
  );
}
