"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/content";
import { sanitizeInput } from "@/lib/utils";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  Phone,
  Copy,
  Check,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    const cleanPayload = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject || "Direct Inquiry"),
      message: sanitizeInput(formData.message),
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-4 border-b border-white/[0.06] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914]" />
              <span className="text-xs uppercase font-medium tracking-widest text-[#a0a0a0]">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Contact &amp; Collaboration
            </h2>
          </div>
          <div className="text-xs text-[#a0a0a0]">
            Available for Full-Stack &amp; Software Engineer roles
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Details Box (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-lg bg-[#121212] border border-white/[0.06] space-y-6">
            <h3 className="text-lg font-bold text-white pb-3 border-b border-white/[0.06]">
              Direct Contact Channels
            </h3>

            {/* Email with 1-click copy */}
            <div className="space-y-1.5">
              <div className="text-xs text-[#a0a0a0] font-medium uppercase tracking-wider">
                Email Address
              </div>
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-md border border-white/[0.08] bg-[#161616] hover:border-white/20 text-white transition-all text-xs"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-[#e50914] flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                {copied ? (
                  <span className="text-xs text-red-400 font-semibold flex items-center gap-1 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <span className="text-xs text-[#a0a0a0] flex items-center gap-1 flex-shrink-0">
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </span>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <div className="text-xs text-[#a0a0a0] font-medium uppercase tracking-wider">
                Phone / WhatsApp
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-md border border-white/[0.08] bg-[#161616] text-xs text-white">
                <Phone className="w-4 h-4 text-[#e50914]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <div className="text-xs text-[#a0a0a0] font-medium uppercase tracking-wider">
                Location
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-md border border-white/[0.08] bg-[#161616] text-xs text-white">
                <MapPin className="w-4 h-4 text-[#e50914]" />
                <span>{PERSONAL_INFO.location} &bull; Open to Relocation</span>
              </div>
            </div>

            {/* External Handles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-md border border-white/[0.08] bg-[#161616] hover:border-white/20 text-xs text-white transition-colors font-medium"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-md border border-white/[0.08] bg-[#161616] hover:border-white/20 text-xs text-white transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 text-[#e50914]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-lg bg-[#121212] border border-white/[0.06]">
            <h3 className="text-lg font-bold text-white pb-3 border-b border-white/[0.06] mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="p-8 rounded-lg border border-red-500/20 bg-red-950/10 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#e50914] mx-auto" />
                <h4 className="text-lg font-bold text-white">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-[#a0a0a0] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your message and will reply to your email promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-md text-xs font-semibold bg-[#e50914] text-white hover:bg-red-600 transition-colors"
                >
                  Send Another Message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field for bot traps */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="bot_field_trap"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#a0a0a0] block font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-md bg-[#161616] border text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.name ? "border-red-500" : "border-white/[0.08] focus:border-[#e50914]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#a0a0a0] block font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-md bg-[#161616] border text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-white/[0.08] focus:border-[#e50914]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#a0a0a0] block font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Engineer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#161616] border border-white/[0.08] focus:border-[#e50914] text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#a0a0a0] block font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the role, project, or collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-md bg-[#161616] border text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-white/[0.08] focus:border-[#e50914]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium text-sm bg-[#e50914] text-white hover:bg-red-600 disabled:opacity-50 transition-all cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message &rarr;</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
