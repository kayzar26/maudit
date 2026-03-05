"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { cn } from "@/lib/utils";

type ServiceSidebarProps = {
  otherService?: { heading: string; pages: { label: string; url: string }[] };
  popularService?: boolean;
};

const popularServicesData = [
  { name: "Audit & Assurance", link: "/services/audit-and-assurance" },
  { name: "Accounting & VAT", link: "/services/accounting-vat" },
  { name: "Tax Agency Services", link: "/services/tax-agency" },
  { name: "Management Consulting", link: "/services/management-consulting" },
  { name: "BPO Services", link: "/services/business-process-outsourcing" },
  { name: "Standards & Certification", link: "/services/management-system-certification" },
  { name: "Corporate Tax Services", link: "/services/corporate-tax" },
  { name: "Tax Advisory Services", link: "/services/tax-advisory" },
  { name: "Business Valuation", link: "/services/business-valuation" },
  { name: "View All", link: "/services" },
];

export function ServiceSidebar({
  otherService,
  popularService = true,
}: ServiceSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6 sticky top-24">
      {otherService && (
        <div className="rounded-2xl bg-white/5 p-6 w-full lg:min-w-[350px]">
          <h3 className="text-xl uppercase font-bold text-white mb-6">
            {otherService.heading}
          </h3>
          <ul className="flex flex-col gap-4">
            {otherService.pages.map((service, index) => {
              const isActive = pathname === service.url;
              return (
                <li key={index}>
                  <Link
                    href={service.url}
                    className={cn(
                      "flex items-center justify-between px-5 py-4 rounded-lg font-semibold text-lg uppercase transition-all duration-300",
                      isActive
                        ? "bg-primary text-black"
                        : "bg-white/10 text-white hover:bg-primary hover:text-black"
                    )}
                  >
                    {service.label}
                    <ChevronRight size={20} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {popularService && (
        <div className="rounded-2xl bg-white/5 p-6 w-full lg:min-w-[350px]">
          <h3 className="text-xl uppercase font-bold text-white mb-6">
            Popular Services
          </h3>
          <ul className="flex flex-col gap-4">
            {popularServicesData.map((service, index) => {
              const isActive = pathname === service.link;
              return (
                <li key={index}>
                  <Link
                    href={service.link}
                    className={cn(
                      "flex items-center justify-between px-5 py-4 rounded-lg font-semibold text-[16px] xl:text-[18px] uppercase transition-all duration-300",
                      isActive
                        ? "bg-primary text-black"
                        : "bg-white/10 text-white hover:bg-primary hover:text-black"
                    )}
                  >
                    {service.name}
                    <ChevronRight size={20} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="rounded-2xl bg-white/5 p-6 w-full lg:min-w-[350px]">
        {/* Contact Form Placeholder equivalent */}
        <h3 className="text-xl uppercase font-bold text-white mb-4">Request a Callback</h3>
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all"
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all"
            required
          />
          <textarea 
            placeholder="Message" 
            rows={3}
            className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all resize-none"
            required
          />
          <ButtonBase type="submit" className="w-full text-center">Submit</ButtonBase>
        </form>
      </div>
    </div>
  );
}
