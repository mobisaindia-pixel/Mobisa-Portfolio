"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { workflowSteps } from "../data/portfolio";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Workflow() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Horizontal Pinning
      const totalSteps = workflowSteps.length;
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "center center",
        end: "+=2500", // amount of scroll duration
        pin: true,
        animation: gsap.to(lineRef.current, {
          width: "100%",
          ease: "none",
        }),
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate which step is active (0 to totalSteps - 1)
          const currentStep = Math.min(
            Math.floor(progress * totalSteps),
            totalSteps - 1
          );

          stepsRef.current.forEach((el, index) => {
            if (el) {
              if (index <= currentStep) {
                el.classList.add(styles.active);
              } else {
                el.classList.remove(styles.active);
              }
            }
          });
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Vertical simple reveals
      stepsRef.current.forEach((el) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          onEnter: () => el.classList.add(styles.active),
        });
      });
      
      // Make sure line is full height on mobile visually
      gsap.set(lineRef.current, { height: "100%", width: "100%" });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="process" className={styles.workflowSection} ref={containerRef}>
      <h2 className={styles.workflowHeader}>our workflow</h2>
      
      <div className={styles.timeline}>
        <div className={styles.timelineLine}>
          <div className={styles.timelineProgress} ref={lineRef}></div>
        </div>

        {workflowSteps.map((step, idx) => (
          <div 
            key={idx} 
            className={styles.timelineStep} 
            ref={(el) => {
              stepsRef.current[idx] = el;
            }}
          >
            <div className={styles.timelineNode}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
