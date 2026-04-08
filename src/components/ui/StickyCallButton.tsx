"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export function StickyCallButton() {
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (window.innerWidth < 1024) {
             if (currentScrollY > prevScrollY.current && currentScrollY > 150) {
               setVisible(false);
             } else {
               setVisible(true);
             }
          } else {
             setVisible(true);
          }
          prevScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:+971545770076"
      onClick={() => {
        sendGTMEvent({ event: "call_click" });
      }}
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 bg-[#1a1d23] text-white px-2.5 py-4 rounded-l-xl shadow-lg border border-white/10 border-r-0 transition-all duration-300 hover:bg-[#2a2d33] hover:px-3.5 group ${
        visible
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
      aria-label="Call Now"
    >
      <Phone
        size={18}
        className="text-primary group-hover:rotate-12 transition-transform duration-200"
      />
      <span
        className="font-bold text-xs uppercase tracking-widest"
        style={{ writingMode: "vertical-rl" }}
      >
        Call Now
      </span>
    </a>
  );
}
