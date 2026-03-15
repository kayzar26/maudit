"use client";

import React, { useState } from "react";
import { ButtonBase } from "@/components/ui/ButtonBase";

interface ContactFormProps {
  buttonLabel?: string;
  role?: "sidebar" | "contact" | "default";
}

export function ContactForm({ buttonLabel = "Submit Now", role = "sidebar" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj as any).toString(),
      });
      setStatus("success");
      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Netlify submission error:", error);
      setStatus("error");
    }
  };

  const gapClass = role === "contact" ? "gap-6" : "gap-4";

  return (
    <form onSubmit={handleSubmit} className="appointment-form bg-[#18191e] p-6 lg:p-8 rounded-[20px] shadow-2xl z-10 w-full relative" data-netlify='true' name="Contact Form Main">
       <input type="hidden" name="form-name" value="Contact Form Main" />
       <h3 className="text-xl md:text-2xl uppercase font-bold mb-6 text-white tracking-wide">
            Schedule Appointment
        </h3>

        <div className={`grid grid-cols-2 ${gapClass}`}>
            <input
                className="col-span-1 bg-white/10 text-white placeholder-white/70 font-semibold p-4 rounded-lg outline-none border border-transparent focus:border-white/30 focus:bg-white/20 transition-all"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                className="col-span-1 bg-white/10 text-white placeholder-white/70 font-semibold p-4 rounded-lg outline-none border border-transparent focus:border-white/30 focus:bg-white/20 transition-all"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
            />
            <input
                className="col-span-1 bg-white/10 text-white placeholder-white/70 font-semibold p-4 rounded-lg outline-none border border-transparent focus:border-white/30 focus:bg-white/20 transition-all"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
            />
            <input
                className="col-span-1 bg-white/10 text-white placeholder-white/70 font-semibold p-4 rounded-lg outline-none border border-transparent focus:border-white/30 focus:bg-white/20 transition-all"
                name="phone"
                type="text"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={handleChange}
            />
            <select
                className="col-span-2 bg-white/10 text-white font-semibold p-4 rounded-lg outline-none border border-transparent focus:border-white/30 focus:bg-white/20 transition-all appearance-none cursor-pointer"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
            >
                <option value="" disabled className="text-black">Service Type</option>
                <option className="text-black" value="Audit & Assurance">Audit & Assurance</option>
                <option className="text-black" value="Tax & Accounting Services">Tax & Accounting Services</option>
                <option className="text-black" value="Consulting & Advisory">Consulting & Advisory</option>
                <option className="text-black" value="Business Support & Outsourcing">Business Support & Outsourcing</option>
                <option className="text-black" value="Not Sure / Other">Not Sure / Other</option>
            </select>
            <textarea
                className="col-span-2 bg-white/10 text-white placeholder-white/70 font-semibold p-4 rounded-lg outline-none border border-transparent focus:border-white/30 focus:bg-white/20 transition-all resize-y min-h-[120px]"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
            />
            
            <div className={`col-span-2 ${role === "contact" ? "ml-auto" : ""}`}>
                <ButtonBase type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : buttonLabel}
                </ButtonBase>
            </div>
        </div>
    </form>
  );
}
