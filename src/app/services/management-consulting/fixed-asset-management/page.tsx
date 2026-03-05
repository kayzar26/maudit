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
  title: "Fixed Asset Management in Dubai | Maudit",
  description: "Fixed asset management services in Dubai. Optimize your asset lifecycle from acquisition to disposal.",
};

export default function FixedAssetManagementPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Fixed Asset Management"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/management-consulting", name: "Management Consulting" },
            { url: "/services/management-consulting/fixed-asset-management", name: "Fixed Asset Management" },
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
                      src="/img/service/management-consulting/fixed-asset-management.webp"
                      alt="Fixed Asset Management"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Fixed Asset Management Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Management of the fixed assets includes tracking, monitoring and keeping equipment, computers, vehicles and more physical assets.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    It&apos;s not simple to handle the fixed assets. The progress of assets and adding up more must be properly recorded. Several businesses face great challenges in tracking the location, quantity, maintenance, condition, and assets of depreciation.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    To solve your problems, we at <strong className="text-black">MAJED ALSHAMSI AUDITING </strong> will assist you to handle the assets professionally and keep proper tracking. Our expert team will aid you in classifying assets and sub-assets depending on the location.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    No matter, it is a small or large organization; fixed assets are an essential part of every business. Every business needs to register a fixed asset register and preserve it properly. It assists the business in cutting down the costs, detecting and preventing fraud, maximising the value of the asset and in decision-making.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Whatever your question or query, the professional team at <strong className="text-black"> MAJED ALSHAMSI AUDITING </strong> will point you in the right direction. If you have any queries, directly contact our team online!
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Asset Inventory and Classification
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Asset Tracking and Maintenance
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Depreciation and Valuation
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Asset Utilization and Optimization
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Regulatory Compliance and Reporting
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Asset Disposal and Retirement
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Technology and Automation
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Asset Inventory and Classification</li>
                    <li>Asset Tracking and Maintenance</li>
                    <li>Depreciation and Valuation</li>
                    <li>Asset Utilization and Optimization</li>
                    <li>Regulatory Compliance and Reporting</li>
                    <li>Asset Disposal and Retirement</li>
                    <li>Technology and Automation</li>
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
