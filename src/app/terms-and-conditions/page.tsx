import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Maudit | Majed Alshamsi Auditing",
  description: "Read the Terms and Conditions for using the Majed Alshamsi Auditing website. Understand your rights and obligations.",
};

export default function TermsConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-secondary">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Terms & Conditions"
          pages={[
            { url: "/", name: "Home" },
            { url: "/terms-and-conditions", name: "Terms & Conditions" },
          ]}
        />

        <section className="max-w-5xl pt-28 pb-16 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-2 tracking-tight">Terms & Conditions</h1>
          <p className="mb-16 italic text-secondary">Last Updated: 01st June 2025</p>
          <p className="text-lg mb-6">
            Welcome to the <strong>MAJED ALSHAMSI AUDITING</strong> website. By accessing or using our site, you agree to be bound by the following Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">1. Use of Website</h2>
          <ul className="list-disc ml-6 mb-12 space-y-2 text-lg">
            <li>The content provided is for <strong>general informational purposes only</strong> and does not constitute professional advice or engagement.</li>
            <li>You agree to use this site <strong>lawfully</strong> and not in violation of any applicable laws or regulations.</li>
            <li>We may <strong>modify, suspend, or discontinue</strong> any part of the website without notice.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">2. Intellectual Property</h2>
          <ul className="list-disc ml-6 mb-12 space-y-2 text-lg">
            <li>All content is owned by <strong>MAJED ALSHAMSI AUDITING</strong> and protected by intellectual property laws.</li>
            <li>You may not use, copy, or distribute any content without <strong>prior written consent</strong>.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">3. Links to Third-Party Websites</h2>
          <ul className="list-disc ml-6 mb-12 space-y-2 text-lg">
            <li>Links provided are for convenience; we do not endorse third-party content.</li>
            <li>We are <strong>not responsible</strong> for any loss or damage from third-party websites.</li>
            <li>You access them at your <strong>own risk</strong>.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">4. Limitation of Liability</h2>
          <ul className="list-disc ml-6 mb-12 space-y-2 text-lg">
            <li><strong>MAJED ALSHAMSI AUDITING</strong> is not liable for any damages arising from use or inability to use the site.</li>
            <li>No warranties are made regarding the <strong>accuracy or completeness</strong> of the content.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">5. Indemnification</h2>
          <p className="text-lg mb-12">
            You agree to <strong>indemnify and hold harmless</strong> MAJED ALSHAMSI AUDITING and its team from any claims, losses, damages, or legal fees arising from your use of the site or violation of these terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">6. Privacy</h2>
          <p className="text-lg mb-12">
            Use of this site is governed by our <strong>Privacy Policy</strong>, which explains how we collect and protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">7. Governing Law and Jurisdiction</h2>
          <p className="text-lg mb-12">
            These terms are governed by the laws of the <strong>United Arab Emirates (UAE)</strong>. Any disputes shall be under the exclusive jurisdiction of UAE courts.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">8. Changes to Terms and Conditions</h2>
          <p className="text-lg mb-12">
            We reserve the right to update these Terms at any time without notice. It is your responsibility to check this page periodically.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-thm">Contact Us</h2>
          <p className="text-lg">
            If you have questions or concerns, please contact us: <strong><a href="mailto:info@maudit.ae" className="underline text-primary">info@maudit.ae</a></strong>
          </p>
        </section>

        {/* Legal Disclaimer */}
        <section className="max-w-5xl pt-16 pb-28 mx-auto px-4 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-2 tracking-tight">Legal Disclaimer</h2>
          <p className="mb-16 italic text-secondary">Last Updated: 01st June 2025</p>

          <p className="text-lg mb-6">
            The information provided on the <strong>MAJED ALSHAMSI AUDITING</strong> website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or its content for any purpose.
          </p>

          <p className="text-lg mb-6">
            In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits in connection with the use of this website.
          </p>

          <p className="text-lg mb-6">
            Through this website, you may link to other websites which are not under the control of <strong>MAJED ALSHAMSI AUDITING</strong>. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
          </p>

          <p className="text-lg mb-6">
            Nothing on this website should be interpreted as creating a professional-client relationship between you and <strong>MAJED ALSHAMSI AUDITING</strong>. Do not act or rely upon any information from this site without seeking appropriate professional guidance.
          </p>

          <p className="text-lg mb-6">
            This legal disclaimer is governed by and construed in accordance with the laws of the <strong>United Arab Emirates (UAE)</strong>, and any disputes shall be subject to the exclusive jurisdiction of UAE courts.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-thm">Contact Us</h2>
          <p className="text-lg mb-6">
            If you have any questions or concerns about this legal disclaimer, please contact us at: <strong><a href="mailto:info@maudit.ae" className="underline text-primary">info@maudit.ae</a></strong>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
