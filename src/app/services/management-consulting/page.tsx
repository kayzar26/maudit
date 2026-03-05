import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceSidebar } from "@/components/front/service/ServiceSidebar";
import { SubCategoryList } from "@/components/front/service/SubCategoryList";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management Consulting Services in Dubai | Maudit",
  description: "Management consulting services in Dubai. Inventory management, fixed asset management, and cash flow optimization by Majed Alshamsi Auditing.",
};

export default function ManagementConsultingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Management Consulting"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/management-consulting", name: "Management Consulting" },
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
                    Management Consulting
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    At Majed Alshamsi Auditing, our management consulting practice helps businesses optimize their operations, improve financial performance, and achieve strategic objectives. From inventory management systems to fixed asset tracking and cash flow optimization, we provide actionable insights and solutions tailored to the unique challenges of businesses operating in the UAE market.
                  </p>
                </FadeIn>

                <FadeIn delay={0.1} yOffset={30}>
                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Management Consulting Services Include:
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 text-lg">
                    {[
                      "Inventory Management Systems",
                      "Fixed Asset Management",
                      "Cash Flow Optimization",
                      "Operational Efficiency",
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

                <FadeIn delay={0.3} yOffset={30}>
                  <h2 className="text-3xl font-extrabold text-thm mb-8 tracking-tight">
                    See More Services in This Category:
                  </h2>
                  <SubCategoryList services={[
                    { label: "Inventory Management System", imgUrl: "", url: "/services/management-consulting/inventory-management-system" },
                    { label: "Fixed Asset Management", imgUrl: "", url: "/services/management-consulting/fixed-asset-management" },
                    { label: "Cash Flow Management", imgUrl: "", url: "/services/management-consulting/cash-flow-management" },
                  ]} />
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
