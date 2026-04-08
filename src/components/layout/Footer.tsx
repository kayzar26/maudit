import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import { ButtonBase } from "@/components/ui/ButtonBase";


export function Footer() {
  return (
    <footer className="bg-thm text-white pt-20">
      {/* CTA Section equivalent */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
        <Link href="/contact-us">
          <ButtonBase>Get in Touch</ButtonBase>
        </Link>
      </section>

      <div className="bg-[#0a0f16] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Branding & Socials */}
            <div>
              <Image
                src="/img/logo/al-shamsi-logo.png"
                alt="Al Shamsi Auditing Logo"
                width={200}
                height={60}
                className="mb-6 w-auto h-auto" 
              />
              <p className="text-gray-400 mb-8 leading-relaxed">
                Empowering businesses with trusted auditing, accounting, and consultancy services across the UAE.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/malshamsiaudit/" className="bg-white/10 p-2 rounded hover:bg-primary hover:text-thm transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/maudit_ae" className="bg-white/10 p-2 rounded hover:bg-primary hover:text-thm transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/maudit.ae/" className="bg-white/10 p-2 rounded hover:bg-primary hover:text-thm transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://ae.linkedin.com/company/mauditae" className="bg-white/10 p-2 rounded hover:bg-primary hover:text-thm transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="flex flex-col gap-6 text-gray-400">
                <li className="flex gap-4">
                  <Phone size={24} className="text-primary shrink-0" />
                  <div>
                    <a href="tel:+97142225774" className="block hover:text-white transition-colors">+971 4 2225 774</a>
                    <a href="tel:+971545770076" className="block hover:text-white transition-colors">+971 54 5770 076</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin size={24} className="text-primary shrink-0" />
                  <a href="https://maps.app.goo.gl/dDSjdXs8gMrAWqyw7" target="_blank" className="hover:text-white transition-colors">
                    Office No. 702, Garhoud Views Building, Dubai, U.A.E
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail size={24} className="text-primary shrink-0" />
                  <a href="mailto:info@maudit.ae" className="hover:text-white transition-colors">info@maudit.ae</a>
                </li>
              </ul>
            </div>
{/* newsletter existed here */}
          </div>
        </div>
      </div>

      <div className="bg-thm border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
          <p>© Copyright 2025 - MAJED Al Shamsi Auditing. All Right Reserved</p>
          {/* <p>
            Design & Developed by{" "}
            <a href="https://www.instagram.com/_kayzar_" target="_blank" rel="nofollow" className="text-primary hover:underline">
              Kayzar for Maudit
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
