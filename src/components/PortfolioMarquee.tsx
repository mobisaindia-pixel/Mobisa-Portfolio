"use client";

import styles from "./styles.module.css";
import { portraitWorksRow1, portraitWorksRow2 } from "../data/portfolio";

export default function PortfolioMarquee() {
  return (
    <section id="work" className={styles.portfolioSection}>
      <h2 className={styles.sectionHeading}>static <em>visuals.</em></h2>
      
      {/* Row 01 (Right to Left) */}
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack} style={{ animation: "scrollLeft 40s linear infinite" }}>
          <div className={styles.marqueeList}>
            {portraitWorksRow1.map((work, idx) => (
              <div key={`r1-1-${idx}`} className={`${styles.marqueeCard} ${styles.portraitCard}`}>
                <img src={work.src} alt={work.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className={styles.marqueeList}>
            {portraitWorksRow1.map((work, idx) => (
              <div key={`r1-2-${idx}`} className={`${styles.marqueeCard} ${styles.portraitCard}`}>
                <img src={work.src} alt={work.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 02 (Left to Right) */}
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack} style={{ animation: "scrollRight 45s linear infinite" }}>
          <div className={styles.marqueeList}>
            {portraitWorksRow2.map((work, idx) => (
              <div key={`r2-1-${idx}`} className={`${styles.marqueeCard} ${styles.portraitCard}`}>
                <img src={work.src} alt={work.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className={styles.marqueeList}>
            {portraitWorksRow2.map((work, idx) => (
              <div key={`r2-2-${idx}`} className={`${styles.marqueeCard} ${styles.portraitCard}`}>
                <img src={work.src} alt={work.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scrollLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scrollRight {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
}
