import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceSidebar } from "@/components/front/service/ServiceSidebar";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Tracking Services in Dubai | Maudit",
  description: "Comprehensive asset tracking services in Dubai. Monitor, manage, and optimize your business assets with our expert team.",
};

export default function AssetTrackingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Asset Tracking Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/asset-tracking", name: "Asset Tracking Services" },
          ]}
        />

        <section className="py-24 bg-white text-secondary">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Sidebar */}
              <div className="lg:col-span-1 border-r border-gray-100 pr-0 lg:pr-8">
                <ServiceSidebar />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <FadeIn yOffset={40}>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-md">
                    <Image
                      src="/img/service/audit-assurance/asset-tracking.webp"
                      alt="Asset Tracking Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Asset Tracking Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Now, it is easy to manage the physical assets and digitize your asset management process with the best of the asset tracking services in Dubai. We at Majed Alshamsi Auditing give the best design to assist companies in managing as well as tracking their important business assets. We professionally deal in the best software solutions that are made as per the real-world demand of the customers. Only we do help with efficient resource planning, flexible to use. At Majed Alshamsi Auditing, we give all the required fixed asset management tools that businesses require to execute an efficient asset management system.
                  </p>



                  <FadeIn delay={0.3} yOffset={20}>
                    <Link href="/contact-us">
                      <ButtonBase>Get in Touch</ButtonBase>
                    </Link>
                  </FadeIn>
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
