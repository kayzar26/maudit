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
  title: "Inventory Management System in Dubai | Maudit",
  description: "Inventory management system consulting in Dubai. Optimize stock control, reduce waste, and improve supply chain efficiency.",
};

export default function InventoryManagementSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Inventory Management System"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/management-consulting", name: "Management Consulting" },
            { url: "/services/management-consulting/inventory-management-system", name: "Inventory Management System" },
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
                      src="/img/service/management-consulting/inventory-management.webp"
                      alt="Inventory Management System"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Inventory Management System Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Effective inventory management is vital for businesses looking to optimize their supply chain, minimize costs, and prevent stock-related losses. At Majed Alshamsi Auditing, our management consulting team helps businesses implement and optimize inventory management systems that align with their operational goals.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    We conduct thorough assessments of your current inventory processes, identify inefficiencies, and recommend solutions that improve accuracy, reduce waste, and enhance overall supply chain performance.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our Inventory Management Consulting Includes:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Inventory System Assessment & Design</li>
                    <li>Stock Control Optimization</li>
                    <li>Barcode & RFID Implementation</li>
                    <li>Warehouse Management Solutions</li>
                    <li>Supply Chain Process Improvement</li>
                    <li>Inventory Audit & Reconciliation</li>
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
