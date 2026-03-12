"use client";

import React, { useState } from "react";
import { ArrowRight, MessageSquareQuote } from "lucide-react";
import { QuoteFormModal } from "./QuoteFormModal";

export function ServicePageCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mt-16 mb-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        {/* Green accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />

        <div className="bg-gradient-to-br from-[#1a1d23] via-[#22252b] to-[#1a1d23] p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <MessageSquareQuote size={28} className="text-primary" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Need Expert Help?
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                Talk to our specialists today. We provide tailored solutions for businesses of all sizes across the UAE.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-[#b0d859] text-thm font-bold uppercase tracking-tight text-sm md:text-base rounded-xl px-6 py-4 transition-all duration-200 shadow-[0_4px_0_0_rgb(130,165,56)] hover:shadow-[0_2px_0_0_rgb(130,165,56)] hover:mt-[2px] mb-[2px] group"
            >
              Get a Free Quote
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
