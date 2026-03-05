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
  title: "Accounting Outsourcing in Dubai | Maudit",
  description: "Accounting outsourcing services in Dubai. Reduce costs and improve accuracy by outsourcing your accounting to Majed Alshamsi Auditing.",
};

export default function AccountingOutsourcingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Accounting Outsourcing"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/accounting-vat", name: "Accounting & VAT" },
            { url: "/services/accounting-vat/accounting-outsourcing", name: "Accounting Outsourcing" },
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
                      src="/img/service/accounting-vat/accounting-outsourcing.webp"
                      alt="Accounting Outsourcing"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Accounting Outsourcing Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Accounting outsourcing allows businesses to delegate their bookkeeping, financial reporting, and accounting functions to experienced professionals. At Majed Alshamsi Auditing, we provide comprehensive accounting outsourcing services tailored to the unique needs of businesses in Dubai and across the UAE.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our team of qualified accountants ensures accurate financial records, timely reporting, and full compliance with UAE accounting standards and regulations. By outsourcing your accounting to us, you can focus on your core business operations while we handle the numbers.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Whether you are a startup, SME, or established enterprise, our scalable accounting outsourcing solutions are designed to grow with your business.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Accounting Outsourcing Services Include:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>General Ledger Management</li>
                    <li>Accounts Payable & Receivable</li>
                    <li>Bank Reconciliation</li>
                    <li>Monthly Financial Reporting</li>
                    <li>VAT Return Preparation</li>
                    <li>Budgeting & Forecasting Support</li>
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
