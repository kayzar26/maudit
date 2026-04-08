import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServicesList } from "@/components/front/service/ServicesList";
import { Metadata } from "next";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Maudit",
  description: "Explore Maudit's comprehensive auditing, accounting, tax, and consulting services tailored for businesses across every sector in the UAE.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const topLevelServices = services.filter((s) => !s.slug.includes("/"));
  
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": topLevelServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.headline,
      "url": `https://maudit.ae/services/${service.slug}`
    }))
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar />
      
      <main className="flex-grow">
        <Breadcrumb
          title="Services"
          pages={[
            { url: "/", name: "Home" },
            { url: "/services", name: "Services" },
          ]}
        />

        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header section */}
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
                Trusted Expertise Across Every Sector
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-thm">
                Industries we serve
              </h2>
            </div>

            {/* Services List Integration */}
            <div className="w-full">
              <ServicesList />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
