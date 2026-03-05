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
  title: "Financial Reporting Services in Dubai | Maudit",
  description: "Financial reporting services in Dubai. Accurate IFRS-compliant reports for stakeholders and regulatory compliance.",
};

export default function FinancialReportingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Financial Reporting Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/accounting-vat", name: "Accounting & VAT" },
            { url: "/services/accounting-vat/financial-reporting", name: "Financial Reporting Services" },
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
                      src="/img/service/accounting-vat/financial-reporting.webp"
                      alt="Financial Reporting Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Financial Reporting Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Financial Reporting Services are accountable for preparing different fiscal reports and tax returns and support in handling different kinds of financial processes. Precise financial reporting and analysis are important for any business trying to obtain a competitive benefit. We at <strong className="text-black">MAJED ALSHAMSI AUDITING</strong> are here with the most accommodating Financial Reporting Services for our customers in Dubai. Our financial reporting experts create reports on the financial health of businesses. Every company can generate financial reports, no matter for internal or tax ideas.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our team is an expert in technical understanding according to industry-specific needs. Well-versed in accounting ideas and Dubai Accounting Standards for all kinds of financial reporting. We also serve with the virtual and on-site customized team.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    So, if you wish to take benefits from Financial Reporting Services in Dubai offered at MAJED ALSHAMSI AUDITING, just contact us now!
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact us now to find out more about our financial reporting solutions.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    How do we serve with financial reporting services?
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Financial Reporting Services in Dubai
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Grab accurate data confidently and error-free financial reporting services with smooth processing</li>
                    <li>Faster services and quick study and compile financial reports</li>
                    <li>Allow the quality of public and choices of internal management business</li>
                    <li>Assure to boost the debt management of a company</li>
                    <li>Provides real-time account tracking for proper management</li>
                    <li>The availability of funds for the company supports the organization in establishing development plans</li>
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
