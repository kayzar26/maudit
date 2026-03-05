import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";

// Generate static pages for all blog posts at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Maudit" };

  return {
    title: `${post.title} | Maudit`,
    description: post.excerpt || `Read "${post.title}" at Majed Alshamsi Auditing.`,
  };
}

export default async function BlogSinglePage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        {/* Breadcrumb Area */}
        <section className="bg-thm text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image src="/img/overlay/grain.png" alt="texture" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <FadeIn yOffset={20}>
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 max-w-4xl leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-sm font-medium text-white/70 uppercase tracking-widest gap-2">
                <span>Home</span>
                <span>/</span>
                <Link href="/blog" className="hover:text-primary transition-colors">Our Blog</Link>
                <span>/</span>
                <span className="text-primary truncate max-w-[200px] md:max-w-xs">{post.title}</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content Area — Full Width, No Sidebar */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            
            {/* Back to Blog Link */}
            <FadeIn delay={0.1} yOffset={15}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm mb-10 hover:opacity-80 transition-opacity">
                <ArrowLeft size={18} />
                Back to all articles
              </Link>
            </FadeIn>

            {/* Featured Image */}
            <FadeIn delay={0.2} yOffset={30}>
              <div className="w-full h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl mb-10">
                <Image src={post.featured_image} alt={post.title} fill className="object-cover" />
              </div>
            </FadeIn>

            {/* Article Meta Info */}
            <FadeIn delay={0.3} yOffset={20}>
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-bold uppercase tracking-wider mb-10 pb-6 border-b border-gray-200">
                <span className="bg-primary text-thm px-3 py-1.5 rounded-md">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-5 h-5 text-primary" />
                  {post.date}
                </div>
                <span className="hidden md:block text-gray-300">|</span>
                <div className="flex items-center gap-2 text-gray-500">
                  <User className="w-5 h-5 text-primary" />
                  {post.author}
                </div>
              </div>
            </FadeIn>

            {/* Article Body Content — Clean, readable typography */}
            <FadeIn delay={0.4} yOffset={20}>
              <div 
                className="
                  prose prose-lg md:prose-xl max-w-none
                  prose-p:text-gray-700 prose-p:leading-[1.85] prose-p:mb-7

                  prose-headings:font-extrabold prose-headings:tracking-tight
                  prose-h2:text-3xl prose-h2:text-thm prose-h2:mt-14 prose-h2:mb-6 prose-h2:uppercase
                  prose-h3:text-2xl prose-h3:text-thm prose-h3:mt-10 prose-h3:mb-4

                  prose-strong:text-gray-900 prose-strong:font-bold

                  prose-blockquote:bg-green-50 prose-blockquote:border-l-4 prose-blockquote:border-primary 
                  prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-2xl 
                  prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:not-italic 
                  prose-blockquote:my-10 prose-blockquote:text-gray-800

                  prose-ul:my-6 prose-ul:pl-6
                  prose-ol:my-6 prose-ol:pl-6
                  prose-li:text-gray-700 prose-li:leading-relaxed prose-li:mb-2
                  prose-li:marker:text-primary

                  prose-a:text-primary prose-a:underline prose-a:font-semibold

                  prose-img:rounded-2xl prose-img:shadow-xl prose-img:w-full prose-img:my-8

                  prose-hr:my-14 prose-hr:border-gray-200

                  prose-figure:my-10
                  prose-figcaption:text-center prose-figcaption:text-gray-400 prose-figcaption:text-sm prose-figcaption:mt-3
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </FadeIn>

            {/* Footer Tags */}
            {post.tags.length > 0 && (
              <FadeIn delay={0.5} yOffset={20}>
                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-6 md:items-center">
                  <span className="font-bold text-thm uppercase tracking-widest text-sm">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="bg-green-50 text-thm px-4 py-1.5 rounded-full text-sm font-bold border border-green-100 hover:bg-thm hover:text-white transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
