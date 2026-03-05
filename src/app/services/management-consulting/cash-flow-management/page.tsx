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
  title: "Cash Flow Management in Dubai | Maudit",
  description: "Cash flow management consulting in Dubai. Optimize your business cash flow with expert financial planning and forecasting.",
};

export default function CashFlowManagementPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Cash Flow Management"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/management-consulting", name: "Management Consulting" },
            { url: "/services/management-consulting/cash-flow-management", name: "Cash Flow Management" },
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
                      src="/img/service/management-consulting/cash-flow-management.webp"
                      alt="Cash Flow Management"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Cash Flow Management Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Cash flow management is the backbone of any sustainable business. At Majed Alshamsi Auditing, our management consulting team provides expert cash flow analysis, forecasting, and optimization services to ensure your business maintains healthy liquidity at all times.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We work closely with business owners and finance teams to identify cash flow bottlenecks, optimize payment cycles, and establish robust financial planning processes that support long-term growth and stability.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Cash Flow Management Services:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Cash Flow Analysis & Forecasting</li>
                    <li>Working Capital Optimization</li>
                    <li>Payment Cycle Management</li>
                    <li>Accounts Receivable Improvement</li>
                    <li>Budget Planning & Control</li>
                    <li>Financial Health Assessment</li>
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
