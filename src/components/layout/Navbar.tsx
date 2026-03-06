"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { ButtonBase } from "@/components/ui/ButtonBase";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Audit & Assurance", href: "/services/audit-and-assurance" },
      { label: "Accounting & VAT", href: "/services/accounting-vat" },
      { label: "Tax Agency Services", href: "/services/tax-agency" },
      { label: "Management Consulting", href: "/services/management-consulting" },
      { label: "BPO Services", href: "/services/bpo-services" },
      { label: "View All »", href: "/services" },
    ],
  },
  { label: "Blogs", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "bg-[#0a0f16]/90 backdrop-blur-md shadow-md border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="/img/logo/al-shamsi-logo.png"
              alt="Majed Al Shamsi Auditing"
              width={200}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-[17px] font-semibold tracking-wide transition-colors",
                    pathname === item.href
                      ? "text-primary"
                      : "text-white/90 hover:text-primary"
                  )}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full w-64 pt-2">
                    <div className="rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={cn(
                            "block rounded-md px-4 py-2 hover:bg-gray-50",
                            pathname === subItem.href
                              ? "text-primary font-medium"
                              : "text-gray-700"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact-us">
              <ButtonBase>Contact Us</ButtonBase>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            title="Mobile Menu"
            className="md:hidden p-2 text-white hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f16]/95 backdrop-blur-md border-t border-white/10 px-4 py-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {MENU_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col">
                <Link
                  href={item.href}
                  className={cn(
                    "text-lg font-semibold border-b border-white/10 pb-2",
                    pathname === item.href ? "text-primary" : "text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="flex flex-col pl-4 mt-2 gap-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="text-gray-300 py-1 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
              <ButtonBase className="w-full text-center mt-4">Contact Us</ButtonBase>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
