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
  title: "Asset Valuation Services in Dubai | Maudit",
  description: "Professional asset valuation services in Dubai. Get accurate valuations for insurance, financial reporting, and business decisions.",
};

export default function AssetValuationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Asset Valuation Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/asset-valuation", name: "Asset Valuation Services" },
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
                      src="/img/service/audit-assurance/asset-valuation.webp"
                      alt="Asset Valuation Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Get the Professional Asset Valuation Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    With asset valuation proficiency, it is easy to determine the right value for all your assets for insurance and fiscal reporting purposes. Majed Alshamsi Auditing is a renowned asset valuation services company in Dubai with proficiency in carrying out widespread asset valuations across all ain industry sectors in Dubai.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Services in Dubai Our team of professional RICS-certified valuers can better understand the INS and out-of-asset valuation. Our services will help you to find out the present market value of the assets presently available in the business operations.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Asset Valuation
                  </h3>


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
