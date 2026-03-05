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
  title: "Tax Planning & Compliance in Dubai | Maudit",
  description: "Tax planning and compliance services in Dubai. Strategic tax optimization and regulatory compliance for UAE businesses.",
};

export default function TaxPlanningCompliancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Tax Planning & Compliance"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/corporate-tax", name: "Corporate Tax" },
            { url: "/services/corporate-tax/tax-planning-compliance", name: "Tax Planning & Compliance" },
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
                      src="/img/service/corporate-tax/tax-planning-compliance.webp"
                      alt="Tax Planning & Compliance"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Tax Compliance Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Tax compliance is a decision of a business to follow the tax laws of a country. If you are doing a business in Dubai, you are expected to follow up special laws for paying taxes.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    MAJED ALSHAMSI AUDITING is a renowned Tax Compliance Services in Dubai. It has a team of seasoned professionals having in-depth knowledge about diverse prospective aspects of tax and compliance in UAE.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Understanding the benefits of a combined taxation system, the UAE has efficient its tax structure to turn it more appealing to investors and trader from across the Dubai. People in the UAE are not accountable to income tax whereas oil firms are accountable to corporate taxes.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our tax compliance team work quickly to uncover and remove ineffective processes, giving strategic advice and sharing finest practices depend on the years of experience providing organizations in numerous industries and jurisdictions a wide-ranging suite of compliance services.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    If you have any doubt in your mind related to <strong className="text-black">Corporate tax preparation Dubai</strong>, contact our team for more information!
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Expert Tax Compliance Services in Dubai
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    UAE Tax Structure
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Comprehensive Tax Compliance Services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Corporate tax compliance services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Transfer Pricing Rules
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Excise tax compliance services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    VAT compliance services
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Personal Income tax compliance for individuals
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Registration/deregistration with the condition authorities for different taxes
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Tax training for your employees
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Corporate tax compliance services</li>
                    <li>Transfer Pricing Rules</li>
                    <li>Excise tax compliance services</li>
                    <li>VAT compliance services</li>
                    <li>Personal Income tax compliance for individuals</li>
                    <li>Registration/deregistration with the condition authorities for different taxes</li>
                    <li>Tax training for your employees</li>
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
