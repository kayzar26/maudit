"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    id: 1,
    description:
      '"Al Shamsi Auditing provided a thorough and clear audit that helped us improve our financial processes. Their team is knowledgeable, professional, and always available to answer our questions."',
    authorName: "Fatima Al Habtoor",
  },
  {
    id: 2,
    description:
      '"Their tax consultation services helped us stay fully compliant while optimizing our tax position. We appreciate their proactive advice and dedication to our business needs."',
    authorName: "Ahmed Bin Rashid",
  },
  {
    id: 3,
    description:
      '"The team at Al Shamsi Auditing offers more than just audits. Their insights and consultancy have made a real difference in how we manage risk and improve operations."',
    authorName: "Sana Kareem",
  },
];

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40 bg-white">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center pb-20 text-center">
          <FadeIn delay={0.2} yOffset={20}>
            <p className="text-primary font-bold tracking-widest uppercase mb-3 text-lg">
              Testimonial
            </p>
          </FadeIn>
          <FadeIn delay={0.3} yOffset={30}>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-thm">
              What Our Clients Say
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Left Side Image */}
          <div className="md:col-span-5 relative">
            <FadeIn delay={0.2} yOffset={40}>
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/about/testimonial.png"
                  alt="Client Testimonial Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            {/* Spinning Abstract Shape */}
            <div className="absolute -left-[100px] -top-[30px] z-[-1] animate-[spin_150s_linear_infinite]">
              <Image
                src="/img/overlay/abstract-shape.png"
                alt="Abstract background"
                width={300}
                height={300}
                className="opacity-60"
              />
            </div>
          </div>

          {/* Right Side Slider */}
          <div className="md:col-span-7">
            <FadeIn delay={0.4} yOffset={40} className="w-full text-center md:text-left relative">
              <Swiper
                className="testimonial-swiper pb-16 !px-12 md:!px-16"
                modules={[Autoplay, Pagination, Navigation]}
                style={{
                  "--swiper-navigation-color": "var(--color-primary)",
                  "--swiper-pagination-color": "var(--color-primary)",
                } as React.CSSProperties}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-thm/5 border border-thm/10 border-b-[6px] border-b-thm/20 rounded-2xl p-8 md:p-12 max-w-[650px] mx-auto md:mx-0 relative">
                      {/* Quote mark backgrounds */}
                      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
                           style={{ backgroundImage: `url('/img/testimonial/quote-start.svg'), url('/img/testimonial/quote-end.svg')`, backgroundPosition: '0 0, 100% 85%', backgroundRepeat: 'no-repeat', backgroundSize: '28%' }} 
                      />
                      
                      <div className="relative z-10 flex flex-col md:items-start text-left">
                        {/* Rating */}
                        <div className="flex gap-1 mb-8">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="bg-primary/10 p-1 rounded">
                              <Star className="w-6 h-6 fill-primary text-primary" />
                            </div>
                          ))}
                        </div>

                        {/* Testimony text */}
                        <p className="text-xl md:text-2xl text-secondary mb-10 leading-relaxed font-medium">
                          {testimonial.description}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-5 mt-auto">
                          <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative shadow-md">
                            <Image
                              src="/img/about/testi-author-1.png"
                              alt={testimonial.authorName}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-xl font-bold text-thm mb-1">
                              {testimonial.authorName}
                            </p>
                            <p className="text-secondary/70 font-medium">
                              Valued Client
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
