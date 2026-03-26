import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { CounterUp } from "@/components/front/counter-up/CounterUp";
import { ServicesList } from "@/components/front/service/ServicesList";
import { TeamSection } from "@/components/front/team/TeamSection";
import { TestimonialSection } from "@/components/front/testimonial/TestimonialSection";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Maudit | Majed Alshamsi Auditing",
  description: "Learn more about Majed Alshamsi Auditing. 20+ years of trust in auditing, tax consulting, and business advisory in Dubai.",
};

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* --- Hero / Form Section --- */}
        <section className="relative -mt-[80px] pt-48 pb-24 md:pb-32 bg-[#0a1128] overflow-hidden flex items-center min-h-[80vh]">
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 z-0">
             <Image src="/img/overlay/about-glow-bg.png" alt="Glow Background" fill priority className="object-cover opacity-80" />
          </div>
          
          <div className="absolute bottom-0 right-0 z-0 opacity-40">
            <Image src="/img/overlay/wavy-lines.png" alt="Waves" width={400} height={300} priority />
          </div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Left Info Section */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-primary text-black p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <p className="font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    Designing The Future Of Your Brand
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black uppercase leading-tight md:pr-[120px]">
                    20+ Years of Trust in Auditing & Consulting
                  </h1>
                  
                  {/* Circle CTA Button */}
                  <Link href="/contact-us" className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-[35px] w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] bg-black/10 backdrop-blur-xl border-4 border-[#03060a] rounded-full items-center justify-center group hover:scale-105 transition-transform duration-300">
                    <Image src="/img/overlay/hero-cta-text-org.png" alt="Get Started" width={110} height={110} priority className="absolute animate-[spin_40s_reverse_linear_infinite] brightness-0 invert" />
                    <Image src="/img/overlay/hero-cta-arrow.svg" alt="Arrow" width={30} height={30} priority className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform brightness-0 invert relative z-10" />
                  </Link>
                </div>

                  <div className="relative rounded-3xl overflow-hidden h-[200px] md:h-[300px] group">
                    <div className="absolute inset-0 bg-white/30 -translate-x-[150%] rotate-[-45deg] group-hover:translate-x-[150%] transition-transform duration-1000 z-10" />
                    <Image src="/img/about/hero-img.png" alt="Team Discussion" fill priority className="object-cover" />
                  </div>
              </div>

              {/* Right Content Section */}
              <div className="lg:col-span-5 relative mt-10 lg:mt-0">
                   {/* Background Image */}
                   <div className="relative h-[400px] md:h-[500px] lg:h-[680px] rounded-[20px] overflow-hidden hidden lg:block mb-[-250px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-primary/20 to-transparent z-10 rounded-[20px]" />
                      <Image src="/img/about/hero-side-img.png" alt="Consultant" fill priority className="object-cover" />
                   </div>
                   
                   {/* High Intent Text Box */}
                   <div className="lg:-mt-[350px] relative z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[20px] shadow-2xl mx-4 lg:mx-0">
                     <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                        <Image src="/img/overlay/four-leave.webp" alt="Excellence" width={32} height={32} className="animate-[spin_20s_linear_infinite]" />
                     </div>
                     <h3 className="text-3xl md:text-4xl font-black uppercase text-white leading-tight mb-4 tracking-tight">
                       A 100% Emirati <span className="text-primary">Owned</span> Company
                     </h3>
                     <p className="text-lg text-white/80 leading-relaxed mb-8">
                       Deeply rooted in the UAE, we promise to deliver excellence in every business we touch. Our local expertise combined with global standards ensures your financial success is built on a foundation of trust, accuracy, and strategic growth.
                     </p>
                     
                     <div className="space-y-4">
                       <div className="flex items-center gap-4">
                         <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                         </div>
                         <span className="text-white font-medium text-lg">Uncompromising Quality</span>
                       </div>
                       <div className="flex items-center gap-4">
                         <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                         </div>
                         <span className="text-white font-medium text-lg">Tailored Advisory</span>
                       </div>
                     </div>
                   </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Purpose Section --- */}
        <section className="py-24 md:py-32 bg-thm text-white overflow-hidden flex justify-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
              
              {/* Left Images Collage */}
              <div className="flex flex-col md:flex-row gap-6 relative justify-center">
                  <div className="relative w-full md:w-[280px] h-[350px] rounded-[16px] overflow-hidden group shadow-2xl border border-white/10">
                    <div className="absolute inset-0 bg-white/30 -translate-x-[150%] rotate-[-45deg] group-hover:translate-x-[150%] transition-transform duration-1000 z-10 w-[200%]" />
                    <Image src="/img/about/purpose-1.png" alt="Charts" fill className="object-cover" />
                  </div>
                
                  <div className="relative w-full md:w-[280px] h-[350px] rounded-[16px] overflow-hidden hidden md:block group shadow-2xl border border-white/10">
                    <div className="absolute inset-0 bg-white/30 -translate-x-[150%] rotate-[-45deg] group-hover:translate-x-[150%] transition-transform duration-1000 z-10 w-[200%]" />
                    <Image src="/img/about/purpose-2.png" alt="Collaboration" fill className="object-cover" />
                  </div>

                {/* Swinging wavy circle */}
                <div className="absolute -bottom-10 right-1/2 translate-x-1/2 w-[180px] h-[180px] z-0 animate-[spin_90s_alternate-reverse_linear_infinite]">
                  <Image src="/img/overlay/wavy-circle.png" alt="Wave" fill className="object-contain" />
                </div>
              </div>

              {/* Right Content */}
              <div>
                  <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">
                     Driven to Creativity
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                     Professional Auditing With<br/>A Purpose-Driven Approach
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-10">
                     At Al Shamsi Auditing, we blend over 20 years of expertise with cutting-edge tools and a deep understanding of accounting, tax, and consultancy. Our goal is to add value beyond compliance—helping businesses make informed decisions and achieve sustainable growth.
                  </p>

                {/* Statistics */}
                <div className="flex flex-wrap gap-8 mb-10 border-t border-white/10 pt-10">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">
                       <CounterUp endAmount={500} duration={2} />
                       <span className="text-primary ml-1">+</span>
                    </div>
                    <p className="text-white/70 font-semibold uppercase text-sm tracking-wide">Satisfied Clients</p>
                  
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">
                       <CounterUp endAmount={20} duration={2} />
                       <span className="text-primary ml-1">+</span>
                    </div>
                    <p className="text-white/70 font-semibold uppercase text-sm tracking-wide">Years Experience</p>

                    <div className="text-4xl md:text-5xl font-black text-white mb-2">
                       <CounterUp endAmount={100} duration={2} />
                       <span className="text-primary ml-1">+</span>
                    </div>
                    <p className="text-white/70 font-semibold uppercase text-sm tracking-wide">Projects Done</p>
                </div>

                  <div className="mt-12">
                     <Link href="/contact-us">
                        <ButtonBase>Book A Consultation</ButtonBase>
                     </Link>
                  </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Services Summary Section --- */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 -left-[240px] w-[280px] h-[400px] bg-primary/40 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col items-center mb-20 text-center">
                <p className="text-primary font-bold tracking-widest uppercase mb-4">Strategic Financial Solutions</p>
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-thm">
                  Expert Financial Services <br className="hidden md:block"/> for Modern Businesses
                </h2>
            </div>
            
              <ServicesList include={['virtual-cfo', 'internal-audit', 'corporate-tax']} />
          </div>
        </section>

        {/* --- Team Section --- */}
        <TeamSection className="pt-20 pb-32" />

        {/* --- Testimonials Section --- */}
        <TestimonialSection />

      </main>
      <Footer />
    </div>
  );
}
