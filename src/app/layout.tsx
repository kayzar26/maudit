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
    default: "Majed Alshamsi Auditing | Top Audit Firm in Dubai",
    template: "%s | Majed Alshamsi Auditing",
  },
  description:
    "Majed Alshamsi Auditing is a leading audit and accounting firm in Dubai, UAE providing top-tier financial services, bookkeeping, VAT consulting, and corporate tax advisory.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
