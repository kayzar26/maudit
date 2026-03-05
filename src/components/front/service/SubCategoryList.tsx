import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type SubCategoryListProps = {
  services: {
    label: string;
    imgUrl: string;
    url: string;
  }[];
};

export function SubCategoryList({ services }: SubCategoryListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 overflow-visible">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="group relative rounded-2xl overflow-visible aspect-[4/3] md:aspect-[5/4] pb-24"
        >
          {/* Base Image Container */}
          <div className="relative w-full h-[260px] rounded-2xl overflow-hidden z-10">
            <Image
              src={`/${service.imgUrl}`}
              alt={service.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating Action Card */}
          <div className="absolute -bottom-4 right-1/2 translate-x-1/2 w-[85%] bg-white rounded-lg pt-12 pb-6 px-4 text-center shadow-xl z-20 transition-transform duration-500 group-hover:-translate-y-4">
            
            {/* Arrow Button overlapping */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Link href={service.url} className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black -rotate-45 hover:rotate-0 transition-transform duration-300">
                <ArrowRight size={20} />
              </Link>
            </div>

            <Link href={service.url} className="text-xl font-bold text-black hover:text-primary transition-colors inline-block mt-2">
              {service.label}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
