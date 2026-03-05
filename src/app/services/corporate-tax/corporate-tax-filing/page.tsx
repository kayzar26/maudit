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
  title: "Corporate Tax Filing in Dubai | Maudit",
  description: "Corporate tax filing services in Dubai. Accurate, timely tax return preparation and submission to the FTA.",
};

export default function CorporateTaxFilingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Corporate Tax Filing"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/corporate-tax", name: "Corporate Tax" },
            { url: "/services/corporate-tax/corporate-tax-filing", name: "Corporate Tax Filing" },
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
                      src="/img/service/corporate-tax/corporate-tax-filing.webp"
                      alt="Corporate Tax Filing"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Corporate Tax Filing Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Accurate and timely corporate tax filing is essential to avoid penalties and maintain good standing with the Federal Tax Authority. At Majed Alshamsi Auditing, our experienced tax professionals prepare and file your corporate tax returns with precision, ensuring all deductions, exemptions, and reliefs are properly applied.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We stay current with all changes to UAE tax law and FTA guidelines, so your filings are always compliant. Our comprehensive approach covers everything from calculating your taxable income to submitting the final return and managing any FTA queries.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Tax Filing Services Include:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Taxable Income Computation</li>
                    <li>Tax Return Preparation</li>
                    <li>Deduction & Exemption Optimization</li>
                    <li>Electronic Filing with FTA</li>
                    <li>Deadline Management</li>
                    <li>Post-Filing Support & Query Resolution</li>
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
