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
  title: "Internal Control Services in Dubai | Maudit",
  description: "Internal control services in Dubai. Strengthen governance, prevent fraud, and ensure regulatory compliance with Majed Alshamsi Auditing.",
};

export default function InternalControlPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Internal Control Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/accounting-vat", name: "Accounting & VAT" },
            { url: "/services/accounting-vat/internal-control", name: "Internal Control Services" },
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
                      src="/img/service/accounting-vat/internal-control.webp"
                      alt="Internal Control Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Internal Control Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Internal control is a process managed by directors and management of an organization. These services are made to give reasonable assurance. The information being shared is reliable, accurate and on time. It is important to follow the applicable laws, regulations, policies and procedures.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We at <strong className="text-black">MAJED ALSHAMSI AUDITING</strong> consist of a multi-disciplinary team of experts who are proficiency in internal control services.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    <strong className="text-black">MAJED ALSHAMSI AUDITING</strong> assesses multiple business prospective which include values and ethics within the company, communication channels, performance management, and control information to help the execution of a strong governance procedure.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We aim to improve the performance of your business, boost value and even strengthen cross-functional coordination. MAJED ALSHAMSI AUDITING is always focused on providing customized solutions as per the needs of the customer.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our <strong className="text-black">Internal Control Services in Dubai</strong> will help you in preventing fraud. We can organize measures to deter any kind of fraudulent behaviour.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact us now to find out more about the internal control solutions.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our services include:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Control Environment Assessment</li>
                    <li>Risk Identification and Evaluation</li>
                    <li>Control Design and Implementation</li>
                    <li>Internal Control Testing and Monitoring</li>
                    <li>Fraud Prevention and Detection</li>
                    <li>Documentation and Compliance</li>
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
