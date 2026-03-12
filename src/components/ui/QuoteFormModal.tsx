"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    serviceType: "",
    comments: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call (will be replaced with Nodemailer API route later)
    setTimeout(() => {
      console.log("Quote Form Submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", mobile: "", serviceType: "", comments: "" });
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2000);
    }, 1500);
  };

  const inputClass =
    "w-full bg-white/10 text-white placeholder-white/60 font-medium p-4 rounded-xl outline-none border border-white/15 focus:border-primary/60 focus:bg-white/15 transition-all duration-200";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-[#1a1d23] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Green accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-primary-light to-primary" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-2">
                Get a Free Quote
              </h2>
              <p className="text-white/50 text-sm mb-8">
                Fill in the details below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  className={inputClass}
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className={inputClass}
                  name="mobile"
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <select
                  className={`${inputClass} appearance-none cursor-pointer`}
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="" disabled className="text-black">
                    Select Service *
                  </option>
                  <option className="text-black" value="Audit & Assurance">Audit & Assurance</option>
                  <option className="text-black" value="Tax & Accounting Services">Tax & Accounting Services</option>
                  <option className="text-black" value="Consulting & Advisory">Consulting & Advisory</option>
                  <option className="text-black" value="Business Support & Outsourcing">Business Support & Outsourcing</option>
                  <option className="text-black" value="Not Sure / Other">Not Sure / Other</option>
                </select>
                <textarea
                  className={`${inputClass} resize-none min-h-[100px]`}
                  name="comments"
                  placeholder="Additional Comments (optional)"
                  value={formData.comments}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full mt-2 bg-primary hover:bg-[#b0d859] text-thm font-bold uppercase tracking-tight text-lg rounded-xl py-4 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_0_0_rgb(130,165,56)] hover:shadow-[0_2px_0_0_rgb(130,165,56)] hover:mt-[2px] mb-[2px]"
                >
                  {status === "loading"
                    ? "Submitting..."
                    : status === "success"
                    ? "✓ Submitted Successfully!"
                    : "Submit Quote Request"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
