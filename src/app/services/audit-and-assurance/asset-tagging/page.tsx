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
  title: "Asset Tagging Services in Dubai | Maudit",
  description: "Professional asset tagging services in Dubai. Long-lasting labels, barcode tags, and tamper-proof solutions for your business assets.",
};

export default function AssetTaggingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Asset Tagging Services"
          pages={[
            { url: "/services", name: "Services" },
            { url: "/services/audit-and-assurance", name: "Audit & Assurance" },
            { url: "/services/audit-and-assurance/asset-tagging", name: "Asset Tagging Services" },
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
                      src="/img/service/audit-assurance/asset-tagging-services.webp"
                      alt="Asset Tagging Services"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-10 tracking-tight">
                    Asset Tagging Services in Dubai
                  </h1>

                  <p className="text-lg leading-relaxed mb-8">
                    Asset tagging is a special process that helps add affixing tags and labels. The tagging services help find out things individually and collect the data from real-time locations.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Are you looking for professional asset tagging services for your company? We at Majed Alshamsi Auditing are a renowned asset tagging service provider serving our clients in Dubai.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Now, you can secure your assets with our long-lasting blank or pre-printed labels, which have been thoroughly tested. Asset labels can be personalized to meet your requirements while staying budget-friendly. They can be made out of a variety of stuff for use in practically any location.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    For a fruitful business, regular maintenance is essential. It assists a business in cutting down the costs, finding fraud, and reducing the value of the asset. From making a valuable asset to handling and tracking it, our professional team has proven records in the administration of an outsized number of fixed assets for clients spread over different industries.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    To take benefits from the <strong className="text-black">Asset Tagging Services in Dubai</strong>, contact our team or speak to our online representative.
                  </p>

                  <h3 className="text-2xl font-bold text-thm mb-5">
                    We professionally deal in:
                  </h3>
                  <ul className="flex flex-col gap-3 text-lg list-disc ml-8 mb-10">
                    <li>3M Silver Asset Labels</li>
                    <li>Tamper Proof Labels</li>
                    <li>MEP (Electrical and mechanical) Identification labels</li>
                    <li>Metal Barcode Labels & Foil Tags</li>
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
