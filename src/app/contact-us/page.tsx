import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Mail, PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Us | Maudit | Audit & Assurance in Dubai",
  description: "Get in touch with Maudit for professional auditing, accounting, and tax consultancy services in the UAE. Our team is ready to assist you.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Breadcrumb
          title="Contact Us"
          pages={[
            { url: "/", name: "Home" },
            { url: "/contact-us", name: "Contact Us" },
          ]}
        />

        <section className="py-24 bg-thm relative text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header section */}
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
                Have Questions? Reach Out!
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
                Connect with Maudit Today
              </h2>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
              {/* Card 1 */}
              <div className="bg-white/5 rounded-2xl p-6 flex items-center gap-4 hover:bg-white hover:text-thm transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
                <div className="w-16 h-16 shrink-0 bg-primary text-thm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-thm group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase mb-1">Our Email</h4>
                  <p className="opacity-90">info@maudit.ae</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 rounded-2xl p-6 flex items-center gap-4 hover:bg-white hover:text-thm transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
                <div className="w-16 h-16 shrink-0 bg-primary text-thm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-thm group-hover:text-white">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase mb-1">Phone</h4>
                  <p className="opacity-90">+971 54 5770 076</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 rounded-2xl p-6 flex items-center gap-4 hover:bg-white hover:text-thm transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
                <div className="w-16 h-16 shrink-0 bg-primary text-thm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-thm group-hover:text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase mb-1">Schedule</h4>
                  <p className="opacity-90">Mon-Fri: 9am to 6pm</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full">
                  <Image
                    src="/img/contact/contact-img.jpg"
                    alt="Team discussing in an office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7 relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative z-10">
                  <h3 className="text-2xl font-bold uppercase mb-8">Get In touch now</h3>
                  <ContactFormClient />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[445px] w-full bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4501.588711029012!2d55.339787!3d25.2440214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x382c55cdf6078dd%3A0xca58d33014b8c84a!2sMajed%20Alshamsi%20Auditing!5e1!3m2!1sen!2sin!4v1772705430709!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
