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
  title: "External Audit Services in Dubai | Maudit",
  description: "External audit services in Dubai. Independent third-party audits for compliance, credibility, and stakeholder confidence.",
};

export default function ExternalAuditPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="External Audit Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/external-audit", name: "External Audit Services" },
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
                      src="/img/service/audit-assurance/external-audit.webp"
                      alt="External Audit Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    External Audit Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    The external audit services are accountable for testing out the financial records and statements of a company. It is important to cheer up shareholders, investors, and stakeholders about the right financial statements. With Majed Alshamsi Auditing, doors are always open to find the best external audit services. Our team of professional chartered accountants, trained public accountants and, chartered certified accountants are always ready to give the required support to the clients.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    At Majed Alshamsi Auditing, we have the team on board. Our team of professionals performs the required financial audits in Dubai work for us by sharing the most dedicated services to our customers.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Finance is a special area where experience is vital. With years of experience in accounting and auditing in Dubai, you can trust us with your venture.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Majed Alshamsi Auditing makes sure to give the best solution in Dubai that is budget-friendly to you. Get the most effective services with us!
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    With a reliable clientele all over the UAE, our team works by following global accounting standards.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact us now for more information on <strong className="text-black"> External Audit Services in Dubai! </strong>
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our external audit services in Dubai are:
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Why choose us? - External Audit Services in Dubai
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Team of professional auditors on board:
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Long industry experience:
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Budget-friendly services:
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Following the international standards:
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Financial Statement Audits</li>
                    <li>Internal Control Evaluation</li>
                    <li>Compliance Audits</li>
                    <li>Assurance and Special Purpose Audits</li>
                    <li>Timely Reporting and Transparent Communication</li>
                    <li>Team of professional auditors on board: At Majed Alshamsi Auditing, we have the team on board. Our team of professionals performs the required financial audits in Dubai work for us by sharing the most dedicated services to our customers.</li>
                    <li>Long industry experience: Finance is a special area where experience is vital. With years of experience in accounting and auditing in Dubai, you can trust us with your venture.</li>
                    <li>Budget-friendly services: Majed Alshamsi Auditing makes sure to give the best solution in Dubai that is budget-friendly to you. Get the most effective services with us!</li>
                    <li>Following the international standards: With a reliable clientele all over the UAE, our team works by following global accounting standards.</li>
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
