import { getPostBySlug, getAllPostsMeta } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.meta.title} | Maudit`,
    description: post.meta.excerpt,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      images: [
        {
          url: post.meta.featuredImage || "/img/about/hero-side-img.png",
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [post.meta.featuredImage || "/img/about/hero-side-img.png"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    image: [
      `https://maudit.ae${post.meta.featuredImage || "/img/about/hero-side-img.png"}`
    ],
    datePublished: new Date(post.meta.date).toISOString(),
    author: [{
      "@type": "Person",
      name: post.meta.author,
    }],
    publisher: {
      "@type": "Organization",
      name: "Majed Alshamsi Auditing",
      logo: {
        "@type": "ImageObject",
        url: "https://maudit.ae/img/logo/al-shamsi-logo.png"
      }
    },
    description: post.meta.excerpt,
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="relative -mt-[80px] pt-48 pb-24 md:pb-32 bg-[#0a1128] overflow-hidden flex items-center min-h-[50vh]">
          <div className="absolute inset-0 z-0">
             <Image src="/img/overlay/about-glow-bg.png" alt="Glow Background" fill className="object-cover opacity-60" />
          </div>
          
          <div className="absolute bottom-0 right-0 z-0 opacity-20">
            <Image src="/img/overlay/wavy-lines.png" alt="Waves" width={400} height={300} />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-white text-center">
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 font-semibold tracking-wide uppercase text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            
            <div className="flex justify-center flex-wrap gap-4 mb-6 text-sm text-gray-300">
              <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><Calendar className="w-4 h-4 mr-2" /> {new Date(post.meta.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><Clock className="w-4 h-4 mr-2" /> {post.meta.readingTime}</span>
              <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><User className="w-4 h-4 mr-2" /> {post.meta.author}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
              {post.meta.title}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {post.meta.excerpt}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            {post.meta.featuredImage && (
              <div className="relative w-full h-[400px] md:h-[500px] mb-16 rounded-[24px] overflow-hidden shadow-2xl -mt-40 z-20 border-4 border-white">
                <Image src={post.meta.featuredImage} alt={post.meta.title} fill className="object-cover" priority />
              </div>
            )}
            
            <article className="prose prose-lg prose-headings:font-black prose-headings:uppercase prose-headings:text-thm prose-a:text-primary hover:prose-a:text-thm transition-colors max-w-none prose-img:rounded-2xl">
              {post.content}
            </article>
            
            {/* Tags / Categories */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-bold text-thm uppercase tracking-widest text-sm">Category:</span>
                <span className="bg-zinc-100 text-thm px-4 py-2 rounded-lg text-sm font-semibold">{post.meta.category}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
