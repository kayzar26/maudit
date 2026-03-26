"use client";

import React, { useState } from "react";
import { ButtonBase } from "@/components/ui/ButtonBase";

export function ContactFormClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      // Tracking: Contact form conversion for Google Ads/GTM
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "conversion_form_submit",
          form_name: "Contact Us Page Form",
        });
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Netlify submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-netlify='true' name="Contact Us Page Form">
      <input type="hidden" name="form-name" value="Contact Us Page Form" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input 
          type="text" 
          name="firstName"
          placeholder="First Name" 
          className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all"
          required 
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name" 
          className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all"
          required 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number" 
          className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all"
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all"
          required 
        />
      </div>
      
      <select 
        name="serviceType"
        className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white outline-none transition-all appearance-none"
        required
        defaultValue=""
      >
        <option value="" disabled className="text-black">Service Type</option>
        <option value="audit" className="text-black">Audit & Assurance</option>
        <option value="tax" className="text-black">Tax & Accounting Services</option>
        <option value="consulting" className="text-black">Consulting & Advisory</option>
        <option value="bpo" className="text-black">Business Support & Outsourcing</option>
        <option value="other" className="text-black">Not Sure / Other</option>
      </select>

      <textarea 
        name="message"
        placeholder="Your Message" 
        rows={4}
        className="w-full bg-white/10 border border-transparent focus:border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all resize-none"
        required
      />

      <div className="flex items-center justify-between">
        {status === "success" && (
          <p className="text-primary font-bold animate-pulse">✓ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-bold">Something went wrong. Please try again.</p>
        )}
        <div></div>
        <ButtonBase type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Your Request"}
        </ButtonBase>
      </div>
    </form>
  );
}
