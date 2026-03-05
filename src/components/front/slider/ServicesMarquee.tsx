"use client";
import React from "react";

const SERVICES = [
  "Audit and Assurance",
  "Tax Filing Services",
  "VAT Registration Help",
  "Bookkeeping and Accounting",
  "Payroll Outsourcing Solutions",
  "Internal Audit Services",
  "External Audit Support",
  "Corporate Tax Services",
  "Management Consultancy UAE",
];

export function ServicesMarquee() {
  return (
    <div className="py-12 bg-white overflow-hidden relative flex items-center w-full">
      {/* Left/Right Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Scrolling Track Container */}
      <div className="flex w-max animate-marquee space-x-6 px-3 whitespace-nowrap">
        {/* We map twice to ensure infinite scrolling effect without gaps */}
        {[...Array(2)].map((_, i) => (
          <ul key={i} className="flex shrink-0 items-center space-x-6 list-none m-0 p-0">
            {SERVICES.map((service, index) => (
              <li 
                key={index} 
                className="flex items-center justify-center border border-secondary/20 rounded-full px-12 py-3 md:py-4 transition-all hover:bg-white/90"
              >
                <span className="text-[36px] md:text-[46px] text-secondary font-normal tracking-wide">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
