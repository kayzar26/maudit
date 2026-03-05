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
  title: "VAT Registration Services in Dubai | Maudit",
  description: "VAT registration services in Dubai. Expert assistance with FTA registration, compliance, and ongoing VAT management.",
};

export default function VatRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="VAT Registration Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/tax-agency", name: "Tax Agency" },
            { url: "/services/tax-agency/vat-registration", name: "VAT Registration Services" },
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
                      src="/img/service/tax-agency/vat-registration.webp"
                      alt="VAT Registration Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    VAT Registration Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    VAT registration is a compulsory process for businesses in Dubai to list with the government as a company qualified for the return of VAT. Do you need reliable and trustworthy VAT registration services? Yes. We at Majed Al-Shamasi Auditing are here with a team of professionals proficiently handling VAT registration services for our esteemed customers.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We are a professional company that gives accounting services to businesses all over the world. A small mistake in the way might result in starting all over again. Therefore, you can contact us to find the best VAT registration service in Dubai, as it boasts a team of experts who make sure that the company&apos;s documents are transparent, up-to-date, and certified.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    MAJED ALSHAMSI AUDITING understands the importance of timely registration.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Follow-up on the regulatory requirements can help avoid unwanted penalties and more problems.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our VAT registration services in Dubai make sure that the application is conducted suitably according to the needs of the authority.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact us now for more information on VAT registration services in Dubai.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Assessment of VAT Obligations
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Registration Application Preparation
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Documentation Review
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    VAT Registration Submission
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Communication with Tax Authorities
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    VAT Compliance Advisory
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Why Choose Us
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Assessment of VAT Obligations</li>
                    <li>Registration Application Preparation</li>
                    <li>Documentation Review</li>
                    <li>VAT Registration Submission</li>
                    <li>Communication with Tax Authorities</li>
                    <li>VAT Compliance Advisory</li>
                    <li>MAJED ALSHAMSI AUDITING understands the importance of timely registration.</li>
                    <li>Follow-up on the regulatory requirements can help avoid unwanted penalties and more problems.</li>
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
