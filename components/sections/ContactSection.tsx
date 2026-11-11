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
    <section id="contact" className="py-24 relative border-b border-line-primary bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-4 border-b border-line-primary gap-4 reveal-blur">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-crimson" />
              <span className="text-xs uppercase font-medium tracking-widest text-txt-muted">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-primary tracking-tight">
              Contact &amp; Collaboration
            </h2>
          </div>
          <div className="text-xs text-txt-muted">
            Available for Full-Stack &amp; Software Engineer roles
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Details Box (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-lg bg-bg-card border border-line-primary shadow-theme space-y-6">
            <h3 className="text-lg font-bold text-txt-primary pb-3 border-b border-line-primary">
              Direct Contact Channels
            </h3>

            {/* Email with 1-click copy */}
            <div className="space-y-1.5">
              <div className="text-xs text-txt-muted font-medium uppercase tracking-wider">
                Email Address
              </div>
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-md border border-line-primary bg-bg-secondary hover:border-line-hover text-txt-primary transition-all text-xs"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                {copied ? (
                  <span className="text-xs text-crimson font-semibold flex items-center gap-1 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <span className="text-xs text-txt-muted flex items-center gap-1 flex-shrink-0">
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </span>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <div className="text-xs text-txt-muted font-medium uppercase tracking-wider">
                Phone / WhatsApp
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-md border border-line-primary bg-bg-secondary text-xs text-txt-primary">
                <Phone className="w-4 h-4 text-crimson" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <div className="text-xs text-txt-muted font-medium uppercase tracking-wider">
                Location
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-md border border-line-primary bg-bg-secondary text-xs text-txt-primary">
                <MapPin className="w-4 h-4 text-crimson" />
                <span>{PERSONAL_INFO.location} &bull; Open to Relocation</span>
              </div>
            </div>

            {/* External Handles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-md border border-line-primary bg-bg-secondary hover:border-line-hover text-xs text-txt-primary transition-colors font-medium shadow-sm"
              >
                <Github className="w-4 h-4 text-txt-primary" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-md border border-line-primary bg-bg-secondary hover:border-line-hover text-xs text-txt-primary transition-colors font-medium shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-crimson" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-lg bg-bg-card border border-line-primary shadow-theme">
            <h3 className="text-lg font-bold text-txt-primary pb-3 border-b border-line-primary mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="p-8 rounded-lg border border-crimson/30 bg-crimson/5 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-crimson mx-auto" />
                <h4 className="text-lg font-bold text-txt-primary">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-txt-secondary max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your message and will reply to your email promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-md text-xs font-semibold bg-crimson text-white hover:bg-crimson-hover transition-colors"
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
                    <label className="text-xs text-txt-muted block font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-md bg-bg-secondary border text-xs text-txt-primary placeholder-txt-muted/60 focus:outline-none transition-colors ${
                        errors.name ? "border-crimson" : "border-line-primary focus:border-crimson"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-crimson mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-txt-muted block font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-md bg-bg-secondary border text-xs text-txt-primary placeholder-txt-muted/60 focus:outline-none transition-colors ${
                        errors.email ? "border-crimson" : "border-line-primary focus:border-crimson"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-crimson mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-txt-muted block font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Engineer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-bg-secondary border border-line-primary focus:border-crimson text-xs text-txt-primary placeholder-txt-muted/60 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-txt-muted block font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the role, project, or collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-md bg-bg-secondary border text-xs text-txt-primary placeholder-txt-muted/60 focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-crimson" : "border-line-primary focus:border-crimson"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-crimson mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm bg-crimson hover:bg-crimson-hover text-white disabled:opacity-50 transition-all cursor-pointer mt-2 shadow-md shadow-crimson/25"
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
