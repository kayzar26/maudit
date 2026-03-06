"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
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
        <div className="rounded-2xl bg-zinc-50 border border-gray-100 p-6 w-full lg:min-w-[350px]">
          <h3 className="text-xl uppercase font-bold text-thm mb-6">
            {otherService.heading}
          </h3>
          <ul className="flex flex-col gap-3">
            {otherService.pages.map((service, index) => {
              const isActive = pathname === service.url;
              return (
                <li key={index}>
                  <Link
                    href={service.url}
                    className={cn(
                      "flex items-center justify-between px-5 py-4 rounded-xl font-semibold text-[15px] uppercase transition-all duration-300 shadow-sm border",
                      isActive
                        ? "bg-primary text-black border-primary"
                        : "bg-white text-secondary hover:bg-primary hover:text-black hover:border-primary border-gray-100"
                    )}
                  >
                    {service.label}
                    <ChevronRight size={18} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {popularService && (
        <div className="rounded-2xl bg-zinc-50 border border-gray-100 p-6 w-full lg:min-w-[350px]">
          <h3 className="text-xl uppercase font-bold text-thm mb-6">
            Popular Services
          </h3>
          <ul className="flex flex-col gap-3">
            {popularServicesData.map((service, index) => {
              const isActive = pathname === service.link;
              return (
                <li key={index}>
                  <Link
                    href={service.link}
                    className={cn(
                      "flex items-center justify-between px-5 py-4 rounded-xl font-semibold text-[15px] uppercase transition-all duration-300 shadow-sm border",
                      isActive
                        ? "bg-primary text-black border-primary"
                        : "bg-white text-secondary hover:bg-primary hover:text-black hover:border-primary border-gray-100"
                    )}
                  >
                    {service.name}
                    <ChevronRight size={18} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
