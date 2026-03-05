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
  title: "Corporate Tax Services in Dubai | Maudit",
  description: "Corporate tax services through our tax agency in Dubai. Registration, filing, and compliance with UAE Federal Tax Authority.",
};

export default function CorporateTaxPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Corporate Tax Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/tax-agency", name: "Tax Agency" },
            { url: "/services/tax-agency/corporate-tax", name: "Corporate Tax Services" },
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
                      src="/img/service/tax-agency/corporate-tax.webp"
                      alt="Corporate Tax Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Corporate Tax Agency Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    As an authorized tax agency, Majed Alshamsi Auditing provides end-to-end corporate tax services to businesses across the UAE. Our team of certified tax agents handles all aspects of corporate tax compliance, from initial registration to annual filing and ongoing advisory.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We work directly with the Federal Tax Authority (FTA) on behalf of our clients, ensuring accurate filings, timely submissions, and full regulatory compliance. Our deep understanding of UAE tax law means you can trust us to manage your corporate tax obligations efficiently.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Corporate Tax Agency Services:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Corporate Tax Registration with FTA</li>
                    <li>Tax Return Preparation & Filing</li>
                    <li>Tax Compliance Reviews</li>
                    <li>FTA Communication & Representation</li>
                    <li>Tax Payment Processing</li>
                    <li>Penalty Resolution Support</li>
                  </ul>


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
