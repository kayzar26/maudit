import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

interface BlogCardProps {
  img: string;
  date: string;
  title: string;
  url: string;
  delay?: number;
}

export function BlogCard({ img, date, title, url, delay = 0 }: BlogCardProps) {
  return (
    <FadeIn delay={delay} yOffset={30} className="group relative">
      <Link href={url} className="block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 pointer-events-auto">
        {/* Image wrapper */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            {date}
          </p>
          <h3 className="text-xl font-bold text-thm group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          {/* Arrow */}
          <div className="mt-6 flex items-center text-secondary group-hover:text-primary transition-colors">
            <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
               <MoveUpRight size={18} />
            </span>
            <span className="ml-3 font-semibold uppercase tracking-wider text-sm">Read More</span>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
