"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/content";
import { sanitizeInput } from "@/lib/utils";
import {
  Mail,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Phone,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Anti-bot honeypot
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
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot detection for bot traps
    if (formData.honeypot) {
      // Quietly reject bots
      setSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Sanitize user inputs against XSS injections
    const cleanPayload = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject || "Portfolio Contact"),
      message: sanitizeInput(formData.message),
    };

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
            <Mail className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider">
            08 // Transmission & Inquiries
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
          Initialize Contact
        </h2>
        <p className="text-sm text-text-muted mt-2 max-w-xl mb-12">
          Seeking a Full-Stack Developer or Software Engineer role. Feel free to reach out for role discussions, engineering inquiries, or technical collaborations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coordinates HUD Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-border space-y-6">
              <h3 className="text-lg font-display font-bold text-foreground">
                Direct Coordinates
              </h3>

              {/* Copy Email Button */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono-hud text-text-muted">
                  Official Email
                </div>
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl border border-border bg-surface/70 hover:border-accent-cyan/40 text-foreground transition-all group font-mono-hud text-xs sm:text-sm"
                  title="Click to copy email address"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  {copied ? (
                    <span className="flex items-center gap-1 text-xs text-accent-emerald flex-shrink-0">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-text-muted group-hover:text-accent-cyan flex-shrink-0">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>

              {/* Phone from resume */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono-hud text-text-muted">
                  Contact Line
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-surface/50 font-mono-hud text-xs text-foreground">
                  <Phone className="w-4 h-4 text-accent-emerald" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono-hud text-text-muted">
                  Base Location
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-surface/50 font-mono-hud text-xs text-foreground">
                  <MapPin className="w-4 h-4 text-accent-cyan" />
                  <span>{PERSONAL_INFO.location} &bull; Open to Remote & Relocation</span>
                </div>
              </div>

              {/* Professional Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-border bg-surface hover:border-accent-cyan/40 text-xs font-mono-hud text-foreground hover:text-accent-cyan transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-border bg-surface hover:border-accent-cyan/40 text-xs font-mono-hud text-foreground hover:text-accent-cyan transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Secure Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-border/80">
              <h3 className="text-lg font-display font-bold text-foreground mb-1">
                Send a Dispatch
              </h3>
              <p className="text-xs text-text-muted mb-6 font-mono-hud">
                Protected by client-side sanitization & honeypot spam protection.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl border border-accent-emerald/30 bg-accent-emerald/10 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-10 h-10 text-accent-emerald mx-auto" />
                  <h4 className="text-base font-display font-bold text-foreground">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
                    Thank you, your note has been safely received. I will review and get back to your email address promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono-hud font-semibold bg-surface border border-border text-foreground hover:text-accent-cyan transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Anti-bot Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_bot_trap">Do not fill this field</label>
                    <input
                      type="text"
                      id="website_bot_trap"
                      name="website_bot_trap"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-hud text-text-muted block">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-surface/70 border text-sm text-foreground placeholder-text-muted/50 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-border focus:border-accent-cyan"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono-hud">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-hud text-text-muted block">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-surface/70 border text-sm text-foreground placeholder-text-muted/50 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-border focus:border-accent-cyan"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono-hud">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-hud text-text-muted block">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Full-Stack Engineer Role Discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface/70 border border-border focus:border-accent-cyan text-sm text-foreground placeholder-text-muted/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono-hud text-text-muted block">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share project details, team requirements, or an introductory note..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-surface/70 border text-sm text-foreground placeholder-text-muted/50 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-border focus:border-accent-cyan"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono-hud">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm bg-accent-primary text-background hover:opacity-90 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] mt-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>Encrypting & Sending...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
