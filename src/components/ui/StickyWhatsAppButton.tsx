"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export function StickyWhatsAppButton() {
  // Format phone number for WhatsApp URL (remove spaces, plus sign)
  const phoneNumber = "971585166761";
  const whatsappUrl = "https://wa.me/" + phoneNumber;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        sendGTMEvent({ event: "whatsapp_click" });
      }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
