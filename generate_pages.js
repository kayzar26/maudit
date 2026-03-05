const fs = require('fs');
const path = require('path');

const services = [
  { slug: 'accounting-outsourcing', title: 'Accounting Outsourcing' },
  { slug: 'accounting-vat', title: 'Accounting & VAT' },
  { slug: 'asset-tagging', title: 'Asset Tagging' },
  { slug: 'asset-tracking', title: 'Asset Tracking' },
  { slug: 'asset-valuation', title: 'Asset Valuation' },
  { slug: 'business-process-outsourcing', title: 'Business Process Outsourcing' },
  { slug: 'business-valuation', title: 'Business Valuation' },
  { slug: 'cash-flow-management', title: 'Cash Flow Management' },
  { slug: 'corporate-tax', title: 'Corporate Tax' },
  { slug: 'corporate-tax-filing', title: 'Corporate Tax Filing' },
  { slug: 'corporate-tax-registration', title: 'Corporate Tax Registration' },
  { slug: 'digital-transformation', title: 'Digital Transformation' },
  { slug: 'due-diligence', title: 'Due Diligence' },
  { slug: 'esg-advisory', title: 'ESG Advisory' },
  { slug: 'expanded-consulting', title: 'Expanded Consulting' },
  { slug: 'forensic-audit', title: 'Forensic Audit' },
  { slug: 'internal-audit', title: 'Internal Audit' },
  { slug: 'internal-control', title: 'Internal Control' },
  { slug: 'inventory-management', title: 'Inventory Management' },
  { slug: 'virtual-cfo', title: 'Virtual CFO' }
];

const template = (title) => `import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ServiceSidebar } from "@/app/services/audit-and-assurance/components/ServiceSidebar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "${title} | Maudit | Majed Alshamsi Auditing",
  description: "Professional ${title} services in Dubai provided by Majed Alshamsi Auditing.",
};

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        {/* Breadcrumb Area */}
        <section className="bg-thm text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image src="/img/overlay/grain.png" alt="texture" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <FadeIn yOffset={20}>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">${title}</h1>
              <div className="flex items-center text-sm font-medium text-white/70 uppercase tracking-widest gap-2">
                <span>Home</span>
                <span>/</span>
                <span>Services</span>
                <span>/</span>
                <span className="text-primary">${title}</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 order-2 lg:order-1">
                <FadeIn delay={0.2} yOffset={30}>
                  <div className="prose prose-lg max-w-none text-secondary">
                    <h2 className="text-3xl font-bold text-thm uppercase mb-6">About ${title}</h2>
                    <p className="mb-6 leading-relaxed">
                      Our ${title.toLowerCase()} services are designed to provide your business with the strategic edge it needs to thrive in Dubai's competitive market. We combine deep industry knowledge with practical application to deliver results that matter.
                    </p>
                    <p className="mb-6 leading-relaxed">
                      Whether you are looking to streamline your operations, ensure compliance, or scale your revenue, our dedicated team of experts is here to guide you through every step of the process.
                    </p>
                    <div className="bg-zinc-100 p-8 rounded-2xl border-l-4 border-primary my-10 relative overflow-hidden">
                      <h3 className="text-xl font-bold text-thm mb-4">Why Choose Us?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Expertise tailored to UAE regulations and market dynamics.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Dedicated professionals focused on your unique business goals.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Transparent pricing and continuous communication.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="lg:col-span-4 order-1 lg:order-2">
                <FadeIn delay={0.4} yOffset={30}>
                  <ServiceSidebar />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
`;

services.forEach(service => {
  const dirPath = path.join(__dirname, 'src', 'app', 'services', service.slug);
  const filePath = path.join(dirPath, 'page.tsx');
  fs.writeFileSync(filePath, template(service.title));
  console.log('Created: ' + filePath);
});
console.log('Done generating 20 service pages.');
