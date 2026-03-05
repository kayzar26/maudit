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
  title: "Internal Audit Services in Dubai | Maudit",
  description: "Internal audit services in Dubai. Strengthen your internal controls and risk management with our expert auditors at Majed Alshamsi Auditing.",
};

export default function InternalAuditPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Internal Audit Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/internal-audit", name: "Internal Audit Services" },
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
                      src="/img/service/audit-assurance/internal-audit.webp"
                      alt="Internal Audit Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Internal Audit Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    The internal audit of a company is all about the internal control of a business. It comprises the corporate governance and accounting processes. It is important to check if the company works according to the laws and regulations.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    <strong className="text-black">Internal audit services</strong> offered at Majed Alshamsi Auditing in UAE cover business operations as well as the internal entity of a company. Our prime aim is to allow the business to have special tools to boost operational efficiency. The professionals of audit first look into the problems and then come up with the right solution. Our prime focus is always to remove the legal issues.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our team of professional internal auditors, proprietary resources, and personalized tools are supportive in understanding the goals. Our internal audit process begins with a comprehensive analysis of your business, followed by developing a policy that aligns with your long-term aims.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact us now for more information on <strong className="text-black">Internal Audit Services in Dubai!</strong>
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Top Services Comprises
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Risk-Based Internal Audits</li>
                    <li>Compliance Audits</li>
                    <li>Operational Audits</li>
                    <li>Internal Control Assessments</li>
                    <li>Fraud Risk Assessments</li>
                    <li>Continuous Auditing and Monitoring</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    The main objective of the internal audit services in Dubai
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Achieving effectiveness as well as the value of all business operations.</li>
                    <li>Make sure that the company&apos;s assets are safeguarded.</li>
                    <li>Creating on-time financial reporting with great accuracy to increase the trustworthiness of the company.</li>
                    <li>Make sure that all business aspects follow the laws and regulations.</li>
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
