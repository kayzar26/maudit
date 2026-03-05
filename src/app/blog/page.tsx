import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { BlogCard } from "@/components/front/blog/BlogCard";
import Image from "next/image";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Our Blog | Maudit | Majed Alshamsi Auditing",
  description: "Read the latest insights, news, and updates on auditing, taxation, and business advisory from Majed Alshamsi Auditing in Dubai.",
};

export default function BlogListPage() {
  const posts = getAllPostsMeta();

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
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">Our Blog</h1>
              <div className="flex items-center text-sm font-medium text-white/70 uppercase tracking-widest gap-2">
                <span>Home</span>
                <span>/</span>
                <span className="text-primary">Our Blog</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Blog Listing Area */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[-1]" />
          
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col items-center pb-20 text-center">
              <FadeIn delay={0.2} yOffset={30}>
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-thm">
                  Our Latest Blog
                </h2>
              </FadeIn>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post, index) => (
                <FadeIn key={post.slug} delay={0.2 + (index * 0.1)} yOffset={30}>
                  <BlogCard 
                    url={`/blog/${post.slug}`}
                    img={post.featured_image}
                    date={post.date}
                    title={post.title}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
