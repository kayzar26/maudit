import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceSidebar } from "@/components/front/service/ServiceSidebar";
import { SubCategoryList } from "@/components/front/service/SubCategoryList";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
// import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Advisory Services in Dubai | Maudit",
  description: "Expert tax advisory services in Dubai. Strategic tax planning, transfer pricing, and withholding tax solutions for UAE businesses.",
};

export default function TaxAdvisoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Tax Advisory"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/tax-advisory", name: "Tax Advisory" },
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
                    Tax Advisory
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Tax advisory services are fundamental for businesses aiming to optimize their tax position while remaining fully compliant with UAE regulations. At Majed Alshamsi Auditing, our tax advisory team offers deep expertise in all facets of taxation, including transfer pricing, withholding tax obligations, international tax treaties, and strategic tax planning.
                  </p>
                </FadeIn>

                <FadeIn delay={0.1} yOffset={30}>
                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Tax Advisory Services Include:
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 text-lg">
                    {[
                      "Transfer Pricing Advisory",
                      "Withholding Tax Compliance",
                      "International Tax Planning",
                      "Tax Treaty Analysis",
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
                    { label: "Transfer Pricing Services", imgUrl: "", url: "/services/tax-advisory/transfer-pricing" },
                    { label: "Withholding Tax Services", imgUrl: "", url: "/services/tax-advisory/withholding-tax" },
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
