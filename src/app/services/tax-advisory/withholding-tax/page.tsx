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
  title: "Withholding Tax Services in Dubai | Maudit",
  description: "Withholding tax advisory services in Dubai. Navigate withholding tax obligations with expert guidance.",
};

export default function WithholdingTaxPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Withholding Tax Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/tax-advisory", name: "Tax Advisory" },
            { url: "/services/tax-advisory/withholding-tax", name: "Withholding Tax Services" },
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
                      src="/img/service/tax-advisory/withholding-tax.webp"
                      alt="Withholding Tax Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Withholding Tax Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    With the help of <strong className="text-black">careful planning</strong> and professional advice, the risks associated with withholding tax in Dubai can be significantly minimized. Understanding tax legislation and procedures is crucial — and with the support of experienced professionals, businesses can <strong className="text-black">ensure full compliance</strong> while reducing potential liabilities.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    At <strong className="text-black">Majed Alshamsi Auditing</strong>, we specialize in delivering trusted Withholding Tax Services in Dubai. Our team of tax professionals offers <strong className="text-black">comprehensive support</strong> to ensure that your business fulfills all legal obligations related to withholding tax, enabling you to focus on growth with peace of mind.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We manage timely submissions and ensure your filings align with the latest tax requirements, <strong className="text-black">avoiding penalties</strong> or late fees.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our experts communicate directly with tax authorities on your behalf, clarifying and resolving any compliance concerns or inquiries.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    If there’s a discrepancy or unfavorable tax assessment, we assist in drafting and submitting objections, backed by proper documentation and legal reasoning.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We conduct a <strong className="text-black">thorough review</strong> of your current practices to identify compliance gaps and offer tailored recommendations to improve and optimize your tax processes.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Since the announcement of the <strong className="text-black">UAE corporate tax</strong> framework, business owners have expressed concern about the applicability of withholding tax. In essence, it is deducted at the source for specific types of payments. It’s crucial to understand how this applies under the UAE’s evolving tax regime.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our tax professionals stay <strong className="text-black">up to date</strong> with the latest regulations and offer clear insights into the applicability, rates, and impact of withholding tax on your operations. Whether you&apos;re handling cross-border payments or <strong className="text-black">service-based transactions</strong>, our consultants ensure you make informed decisions. To <strong className="text-black">stay compliant</strong> and avoid unnecessary penalties, rely on <strong className="text-black">Majed Alshamsi Auditing</strong> for all your withholding tax needs.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    <strong className="text-black">Contact us today</strong> to schedule a personalized consultation!
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Expert Withholding Tax Services in Dubai
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Comprehensive Withholding Tax Services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Monthly and yearly Withholding Tax compliance
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Answering the queries from tax authorities
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Support in filing objections against assessments
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Withholding Tax health check
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Understanding UAE Withholding Tax Framework
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Monthly and yearly Withholding Tax compliance We manage timely submissions and ensure your filings align with the latest tax requirements, avoiding penalties or late fees.</li>
                    <li>Answering the queries from tax authorities Our experts communicate directly with tax authorities on your behalf, clarifying and resolving any compliance concerns or inquiries.</li>
                    <li>Support in filing objections against assessments If there’s a discrepancy or unfavorable tax assessment, we assist in drafting and submitting objections, backed by proper documentation and legal reasoning.</li>
                    <li>Withholding Tax health check We conduct a thorough review of your current practices to identify compliance gaps and offer tailored recommendations to improve and optimize your tax processes.</li>
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
