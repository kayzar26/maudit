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
  title: "Payroll Outsourcing Services in Dubai | Maudit",
  description: "Payroll outsourcing services in Dubai. Streamline payroll processing, WPS compliance, and employee management.",
};

export default function PayrollOutsourcingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Payroll Outsourcing Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/accounting-vat", name: "Accounting & VAT" },
            { url: "/services/accounting-vat/payroll-outsourcing", name: "Payroll Outsourcing Services" },
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
                      src="/img/service/accounting-vat/payroll-outsourcing.webp"
                      alt="Payroll Outsourcing Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Payroll Outsourcing Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Payroll outsourcing services are supplied by a third-party company and support companies with legal, tax, and accounting services. It is aimed at receiving their paycheck on schedule. At <strong className="text-black">MAJED ALSHAMSI AUDITING</strong>, we provide professional and efficient Payroll Outsourcing Services UAE. With over years of experience in payroll services, PRO, and HR services in Dubai, we are ready to serve the customized requirements of the customers.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our <strong className="text-black"> Payroll services in Dubai </strong> are assured with the right accurate results, in conventionality with what your payroll needs are. In case, the employment tax is withdrawn, we will make sure the payment to the tax authorities as well as carry out all the complicated calculations related to the employment tax on the wages and benefits.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our Help desk will resolve all the queries related to wages, salaries, insurance and benefits. More advantages such as tickets for the official trips, the cost of the holidays and end-of-term benefits will be handled by our dedicated team so that neither you nor the employee have to face any problems regarding it.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Contact us now to find out more about our payroll outsourcing solutions.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Our services include:
                  </h3>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    Payroll Outsourcing Services in Dubai
                  </h3>

                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>Salary Calculations</li>
                    <li>Tax Withholdings and Reporting</li>
                    <li>Statutory Compliance</li>
                    <li>Payslip Generation</li>
                    <li>Direct Deposit and Payment Processing</li>
                    <li>Employee Record Management</li>
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
