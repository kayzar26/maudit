import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceSidebar } from "@/components/front/service/ServiceSidebar";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  const service = services.find(s => s.slug === slugPath);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  const service = services.find(s => s.slug === slugPath);
  
  if (!service) {
    notFound();
  }

  // Generate breadcrumb items dynamically based on the slug segments
  const breadcrumbPages = [{ url: "/services", name: "Services" }];
  
  if (resolvedParams.slug.length === 2) {
    // Parent category format (e.g. Audit & Assurance)
    const parentSlug = resolvedParams.slug[0];
    const parentName = parentSlug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .replace("And", "&");
    breadcrumbPages.push({ url: `/services/${parentSlug}`, name: parentName });
  }
  
  breadcrumbPages.push({ url: `/services/${slugPath}`, name: service.headline });

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.headline,
    "description": service.seoDescription,
    "provider": {
      "@type": "AccountingService",
      "name": "Majed Alshamsi Auditing",
      "url": "https://maudit.ae"
    },
    "url": `https://maudit.ae/services/${slugPath}`,
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb title={service.headline} pages={breadcrumbPages} />

        <section className="py-24 bg-white text-secondary">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-12">
              
              {/* Sidebar */}
              <div className="lg:col-span-1 border-r border-gray-100 pr-0 lg:pr-8">
                {(() => {
                  const parentSlug = resolvedParams.slug[0];
                  
                  // Find all services under this parent
                  const parentServices = services.filter(s => 
                    s.slug === parentSlug || s.slug.startsWith(`${parentSlug}/`)
                  );
                  
                  // Find the main parent service to get its headline
                  const mainParentService = services.find(s => s.slug === parentSlug);
                  
                  // If there are sub-services (more than just the parent itself)
                  if (parentServices.length > 1 && mainParentService) {
                    const otherService = {
                      heading: mainParentService.headline,
                       pages: parentServices.map(subService => ({
                        label: subService.headline,
                        url: `/services/${subService.slug}`
                      }))
                    };
                    
                    return <ServiceSidebar otherService={otherService} popularService={false} />;
                  } else {
                    // Fallback to popular services for standalone pages
                    return <ServiceSidebar popularService={true} />;
                  }
                })()}
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <FadeIn yOffset={40}>
                  
                  {service.featuredImage && service.featuredImage.trim() !== "" && (
                     <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-md">
                       <Image
                         src={service.featuredImage}
                         alt={service.headline}
                         fill
                         className="object-cover"
                       />
                     </div>
                  )}

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    {service.headline}
                  </h1>

                  <div 
                     className="prose prose-lg max-w-none text-secondary prose-headings:text-2xl prose-headings:font-bold prose-headings:text-thm prose-headings:mb-5 prose-ul:flex prose-ul:flex-col prose-ul:gap-3 prose-ul:list-disc prose-ul:ml-8 prose-ul:mb-10 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8"
                     dangerouslySetInnerHTML={{ __html: service.content }} 
                  />

                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
