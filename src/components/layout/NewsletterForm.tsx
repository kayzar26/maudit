"use client";

import React, { useState } from "react";
import { ButtonBase } from "@/components/ui/ButtonBase";

export function NewsletterForm() {
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
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-netlify='true' name="Newsletter Subscription">
      <input type="hidden" name="form-name" value="Newsletter Subscription" />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
      />
      <ButtonBase type="submit" disabled={status === "loading"} className="w-full text-center">
        {status === "loading" ? "Subscribing..." : status === "success" ? "✓ Subscribed!" : "Subscribe"}
      </ButtonBase>
      {status === "error" && (
        <p className="text-red-500 text-xs">Error. Please try again.</p>
      )}
    </form>
  );
}
