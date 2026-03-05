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
  title: "Corporate Tax Registration in Dubai | Maudit",
  description: "Corporate tax registration services in Dubai. Get registered with the FTA quickly and accurately with Majed Alshamsi Auditing.",
};

export default function CorporateTaxRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Corporate Tax Registration"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/corporate-tax", name: "Corporate Tax" },
            { url: "/services/corporate-tax/corporate-tax-registration", name: "Corporate Tax Registration" },
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
                      src="/img/service/corporate-tax/corporate-tax-registration.webp"
                      alt="Corporate Tax Registration"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Corporate Tax Registration Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Corporate tax registration is the first critical step for businesses subject to the UAE Corporate Tax Law. Majed Alshamsi Auditing provides seamless corporate tax registration services, ensuring your business is properly registered with the Federal Tax Authority (FTA) within the required timelines.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our tax professionals handle the entire registration process, from gathering the necessary documentation to submitting the application and obtaining your Tax Registration Number (TRN). We ensure full compliance with all regulatory requirements so you can focus on running your business.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Registration Services Include:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Eligibility Assessment</li>
                    <li>Documentation Preparation</li>
                    <li>FTA Portal Registration</li>
                    <li>Tax Registration Number (TRN) Obtainment</li>
                    <li>Post-Registration Compliance Setup</li>
                    <li>Ongoing Registration Support</li>
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
