import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { FadeIn } from "@/components/animations/FadeIn";
import { ServicesMarquee } from "@/components/front/slider/ServicesMarquee";
import { ServicesList } from "@/components/front/service/ServicesList";
import { TeamSection } from "@/components/front/team/TeamSection";
import { TestimonialSection } from "@/components/front/testimonial/TestimonialSection";
import { BlogCard } from "@/components/front/blog/BlogCard";
import { CounterUp } from "@/components/front/counter-up/CounterUp";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { getAllPostsMeta } from "@/lib/mdx";

// Cache this page for 1 day. After 1 day, one background rebuild happens
// silently. All visitors in between get the cached version — zero function cost.
export const revalidate = 86400;

export default async function Home() {
  const latestPosts = (await getAllPostsMeta()).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative -mt-[80px] pt-48 pb-20 min-h-screen overflow-hidden bg-gradient-to-b from-thm via-thm-accent/65 to-thm text-white flex flex-col justify-center">
          {/* Background Glows */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute left-0 -translate-x-[60%] w-[300px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between pb-20">
              {/* Hero Text */}
              <div className="lg:w-2/3 text-center lg:text-left mb-12 lg:mb-0">
                <FadeIn delay={0.2} yOffset={20} animate={false}>
                  <div className="relative inline-block text-lg md:text-2xl uppercase font-bold tracking-widest pl-10 mb-6">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-[url('/img/logo/wordmark-primary.webp')] bg-contain bg-no-repeat" />
                    Trusted by Businesses Across Dubai
                  </div>
                </FadeIn>
                <FadeIn delay={0.4} yOffset={30} animate={false}>
                  <h1 className="text-5xl md:text-7xl lg:text-[72px] uppercase font-extrabold leading-tight tracking-tight">
                    Auditing 
                    <Image src="/img/overlay/four-leave.webp" alt="Shape" width={65} height={65} priority className="inline-block mx-3 -mt-4 animate-[spin_20s_linear_infinite]" />
                    Services <br />
                    <span className="hidden md:inline-block bg-white/10 border-2 border-primary rounded-full px-4 py-2 mr-3 -mt-2">
                       <Image src="/img/overlay/clients.webp" alt="Clients" width={110} height={40} priority className="object-contain" />
                    </span>
                    to Drive Growth
                  </h1>
                </FadeIn>
              </div>

              {/* Hero Right / CTA Sphere */}
              <div className="lg:w-1/3 flex justify-center lg:justify-end relative">
                <FadeIn delay={0.6} yOffset={40} animate={false}>
                  <Image src="/img/overlay/hero-circle-shape.webp" alt="Sphere" width={450} height={450} priority className="w-[340px] md:w-[450px] animate-[spin_40s_linear_infinite]" />
                  
                  <Link href="/contact-us" className="absolute top-0 right-0 md:right-auto md:left-1/2 bg-white/10 backdrop-blur-xl border-4 border-thm rounded-full w-[160px] h-[160px] md:w-[168px] md:h-[168px] flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                    <Image src="/img/overlay/hero-cta-text.webp" alt="Get Started" width={100} height={100} priority className="absolute animate-[spin_20s_reverse_linear_infinite]" />
                    <Image src="/img/overlay/hero-cta-arrow.svg" alt="Arrow" width={30} height={30} priority className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </FadeIn>
              </div>
            </div>

            {/* Hero Bottom Image area */}
            <div className="relative mt-8">
               <FadeIn delay={0.8} yOffset={40} animate={false}>
                 <Image src="/img/hero/hero-img.png" alt="Hero Office" width={1200} height={500} priority className="w-full h-[300px] md:h-auto object-cover rounded-2xl md:rounded-none" />
                 <Image src="/img/overlay/edge-cut.webp" alt="Cut overlay" width={200} height={200} priority className="absolute -top-8 -left-5 hidden md:block" style={{ width: 'auto', height: 'auto' }} />
               </FadeIn>
               
               <Link href="/contact-us" className="absolute -top-12 md:top-0 right-4 md:right-0 z-20 flex flex-col items-center group">
                 <div className="relative w-[170px] h-[170px] md:w-[200px] md:h-[200px] flex items-center justify-center mb-2">
                    <svg viewBox="0 0 190 190" fill="none" className="absolute inset-0 w-full h-full animate-[spin_40s_reverse_linear_infinite]">
                        <path d="M89.6307 2.22405C92.2799 1.12669 93.6046 0.578013 95 0.578013C96.3954 0.578013 97.7201 1.12669 100.369 2.22405L156.806 25.6008C159.455 26.6982 160.78 27.2468 161.766 28.2336C162.753 29.2203 163.302 30.5449 164.399 33.1942L187.776 89.6307C188.873 92.2799 189.422 93.6046 189.422 95C189.422 96.3954 188.873 97.7201 187.776 100.369L164.399 156.806C163.302 159.455 162.753 160.78 161.766 161.766C160.78 162.753 159.455 163.302 156.806 164.399L100.369 187.776C97.7201 188.873 96.3954 189.422 95 189.422C93.6046 189.422 92.2799 188.873 89.6307 187.776L33.1942 164.399C30.5449 163.302 29.2203 162.753 28.2336 161.766C27.2468 160.78 26.6982 159.455 25.6008 156.806L2.22405 100.369C1.12669 97.7201 0.578013 96.3954 0.578013 95C0.578013 93.6046 1.12669 92.2799 2.22405 89.6307L25.6008 33.1942C26.6982 30.5449 27.2468 29.2203 28.2336 28.2336C29.2203 27.2468 30.5449 26.6982 33.1942 25.6008L89.6307 2.22405Z" fill="#a3cf46" />
                    </svg>
                    <div className="w-12 h-12 bg-thm border-2 border-thm rounded-full flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300 relative z-10">
                       <MoveRight size={24} />
                    </div>
                 </div>
                 <span className="font-bold text-xl uppercase tracking-wider group-hover:text-primary text-black transition-colors">Get Started</span>
               </Link>
            </div>
          </div>
        </section>

        {/* --- Services Marquee --- */}
        <ServicesMarquee />

        {/* --- About Us Section --- */}
        <section className="py-24 md:py-40 bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Left Images */}
              <div className="relative">
                <FadeIn yOffset={40}>
                  <Image src="/img/about/about-img2.png" alt="Office Workers" width={600} height={700} className="w-full relative z-10" />
                </FadeIn>
                <div className="absolute top-6 left-6 w-full h-full z-0 hidden md:block animate-[pulse_4s_ease-in-out_infinite]">
                  <Image src="/img/about/about-img-outline.png" alt="Outline" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col">
                <FadeIn delay={0.2} yOffset={20}>
                  <p className="text-primary font-bold tracking-widest uppercase mb-4">Focused on Your Growth</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-thm mb-6 leading-tight">
                    Powered by Precision, Built on Trust
                  </h2>
                  <p className="text-xl text-secondary mb-10 leading-relaxed">
                    Our team of auditors, consultants, and analysts are committed to helping your business grow with accurate insights, reliable reporting, and expert financial guidance.
                  </p>
                </FadeIn>

                {/* Progress bars */}
                <FadeIn delay={0.4} yOffset={30}>
                  <div className="bg-[#1a2b4b] rounded-2xl p-8 flex flex-col gap-6 w-full">
                    {/* Progress 1 */}
                    <div>
                      <div className="flex justify-between text-white font-bold text-xl mb-3">
                        <span>Audit & Assurance</span>
                        <CounterUp endAmount={98} suffix="%" duration={2} />
                      </div>
                      <div className="w-full h-2.5 bg-thm rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000 w-[98%]" />
                      </div>
                    </div>
                    {/* Progress 2 */}
                    <div>
                      <div className="flex justify-between text-white font-bold text-xl mb-3">
                        <span>Tax & Compliance</span>
                        <CounterUp endAmount={96} suffix="%" duration={2} />
                      </div>
                      <div className="w-full h-2.5 bg-thm rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000 w-[96%]" />
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} yOffset={30} className="mt-10">
                  <Link href="/contact-us">
                    <ButtonBase>Book a Consultation</ButtonBase>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section className="py-24 md:py-40 bg-zinc-50 relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col items-center mb-20">
              <FadeIn delay={0.2} yOffset={20}>
                <p className="text-primary font-bold tracking-widest uppercase mb-4 text-center">Comprehensive Accounting Solutions</p>
              </FadeIn>
              <FadeIn delay={0.4} yOffset={30}>
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-thm text-center leading-tight">
                  Expert Financial Services <br className="hidden md:block"/> for Modern Businesses
                </h2>
              </FadeIn>
            </div>
            
            {/* Displaying a subset of services on homepage to align with original aesthetic */}
            <ServicesList include={['audit-and-assurance', 'tax-agency', 'management-consulting', 'accounting-vat']} />
            
            <FadeIn delay={0.2} yOffset={20} className="w-full text-center mt-12">
               <Link href="/services">
                 <ButtonBase variant="outline">View All Services</ButtonBase>
               </Link>
            </FadeIn>
          </div>
        </section>

        {/* --- Team Section --- */}
        <TeamSection />

        {/* --- Testimonials Section --- */}
        <TestimonialSection />

        {/* --- Blog / News Section --- */}
        <section className="py-24 md:py-40 bg-zinc-50 relative">
          {/* Grain overlay effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/img/overlay/grain.png')", backgroundRepeat: 'repeat' }} />
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col items-center pb-20">
              <FadeIn delay={0.2} yOffset={20}>
                <p className="text-primary font-bold tracking-widest uppercase mb-4 text-center">Our Latest Blog and News</p>
              </FadeIn>
              <FadeIn delay={0.4} yOffset={30}>
                 <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-thm text-center">
                   Stay Informed with Al Shamsi
                 </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <BlogCard 
                  key={post.slug}
                  delay={index * 0.15}
                  img={post.featuredImage || "/img/blog/demo1.png"}
                  date={new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                  title={post.title}
                  url={`/blog/${post.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
