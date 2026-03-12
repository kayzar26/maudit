"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { QuoteFormModal } from "./QuoteFormModal";

export function ServiceQuoteBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#1a1d23] via-[#22252b] to-[#1a1d23] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-primary flex-shrink-0" />
              <p className="text-white/80 text-sm md:text-base font-medium">
                Looking for professional services?{" "}
                <span className="text-white font-bold">Get a free consultation today.</span>
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 bg-primary hover:bg-[#b0d859] text-thm font-bold uppercase tracking-tight text-sm rounded-lg px-5 py-2.5 transition-all duration-200 shadow-[0_3px_0_0_rgb(130,165,56)] hover:shadow-[0_1px_0_0_rgb(130,165,56)] hover:mt-[2px] mb-[2px]"
            >
              Get a Free Quote Now
            </button>
          </div>
        </div>
      </div>

      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
