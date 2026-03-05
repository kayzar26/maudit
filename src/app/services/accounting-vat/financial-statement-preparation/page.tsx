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
  title: "Financial Statement Preparation in Dubai | Maudit",
  description: "Financial statement preparation services in Dubai. Professionally prepared balance sheets, P&L, and cash flow statements.",
};

export default function FinancialStatementPreparationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Financial Statement Preparation"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/accounting-vat", name: "Accounting & VAT" },
            { url: "/services/accounting-vat/financial-statement-preparation", name: "Financial Statement Preparation" },
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
                      src="/img/service/accounting-vat/financial-statement-preparation.webp"
                      alt="Financial Statement Preparation"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Financial Statement Preparation Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Financial statement preparation is a process of creating right and error-free financial documents. The statement speaks about the financial position and performance of a company. <strong className="text-black">MAJED ALSHAMSI AUDITING</strong> is committed to making sure that the company's financial statements are not simply an important requirement but a special tool for making a strategic decision. We specialize in offering top-notch accounting and financial reporting solutions, assisting you to quickly navigate the complexities of fiscal statement preparation by following the Financial Reporting standards in Dubai.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our experts make sure that the financial statements meet all regulatory needs by keeping you on the safer side and focusing on the market reputation
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact Financial Statement Preparation Services in Dubai if you'd like to learn more about services.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact us now to find out more about our financial statement preparation solutions.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Why Choose MAJED ALSHAMSI AUDITING for Financial Statement Preparation Services in Dubai?
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Correct and Compliant Statements
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Focus on special strategies
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Get rid of extra Fines and Legal issues
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Financial Statement Preparation Services in Dubai
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Correct and Compliant Statements Our careful approach makes sure that the financial statements are right and completely follow the latest standards.</li>
                    <li>Focus on special strategies Our team follows up the insightful analysis to identify trends, exploit strengths, and answer the weaknesses.</li>
                    <li>It is important to make well-informed strategic decisions with confidence.</li>
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
