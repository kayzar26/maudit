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
  title: "Independent Audit Services in Dubai | Maudit",
  description: "Independent audit services by certified auditors in Dubai. Unbiased financial statement audits for your business.",
};

export default function IndependentAuditPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Independent Audit Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/independent-audit", name: "Independent Audit Services" },
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
                      src="/img/service/audit-assurance/independent-audit.webp"
                      alt="Independent Audit Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Independent Audit Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    An independent audit is referred to as an examination of the financial records, accounts, accounting practices, business transactions, and internal controls of a generous nonprofit by the side of an &quot;independent&quot; auditor. Are you looking for the best quality of independent audit services in Dubai? Majed Alshamsi Auditing is the Top Audit Company in UAE proposing all kinds of audit services in Dubai. Our services comprise:
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    <strong className="text-black"> Audit Services </strong> offered by us work as a base of the client business and allow the auditors to serve the public interest with confidence and assurance. The flexible team at Majed Alshamsi Auditing delivers top-quality audits, introducing clarity and value, and delivering unparalleled client service. Our adept and practised auditors in UAE offer the top audit services to make sure for the trustworthiness and reliability of fiscals. Being one of the top independent audit services, Majed Alshamsi Auditing aims to make the process as smooth as possible. We also focus on delivering high-quality audit that is open to business needs. If you have any queries or questions in your mind, contact us now!
                  </p>


                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Financial audit</li>
                    <li>Internal audit</li>
                    <li>Tax audit</li>
                    <li>Stock audit</li>
                    <li>ICV audit</li>
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
