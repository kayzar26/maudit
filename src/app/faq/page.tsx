"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What is an audit?", answer: "An audit is an independent examination of financial statements, records, and other relevant information of an organization to ensure their accuracy, integrity, and compliance with applicable laws and regulations." },
  { question: "Why is an audit important?", answer: "An audit is important as it provides assurance to stakeholders, such as investors, creditors, and regulators, about the reliability and credibility of the financial information presented by an organization. It enhances transparency, accountability, and trust." },
  { question: "Who needs an audit?", answer: "Generally, audits are required for companies that meet certain criteria, such as being publicly traded, having a certain level of revenue, or being subject to regulatory requirements. However, audits can also be voluntary and sought by organizations to enhance their credibility or fulfill contractual obligations." },
  { question: "What is the role of an auditor?", answer: "An auditor is an independent professional who examines financial statements and relevant documents to express an opinion on their fairness and compliance. They assess the internal controls, verify transactions, and provide recommendations for improvement." },
  { question: "How long does an audit typically take?", answer: "The duration of an audit depends on various factors, including the size and complexity of the organization, the scope of the audit, and the availability of required information. It can range from a few weeks to several months." },
  { question: "How much does an audit cost?", answer: "The cost of an audit depends on similar factors as the duration, such as the size and complexity of the organization and the scope of the audit. It's best to contact an auditing firm directly to obtain a quote tailored to your specific needs." },
  { question: "What is the difference between an internal audit and an external audit?", answer: "An internal audit is conducted by employees within an organization to assess internal controls, risk management, and operational efficiency. An external audit, on the other hand, is conducted by independent auditors from outside the organization to provide an objective assessment of financial statements and compliance." },
  { question: "What are the benefits of hiring an external audit firm?", answer: "Hiring an external audit firm brings unbiased and independent expertise to evaluate an organization's financial statements. It provides stakeholders with a higher level of confidence in the reliability and accuracy of the information presented." },
  { question: "What should I do to prepare for an audit?", answer: "To prepare for an audit, it is important to maintain accurate financial records, ensure proper documentation of transactions, and have a clear understanding of your organization's internal controls. Being organized and responsive to auditor inquiries will help streamline the audit process." },
  { question: "How can I request an audit for my organization?", answer: "You can request an audit for your organization by contacting reputable auditing firms and discussing your requirements with them. They will guide you through the process and provide you with the necessary information and documentation they need to begin the audit." },
  { question: "What is bookkeeping?", answer: "Bookkeeping is the process of recording, organizing, and maintaining financial transactions and records of a business. It involves tasks such as tracking income and expenses, reconciling accounts, and preparing financial statements." },
  { question: "Why is bookkeeping important for businesses?", answer: "Bookkeeping is crucial for businesses as it provides an accurate and up-to-date financial picture of the organization. It helps in making informed business decisions, meeting tax obligations, securing loans or investments, and maintaining compliance with financial regulations." },
  { question: "What are the benefits of outsourcing bookkeeping services?", answer: "Outsourcing bookkeeping services can provide several benefits, including cost savings, access to expertise, increased accuracy, improved data security, and the ability to focus on core business activities." },
  { question: "What are the key responsibilities of a bookkeeper?", answer: "A bookkeeper is responsible for recording financial transactions, reconciling accounts, preparing financial reports, managing accounts payable and receivable, maintaining payroll records, and ensuring compliance with financial regulations." },
  { question: "What is the difference between bookkeeping and accounting?", answer: "Bookkeeping focuses on recording and organizing financial transactions, while accounting involves a broader analysis and interpretation of financial information. Bookkeeping provides the foundation for accounting by maintaining accurate records and data." },
  { question: "How often should I update my books?", answer: "It is recommended to update your books regularly to maintain accurate and current financial records. Depending on the size and complexity of your business, this can be done on a daily, weekly, or monthly basis." },
  { question: "What software or tools can I use for bookkeeping?", answer: "There are several bookkeeping software options available, such as QuickBooks, Xero, and Wave. These tools provide features for recording transactions, generating reports, managing invoices and expenses, and simplifying the bookkeeping process." },
  { question: "Do I need professional bookkeeping services for my small business?", answer: "While small businesses may initially handle bookkeeping tasks in-house, professional bookkeeping services can bring expertise and efficiency to the process. Outsourcing bookkeeping can free up time and resources, allowing business owners to focus on core operations and growth." },
  { question: "How can bookkeeping help with tax preparation?", answer: "Accurate bookkeeping ensures that all income and expenses are properly recorded, making it easier to prepare tax returns. It helps in identifying deductible expenses, tracking sales and purchases, and maintaining necessary documentation for tax compliance." },
  { question: "How can I get started with bookkeeping for my business?", answer: "To get started with bookkeeping, you can begin by organizing your financial documents and transactions. Consider using bookkeeping software or consulting with a professional bookkeeper to set up an efficient system tailored to your business needs." },
];

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-lg text-thm">{question}</span>
        <ChevronDown
          size={22}
          className={`text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-5 text-secondary text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <Breadcrumb
          title="FAQ"
          pages={[
            { url: "/", name: "Home" },
            { url: "/faq", name: "FAQ" },
          ]}
        />

        <section className="py-24 md:py-40 bg-zinc-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn yOffset={30}>
              <div className="text-center mb-16">
                <p className="text-primary font-bold tracking-widest uppercase mb-4">Got Questions?</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-thm uppercase tracking-tight">
                  Frequently Asked Questions
                </h1>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <FadeIn key={idx} delay={0.05 * Math.min(idx, 6)} yOffset={20}>
                  <FAQAccordion question={faq.question} answer={faq.answer} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
