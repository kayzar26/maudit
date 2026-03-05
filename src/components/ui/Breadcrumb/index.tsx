import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  title: string;
  pages: { url: string; name: string }[];
}

export function Breadcrumb({ title, pages }: BreadcrumbProps) {
  return (
    <div className="bg-thm text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 tracking-tight text-white heading-reveal-animation">
          {title}
        </h1>
        <ul className="flex items-center justify-center flex-wrap gap-2 text-sm md:text-base font-medium text-gray-300">
          {pages.map((page, index) => (
            <React.Fragment key={page.url}>
              <li>
                {index === pages.length - 1 ? (
                  <span className="text-primary">{page.name}</span>
                ) : (
                  <Link href={page.url} className="hover:text-white transition-colors">
                    {page.name}
                  </Link>
                )}
              </li>
              {index < pages.length - 1 && (
                <li>
                  <ChevronRight size={16} className="text-gray-500" />
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
