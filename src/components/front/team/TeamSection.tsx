"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Majed Ali Ahmed Omran Alshamsi",
    designation: "Founder / CEO",
    imgUrl: "/img/team/majed-ali.png",
  },
  {
    id: 2,
    name: "Ali Majed ALi Ahmed Alshamsi",
    designation: "Director / COO",
    imgUrl: "/img/team/ali-majed.png",
  },
  {
    id: 3,
    name: "Jayesh Donda",
    designation: "Audit Manager",
    imgUrl: "/img/team/jayesh-donda-v2.png",
  },
  {
    id: 4,
    name: "Raheesh Elavanthra",
    designation: "Senior Manager",
    imgUrl: "/img/team/raheesh-elavanthra.png",
  },
];

export function TeamSection({ className = "" }: { className?: string }) {
  return (
    <section className={`relative overflow-hidden bg-thm text-white py-24 md:py-40 ${className}`}>
      {/* Background Glow */}
      <div 
        className="absolute w-[280px] h-[320px] bg-primary rounded-full blur-[120px] opacity-100 right-[-240px] top-[-10%] pointer-events-none z-0" 
      />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="mb-12">
          <FadeIn delay={0.2} yOffset={20}>
            <p className="text-xl font-bold uppercase tracking-wide text-primary mb-3">
              Experienced, Ethical, Effective.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} yOffset={30}>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Meet Our Leadership Team
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mt-16">
          {TEAM_MEMBERS.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.15} yOffset={40} className="w-full">
              <div className="group relative cursor-pointer">
                {/* Image Container */}
                <div className="relative h-[340px] bg-white/5 rounded-[20px] overflow-hidden">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-gradient-to-t from-[rgba(206,241,43,0.63)] to-transparent transition-all duration-400 z-10" />
                  
                  {/* Hover Stripe Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-400 z-0 flex items-center justify-center">
                    <Image
                      src="/img/overlay/green-stipes-pattern.png"
                      alt="Pattern"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <Image
                    src={member.imgUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover z-0"
                  />
                </div>

                {/* Content */}
                <div className="mt-8 text-center text-white">
                  <h3 className="text-2xl font-semibold uppercase group-hover:text-primary transition-colors duration-300 px-2 line-clamp-2 min-h-[64px]">
                    {member.name}
                  </h3>
                  <p className="text-lg mt-2 text-gray-300 max-w-[200px] mx-auto">
                    {member.designation}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
