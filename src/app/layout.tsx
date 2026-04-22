import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { StickyWhatsAppButton } from "@/components/ui/StickyWhatsAppButton";
import { StickyCallButton } from "@/components/ui/StickyCallButton";
import Script from "next/script";
import GTMPageView from "@/components/GTMPageView";
import { Suspense } from "react";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
};

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
        "telephone": "+971545770076",
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
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-TVM8TP96');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src={"https://www.googletagmanager.com/ns.html?id=GTM-TVM8TP96"}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>
          <GTMPageView />
        </Suspense>
        {children}
        <StickyWhatsAppButton />
        <StickyCallButton />
      </body>
    </html>
  );
}
