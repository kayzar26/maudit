import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Blog | Maudit",
  description: "Read the latest news, insights, and updates about auditing, accounting, VAT, and corporate tax in the UAE.",
  alternates: {
    canonical: "/blog",
  },
};

// Cache for 1 day — blog content rarely changes. Zero function cost between rebuilds.
// export const revalidate = 86400;

export default async function BlogIndexPage() {
  const posts = await getAllPostsMeta();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Breadcrumb
          title="Blog & Insights"
          pages={[
            { url: "/", name: "Home" },
            { url: "/blog", name: "Blog" },
          ]}
        />

        <section className="py-24 bg-zinc-50 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
                Latest News & Resources
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-thm">
                Our Expert Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1} yOffset={20}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                      <div className="relative h-64 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-thm/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                        <Image 
                          src={post.featuredImage || "/img/about/hero-side-img.png"} 
                          alt={post.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute top-4 left-4 z-20 bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                          {post.category}
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                          <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {post.readingTime}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-thm mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center font-bold text-thm group-hover:text-primary transition-colors text-sm uppercase tracking-wider">
                          Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
            
            {posts.length === 0 && (
               <div className="text-center py-20">
                 <p className="text-lg text-gray-500">No articles found. Check back soon!</p>
               </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
