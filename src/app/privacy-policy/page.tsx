import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Maudit | Majed Alshamsi Auditing",
  description: "Read the Privacy Policy for Majed Alshamsi Auditing. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-secondary">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="Privacy Policy"
          pages={[
            { url: "/", name: "Home" },
            { url: "/privacy-policy", name: "Privacy Policy" },
          ]}
        />

        <section className="max-w-5xl pt-28 pb-28 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase mb-2 tracking-tight">We Guard What You Share</h1>
          <p className="mb-16 italic text-secondary">Last Updated: 13th July 2023</p>

          <p className="text-lg mb-6">
            At <strong>MAJED ALSHAMSI AUDITING</strong>, we take your privacy seriously and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">1. Information We Collect</h2>
          <ul className="list-disc ml-6 mb-12 space-y-2 text-lg">
            <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and company details when you voluntarily provide it to us.</li>
            <li><strong>Log Data:</strong> When you visit our website, our servers automatically record certain information, including your IP address, browser type, referring/exit pages, and timestamps.</li>
            <li><strong>Cookies and Similar Technologies:</strong> We may use cookies, web beacons, and similar technologies to collect information about your browsing activities and preferences on our website.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">2. Use of Information</h2>
          <p className="text-lg mb-4">We may use the information we collect to:</p>
          <ul className="list-disc ml-6 mb-12 space-y-2 text-lg">
            <li>Provide and improve our services.</li>
            <li>Respond to your inquiries and communicate with you.</li>
            <li>Customize and personalize your experience on our website.</li>
            <li>Send you promotional materials or newsletters (if you have opted in).</li>
            <li>Monitor and analyze trends, usage, and activities on our website.</li>
            <li>Comply with legal obligations and enforce our policies.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">3. Data Sharing and Disclosure</h2>
          <ul className="list-disc ml-6 mb-12 space-y-2 text-lg">
            <li>We may share your personal information with trusted third-party service providers who assist us in operating our website and delivering our services.</li>
            <li>We may disclose your information to comply with legal obligations, enforce our policies, respond to lawful requests, or protect our rights, property, and safety.</li>
            <li>We will not sell, rent, or share your personal information with third parties for their marketing purposes without your explicit consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">4. Data Retention</h2>
          <p className="text-lg mb-12">
            We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">5. Data Security</h2>
          <p className="text-lg mb-12">
            We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">6. Third-Party Websites</h2>
          <p className="text-lg mb-12">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of those websites.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">7. Children&apos;s Privacy</h2>
          <p className="text-lg mb-12">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from individuals under 13 years of age.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-thm">8. Changes to This Privacy Policy</h2>
          <p className="text-lg mb-12">
            We reserve the right to modify this Privacy Policy at any time. Any changes will be effective when posted on our website. We encourage you to review this Privacy Policy periodically for any updates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-thm">9. Contact Us</h2>
          <p className="text-lg">
            If you have any questions or concerns about our Privacy Policy, please contact us at: <strong><a href="mailto:info@maudit.ae" className="underline text-primary">info@maudit.ae</a></strong>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
