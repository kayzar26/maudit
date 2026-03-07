"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export const allServicesData = [
  {
    title: "Audit & Assurance",
    slug: "audit-and-assurance",
    link: "/services/audit-and-assurance",
    description: "Clear, reliable audit solutions to support trust and business confidence.",
    image: "/img/service/audit.png",
  },
  {
    title: "Accounting & VAT",
    slug: "accounting-vat",
    link: "/services/accounting-vat",
    description: "Accurate records and VAT support to keep your finances organized and compliant.",
    image: "/img/service/vat.png",
  },
  {
    title: "Tax Agency Services",
    slug: "tax-agency",
    link: "/services/tax-agency",
    description: "Trusted tax handling and representation to keep your business on track.",
    image: "/img/service/tax-agency.png",
  },
  {
    title: "Management Consulting",
    slug: "management-consulting",
    link: "/services/management-consulting",
    description: "Expert advice to help streamline, grow, and strengthen your business.",
    image: "/img/service/management-consulting.png",
  },
  {
    title: "BPO Services",
    slug: "bpo-services",
    link: "/services/business-process-outsourcing",
    description: "Streamline non-core business functions with our efficient and cost-effective outsourcing solutions.",
    image: "/img/service/bpo.png",
  },
  {
    title: "Standards & Certification",
    slug: "standards-certification",
    link: "/services/management-system-certification",
    description: "Helping you meet global standards with trusted certification support.",
    image: "/img/service/standards-certification.png",
  },
  {
    title: "Corporate Tax Services",
    slug: "corporate-tax",
    link: "/services/corporate-tax",
    description: "End-to-end corporate tax solutions for smart planning and compliance.",
    image: "/img/service/corporate-tax.png",
  },
  {
    title: "Tax Advisory Services",
    slug: "tax-advisory",
    link: "/services/tax-advisory",
    description: "Strategic tax advice to reduce risks and meet your business goals.",
    image: "/img/service/tax-advisory.png",
  },
  {
    title: "Business Valuation",
    slug: "business-valuation",
    link: "/services/business-valuation",
    description: "Know your true worth with accurate and insightful business valuation.",
    image: "/img/service/business-valuation.png",
  },
  {
    title: "Virtual CFO Services",
    slug: "virtual-cfo",
    link: "/services/virtual-cfo",
    description: "Gain expert financial leadership and strategic insights without the cost of a full-time CFO.",
    image: "/img/service/virtual-cfo.png",
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    link: "/services/digital-transformation",
    description: "Empowering businesses through technology adoption, automation, and innovative digital solutions.",
    image: "/img/service/digital-transformation.png",
  },

  {
    title: "Risk Advisory",
    slug: "risk-advisory",
    link: "/services/risk-advisory",
    description: "Identify, assess, and mitigate risks to enhance business resilience and regulatory compliance.",
    image: "/img/service/risk-advisory.png",
  },
  {
    title: "ICV Audit & Certification",
    slug: "icv-audit-certification",
    link: "/services/icv-audit-certification",
    description: "Ensure compliance with the UAE's In-Country Value (ICV) program through certified audits and consulting.",
    image: "/img/service/icv-audit-certification.png",
  },
  {
    title: "Due Diligence Services",
    slug: "due-diligence",
    link: "/services/due-diligence",
    description: "Make informed investment and partnership decisions through detailed financial and operational analysis.",
    image: "/img/service/due-diligence.png",
  },
  {
    title: "Expanded Consulting Services",
    slug: "expanded-consulting",
    link: "/services/expanded-consulting",
    description: "Delivering tailored advisory solutions across finance, compliance, and business strategy domains.",
    image: "/img/service/expanded-consulting.png",
  },
];

export function ServicesList({ include }: { include?: string[] }) {
  const displayServices = Array.isArray(include) && include.length > 0
    ? include.map(slug => allServicesData.find(s => s.slug === slug)).filter(Boolean) as typeof allServicesData
    : allServicesData;

  return (
    <div className="w-full text-secondary">
      {displayServices.map((item, index) => (
        <FadeIn key={item.slug} delay={index * 0.1} yOffset={30}>
          <ServiceItem item={item} index={index + 1} />
        </FadeIn>
      ))}
    </div>
  );
}

function ServiceItem({ item, index }: { item: typeof allServicesData[0]; index: number }) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Parallax interaction setup
  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      imgRef.current.style.transform = `translate(-50%, -50%) translate(${x * 60}px, ${y * 40}px) rotate(${x * 10}deg)`;
    };

    const handleMouseLeave = () => {
      if (!imgRef.current) return;
      imgRef.current.style.transform = "translate(-50%, -50%) translate(50%, 0) scale(0.65)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link
      href={item.link}
      ref={itemRef}
      className="group relative flex flex-col md:flex-row items-center py-6 md:py-12 px-0 md:px-8 border-b border-[#252525] hover:bg-thm hover:bg-opacity-5 backdrop-blur-md transition-all duration-300"
    >
      <div className="flex-1 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span className="text-3xl font-medium w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-thm group-hover:text-primary transition-colors duration-300">
            {index}.
          </span>
          <h3 className="text-2xl md:text-3xl font-bold uppercase group-hover:text-primary transition-colors text-center md:text-left">
            {item.title}
          </h3>
        </div>
        <p className="text-xl leading-relaxed text-secondary-light max-h-0 md:max-w-[60%] overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-in-out text-center md:text-left">
          {item.description}
        </p>
      </div>

      {/* Floating Image */}
      <div className="hidden md:block absolute right-1/4 top-1/2 z-20 w-56 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
        <Image
          ref={imgRef}
          src={item.image}
          alt={item.title}
          width={224}
          height={224}
          className="h-auto rounded-lg shadow-2xl transition-transform duration-100 ease-out"
          style={{ width: "auto", transform: "translate(-50%, -50%) translate(50%, 0) scale(0.65)" }}
        />
      </div>

      {/* Mobile Image (Hidden natively) */}

      <div className="mt-4 md:mt-0 md:ml-auto md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 z-10 text-secondary group-hover:text-primary group-hover:-rotate-45 transition-all duration-300">
        <ArrowRight size={32} />
      </div>
    </Link>
  );
}
