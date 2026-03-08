import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maudit.ae"),
  title: {
    default: "Majed Alshamsi Auditing | Best Auditing Firm in Dubai",
    template: "%s | Majed Alshamsi Auditing",
  },
  description:
    "Majed Alshamsi Auditing is a leading audit and accounting firm in Dubai, UAE providing top tier financial services, bookkeeping, VAT consulting, audit and more.",
  openGraph: {
    title: "Majed Alshamsi Auditing",
    description: "Leading audit and accounting firm in Dubai, UAE.",
    url: "https://maudit.ae",
    siteName: "Majed Alshamsi Auditing",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Majed Alshamsi Auditing",
    description: "Leading audit and accounting firm in Dubai, UAE.",
  },
  alternates: {
    canonical: "/",
  },
};

import { StickyWhatsAppButton } from "@/components/ui/StickyWhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Majed Alshamsi Auditing",
    "url": "https://maudit.ae",
    "logo": "https://maudit.ae/img/logo/al-shamsi-logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+97142225774",
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": "Local"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/malshamsiaudit/",
      "https://x.com/maudit_ae",
      "https://www.instagram.com/maudit.ae/",
      "https://ae.linkedin.com/company/mauditae"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <StickyWhatsAppButton />
      </body>
    </html>
  );
}
