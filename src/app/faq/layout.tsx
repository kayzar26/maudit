import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Maudit",
  description: "Find answers to common questions about auditing, bookkeeping, VAT, and financial services in Dubai with Majed Alshamsi Auditing.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
