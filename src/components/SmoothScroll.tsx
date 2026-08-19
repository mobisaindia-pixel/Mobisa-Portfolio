"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Lenis is synced automatically by ReactLenis in current versions.
    // However, configuring ScrollTrigger explicitly can prevent bugs.
    ScrollTrigger.defaults({
      markers: false,
    });
    
    // GSAP Ticker synchronization for Lenis 
    gsap.ticker.add((time) => {
      // Current lenis/react handles rAF, but this ensures ScrollTrigger 
      // is completely in sync with any GSAP animations inside Lenis
      ScrollTrigger.update();
    });

  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
