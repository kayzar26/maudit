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
  title: "Transfer Pricing Services in Dubai | Maudit",
  description: "Transfer pricing services in Dubai. Ensure arm's length compliance and minimize tax risks with expert guidance.",
};

export default function TransferPricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Transfer Pricing Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/tax-advisory", name: "Tax Advisory" },
            { url: "/services/tax-advisory/transfer-pricing", name: "Transfer Pricing Services" },
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
                      src="/img/service/tax-advisory/transfer-pricing.webp"
                      alt="Transfer Pricing Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Transfer Pricing Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    <strong className="text-black">Transfer pricing</strong> refers to the pricing of goods, services, and intangibles between associated enterprises such as subsidiaries and affiliates. With the increasing complexity of global operations, it has become a key area of risk and scrutiny for multinational businesses. If you&apos;re looking for reliable and effective solutions, <strong className="text-black">Majed Alshamsi Auditing</strong> offers expert <strong className="text-black">Transfer Pricing Services in Dubai</strong> tailored to your needs.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We help companies determine economically supportable transfer prices, document their policies, and respond to challenges from tax authorities. With intercompany transactions growing in volume and complexity, transfer pricing is now a major component of <strong className="text-black">global tax risk management</strong>.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We help you build robust and defendable pricing models based on industry standards, regulatory requirements, and financial objectives.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Ensure compliance with international transfer pricing rules by preparing <strong className="text-black">comprehensive documentation</strong> that supports your policies and withstands audit scrutiny.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our experts help you identify transfer pricing risks and manage disputes or inquiries from tax authorities through clear, structured responses.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We assist tax leaders in making informed decisions about budgeting, prioritizing limited resources, and aligning with long-term business and technology goals.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Thanks to our access to a global network of transfer pricing professionals, we bring in-depth industry expertise and international perspective to every engagement. Our team ensures your business remains compliant, competitive, and well-prepared for evolving tax regulations.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Let us help you navigate complex transfer pricing challenges with ease. Contact Majed Alshamsi Auditing today for a customized consultation.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Expert Transfer Pricing Services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Developing and implementing transfer pricing strategies
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Documentation and reporting
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Risk assessment and controversy management
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Strategic advisory for resource planning
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Global Expertise. Local Insight.
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Developing and implementing transfer pricing strategies We help you build robust and defendable pricing models based on industry standards, regulatory requirements, and financial objectives.</li>
                    <li>Documentation and reporting Ensure compliance with international transfer pricing rules by preparing comprehensive documentation that supports your policies and withstands audit scrutiny.</li>
                    <li>Risk assessment and controversy management Our experts help you identify transfer pricing risks and manage disputes or inquiries from tax authorities through clear, structured responses.</li>
                    <li>Strategic advisory for resource planning We assist tax leaders in making informed decisions about budgeting, prioritizing limited resources, and aligning with long-term business and technology goals.</li>
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
