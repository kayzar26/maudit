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
  title: "Internal Audit Outsourcing in Dubai | Maudit",
  description: "Outsource your internal audit function to experienced professionals. Cost-effective internal audit outsourcing in Dubai.",
};

export default function InternalAuditOutsourcingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Internal Audit Outsourcing"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/internal-audit-outsourcing", name: "Internal Audit Outsourcing" },
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
                      src="/img/service/audit-assurance/internal-audit-outsourcing.webp"
                      alt="Internal Audit Outsourcing"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Internal Audit Outsourcing Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Do you think that is why many firms go for internal audits? Well, the main job of an internal audit is to examine the process of the business and control the information technology. If you face some issues, it is important to look for the management to deploy the most favourable remedies. Internal Audit Outsourcing Services offered at Majed Alshamsi Auditing assist an organization to use a temporary staff of audit professionals to complete the objective analysis and tests. At the same time, issue reports as well.
                  </p>



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
