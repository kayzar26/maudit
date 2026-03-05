import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceSidebar } from "@/components/front/service/ServiceSidebar";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
// import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICV Audit & Certification Services in Dubai | Maudit",
  description: "ICV audit and certification services in Dubai. Get certified for In-Country Value compliance in the UAE.",
};

export default function IcvAuditCertificationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="ICV Audit & Certification"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/icv-audit-certification", name: "ICV Audit & Certification" },
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
                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    ICV Audit & Certification
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    In-Country Value (ICV) certification is essential for companies looking to participate in government tenders and contracts in the UAE. Our team of certified ICV auditors helps organizations achieve and maintain their ICV certification by conducting thorough audits, preparing documentation, and ensuring compliance with the latest ICV guidelines set by the Ministry of Industry and Advanced Technology.
                  </p>
                </FadeIn>

                <FadeIn delay={0.1} yOffset={30}>
                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our ICV Audit & Certification Services Include:
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 text-lg">
                    {[
                      "ICV Certification Audits",
                      "Compliance Documentation",
                      "Score Optimization",
                      "Government Tender Eligibility",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                          <Check size={18} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>

                <FadeIn delay={0.2} yOffset={20}>
                  <Link href="/contact-us">
                    <ButtonBase>Book A Consultation</ButtonBase>
                  </Link>
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
