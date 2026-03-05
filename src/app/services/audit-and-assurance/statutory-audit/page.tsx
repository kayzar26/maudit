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
  title: "Statutory Audit Services in Dubai | Maudit",
  description: "Statutory audit services in Dubai. Legally required financial audits conducted by certified professionals.",
};

export default function StatutoryAuditPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Statutory Audit Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/statutory-audit", name: "Statutory Audit Services" },
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
                      src="/img/service/audit-assurance/statutory-audit.webp"
                      alt="Statutory Audit Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Statutory Audit Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    A statutory audit is also called a financial audit. It is one of the special kinds of audits that should be done according to the statutes relevant to the entity. Majed Alshamsi Auditing offers trustworthy statutory audit services in the UAE. A statutory audit is required for government institutions to check and assess their performance. A statutory audit is a lawfully necessary audit that must be completed to evaluate the company's financial stand and fiscal records.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our statutory auditing team comprises professionals who are proficient in conducting statutory auditing professionally. The team members stay acquainted with the latest modifications in the arena of statutory auditing to keep ahead in the services. Just contact Majed Alshamsi Auditing to enquire more about the professional statutory audit services in Dubai.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Special Requirements of Statutory Audit Services in Dubai
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Information about the fixed assets, bank statements with information on the transactions therein and information on the cash receipts and payments</li>
                    <li>Details on the availed secured and unsecured loans</li>
                    <li>Top advances trade payments and receiving</li>
                    <li>Information on the local purchases and import purchases</li>
                    <li>Details about the local sales and export</li>
                    <li>Information on the inventory, administration and cost of the selling</li>
                    <li>Information on the foreign exchange earnings & expenses</li>
                    <li>Statutory dues as well as more levies</li>
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
