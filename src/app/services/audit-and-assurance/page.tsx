import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceSidebar } from "@/components/front/service/ServiceSidebar";
import { SubCategoryList } from "@/components/front/service/SubCategoryList";
import { Check } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit & Assurance Services in Dubai | Maudit",
  description: "Get professional audit and assurance services in Dubai. Our certified auditors offer statutory, internal, compliance, and process audits.",
};

const innerServices = [
  {
    label: "Asset Valuation Services",
    imgUrl: "img/service/audit-assurance/asset-valuation.webp",
    url: "/services/audit-and-assurance/asset-valuation",
  },
  {
    label: "Asset Tracking Services",
    imgUrl: "img/service/audit-assurance/asset-tracking.webp",
    url: "/services/audit-and-assurance/asset-tracking",
  },
  {
    label: "Internal Audit Outsourcing Services",
    imgUrl: "img/service/audit-assurance/internal-audit-outsourcing.webp",
    url: "/services/audit-and-assurance/internal-audit-outsourcing",
  },
  {
    label: "Independent Audit Services",
    imgUrl: "img/service/audit-assurance/independent-audit.webp",
    url: "/services/audit-and-assurance/independent-audit",
  },
  {
    label: "Statutory Audit Services",
    imgUrl: "img/service/audit-assurance/statutory-audit.webp",
    url: "/services/audit-and-assurance/statutory-audit",
  },
  {
    label: "Internal Audit Services",
    imgUrl: "img/service/audit-assurance/internal-audit.webp",
    url: "/services/audit-and-assurance/internal-audit",
  },
  {
    label: "External Audit Services",
    imgUrl: "img/service/audit-assurance/external-audit.webp",
    url: "/services/audit-and-assurance/external-audit",
  },
  {
    label: "Asset Tagging Services",
    imgUrl: "img/service/audit-assurance/asset-tagging-services.webp",
    url: "/services/audit-and-assurance/asset-tagging",
  },
];

export default function AuditAssurancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Audit & Assurance"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
          ]}
        />

        <section className="py-24 bg-white text-secondary">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Sidebar */}
              <div className="lg:col-span-1 border-r border-gray-100 pr-0 lg:pr-8">
                <ServiceSidebar />
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-2">
                <FadeIn yOffset={40}>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-md">
                    <Image
                      src="/img/service/main/audit-assurance.jpg"
                      alt="Audit and Assurance Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Audit and Assurance
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    An audit is a review of the documents and accounts related to a business. On the other hand, assurance is the process analysis related to the records and accounts.
                  </p>
                </FadeIn>

                <FadeIn delay={0.1} yOffset={30}>
                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Audit and Assurance Services in Dubai
                  </h3>

                  <p className="text-lg leading-relaxed mb-12">
                    Are you looking for professional <strong className="text-black">audit and assurance services in Dubai?</strong> Yes. MAJED ALSHAMSI AUDITING is available to help you at any time. Our team of certified auditors in the UAE promises to provide a complete range of audit and assurance services to meet the business requirements of our customers in a vibrant global setting.
                    <br /><br />
                    Apart from auditing services in the UAE, we deal in bookkeeping services, tax consultant services, financial advisory services, internal audits for companies, and additional tax-related services.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    We assist you with below services:
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 text-lg">
                    {[
                      "Statutory Audit",
                      "Internal & Concurrent Audit",
                      "Stock and Asset Audit",
                      "Process Audit",
                      "Compliance Audit",
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

                <FadeIn delay={0.2} yOffset={30}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                      <h3 className="text-xl font-bold text-thm mb-4">
                        Audit and Assurance Services in UAE
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        We are committed to offering transparent and organized Audit and Assurance Services in Dubai in addition to the records inspection and approval procedure to provide insightful information about your company. From the planning stage of the audit until the reporting phase of the audit, our auditors are prepared to help you at any time. We have expertise in a range of sectors, including asset management and healthcare.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                      <h3 className="text-xl font-bold text-thm mb-4">
                        Financial Audit Services in Dubai
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        One of the essential services that any organization needs to keep track of its financial activities is audit and assurance service. As a business owner, you must do a business valuation, recognize hazards, build credit, achieve business goals, and do other crucial expansion tasks.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3} yOffset={30}>
                  <h3 className="text-2xl font-bold text-thm mb-6">
                    Collaborate with Us for the Best Audit and Assurance Services
                  </h3>
                  <p className="text-lg leading-relaxed mb-12">
                    In Dubai, the audit isn't a number game any longer. It is more than reports or approvals that offer your company's complete picture. As one of any business's fundamental services, it ensures your accuracy per UAE's laws and IFRS (International Financial Reporting Standards). So, consulting us for audit and assurance services in UAE is imperative.
                  </p>

                  <h4 className="text-xl font-bold text-thm mb-6">
                    A Leading Provider of Audit & Assurance Services in Dubai: Why Choose Us?
                  </h4>
                  <p className="text-lg leading-relaxed mb-12">
                    We can comprehend a value-adding service that focuses on your business improvement instead of solely preparing your financial statements. Our <strong className="text-black">financial audit services in Dubai</strong> go beyond just reporting on business figures.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    <div className="bg-white border-l-4 border-primary shadow-sm p-6 rounded-r-lg">
                      <h4 className="font-bold text-thm mb-3 uppercase tracking-wide">Internal Audit</h4>
                      <p className="text-gray-600">The activity performed by the company's employees or people outside the team is the internal audit.</p>
                    </div>
                    <div className="bg-white border-l-4 border-primary shadow-sm p-6 rounded-r-lg">
                      <h4 className="font-bold text-thm mb-3 uppercase tracking-wide">External Audit</h4>
                      <p className="text-gray-600">It is the company's audit performed by any external party. The third party isn't a member of the company.</p>
                    </div>
                    <div className="bg-white border-l-4 border-primary shadow-sm p-6 rounded-r-lg">
                      <h4 className="font-bold text-thm mb-3 uppercase tracking-wide">Statutory Audit</h4>
                      <p className="text-gray-600">Authorities or governments need an audit of the business that ensures the accuracy of the organisational records.</p>
                    </div>
                    <div className="bg-white border-l-4 border-primary shadow-sm p-6 rounded-r-lg">
                      <h4 className="font-bold text-thm mb-3 uppercase tracking-wide">VAT Audit</h4>
                      <p className="text-gray-600">It's the evaluation of the ledgers as well as trial balances of an establishment by certified tax agents.</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-thm mb-6">
                    Why choose us for audit and assurance services?
                  </h4>
                  
                  <ul className="flex flex-col gap-4 mb-20">
                    {[
                      "Reinforcement against the challenge of defrauding investors",
                      "Precision in fiscal statements",
                      "Expertise and knowledge",
                      "Truly loyal and work according to the rules made by the government.",
                      "Legalisation of internal controls"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                          <Check size={16} strokeWidth={3} />
                        </span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subcategory Visual Links */}
                  <h2 className="text-3xl font-extrabold text-thm mb-8 tracking-tight">
                    See More Services in This Category:
                  </h2>
                  
                  {/* The new nested component for grid hover effects */}
                  <SubCategoryList services={innerServices} />
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
