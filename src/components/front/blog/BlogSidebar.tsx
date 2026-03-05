"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { BlogCard } from "./BlogCard";

// Note: Since this is a client component (used inside [slug]/page.tsx which has "use client" sidebar),
// we can't call the server-side blog utility here. Instead, we keep a small curated
// list of popular tags. The recent posts use the same hardcoded list since the sidebar
// is rendered on the client. For a fully dynamic sidebar, you would need to pass
// the data as props from the parent server component.

const TAGS = [
  { name: "#CorporateTax", href: "/blog" },
  { name: "#AuditAssurance", href: "/blog" },
  { name: "#VATCompliance", href: "/blog" },
  { name: "#RiskManagement", href: "/blog" },
  { name: "#ESG", href: "/blog" },
  { name: "#CashFlow", href: "/blog" },
  { name: "#VirtualCFO", href: "/blog" },
];

const RECENT_POSTS = [
  {
    slug: "future-of-virtual-cfo",
    featured_image: "/img/blog/blog-3.png",
    date: "2026-03-18",
    title: "The Rise of the Virtual CFO: How Outsourced Services Save Money",
  },
  {
    slug: "cash-flow-management-tips",
    featured_image: "/img/blog/blog-2.png",
    date: "2026-03-10",
    title: "Top 5 Cash Flow Management Tips for Small Businesses",
  },
];

export function BlogSidebar() {
  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-32">
      {/* Recent Posts Widget */}
      <FadeIn delay={0.3} yOffset={20}>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 w-full text-white">
          <h3 className="text-xl font-bold uppercase tracking-wide mb-6">
            Recent Posts
          </h3>
          <div className="flex flex-col gap-6">
            {RECENT_POSTS.map((post) => (
              <div key={post.slug} className="group cursor-pointer">
                <BlogCard
                  url={`/blog/${post.slug}`}
                  img={post.featured_image}
                  date={post.date}
                  title={post.title}
                />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Popular Tags Widget */}
      <FadeIn delay={0.4} yOffset={20}>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 w-full text-white">
          <h3 className="text-xl font-bold uppercase tracking-wide mb-6">
            Popular Tags
          </h3>
          <ul className="flex flex-wrap gap-3">
            {TAGS.map((tag, index) => (
              <li key={index}>
                <Link
                  href={tag.href}
                  className="inline-block bg-white/5 px-3 py-2 rounded-lg text-base font-bold transition-all hover:bg-primary hover:text-thm"
                >
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}
