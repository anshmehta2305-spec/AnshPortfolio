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
  Terminal,
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
      newErrors.name = "[ERR: SENDER_IDENTITY_REQUIRED]";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "[ERR: INVALID_COMM_FORMAT]";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "[ERR: PAYLOAD_LENGTH_MIN_10_CHARS]";
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
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative border-b border-border bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
              <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
                SECTION [08] // DIRECT TRANSMISSION &amp; DISPATCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-foreground tracking-tight">
              Initialize Contact
            </h2>
          </div>
          <div className="text-xs font-mono-hud text-text-muted">
            AVAILABILITY: OPEN FOR FULL-STACK &bull; SDE ROLES
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coordinates HUD Box (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-sm bg-[#11141a] border border-border space-y-6 shadow-cad">
            <div className="text-xs font-mono-hud text-brand-lime font-bold uppercase pb-3 border-b border-border/80">
              // TELEMETRY COORDINATES:
            </div>

            {/* Email with 1-click copy */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono-hud text-text-muted uppercase">
                PRIMARY INBOX:
              </div>
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-sm border border-border bg-[#161a22] hover:border-brand-lime text-foreground transition-all group font-mono-hud text-xs"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-brand-lime flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                {copied ? (
                  <span className="text-[10px] text-brand-lime font-bold uppercase flex-shrink-0">
                    COPIED
                  </span>
                ) : (
                  <span className="text-[10px] text-text-muted group-hover:text-brand-lime uppercase flex-shrink-0">
                    [COPY]
                  </span>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono-hud text-text-muted uppercase">
                DIRECT COMM:
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-sm border border-border bg-[#161a22] font-mono-hud text-xs text-foreground">
                <Phone className="w-4 h-4 text-brand-lime" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono-hud text-text-muted uppercase">
                OPERATIONAL BASE:
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-sm border border-border bg-[#161a22] font-mono-hud text-xs text-foreground">
                <MapPin className="w-4 h-4 text-brand-lime" />
                <span>{PERSONAL_INFO.location} &bull; Open to Relocation</span>
              </div>
            </div>

            {/* External Handles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-sm border border-border bg-[#161a22] hover:border-brand-lime text-xs font-mono-hud text-foreground hover:text-brand-lime transition-colors uppercase font-bold"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-sm border border-border bg-[#161a22] hover:border-brand-lime text-xs font-mono-hud text-foreground hover:text-brand-lime transition-colors uppercase font-bold"
              >
                <Linkedin className="w-4 h-4 text-brand-lime" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Industrial Transmission Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-sm bg-[#11141a] border border-border shadow-cad">
            <div className="text-xs font-mono-hud text-brand-lime font-bold uppercase pb-3 border-b border-border/80 mb-6">
              // DISPATCH CONSOLE [PROTECTED]:
            </div>

            {submitted ? (
              <div className="p-8 rounded-sm border border-brand-lime/40 bg-brand-lime/5 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-brand-lime mx-auto" />
                <h4 className="text-lg font-display font-extrabold uppercase text-foreground">
                  PAYLOAD DISPATCHED SUCCESSFULLY
                </h4>
                <p className="text-xs font-mono-hud text-text-muted max-w-sm mx-auto leading-relaxed">
                  Message queued. I will review your transmission and reply to your provided email address promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-sm text-xs font-mono-hud font-bold uppercase bg-brand-lime text-black hover:bg-white transition-colors"
                >
                  NEW TRANSMISSION &rarr;
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
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono-hud text-brand-lime uppercase block font-bold">
                      [01] SENDER_IDENTITY:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-sm bg-[#161a22] border text-xs font-mono-hud text-foreground placeholder-text-muted/40 focus:outline-none transition-colors ${
                        errors.name ? "border-brand-orange" : "border-border focus:border-brand-lime"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-brand-orange font-mono-hud">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono-hud text-brand-lime uppercase block font-bold">
                      [02] RETURN_COMM_CHANNEL:
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-sm bg-[#161a22] border text-xs font-mono-hud text-foreground placeholder-text-muted/40 focus:outline-none transition-colors ${
                        errors.email ? "border-brand-orange" : "border-border focus:border-brand-lime"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-brand-orange font-mono-hud">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono-hud text-text-muted uppercase block">
                    [03] SUBJECT_TOPIC:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Engineer Role Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#161a22] border border-border focus:border-brand-lime text-xs font-mono-hud text-foreground placeholder-text-muted/40 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono-hud text-brand-lime uppercase block font-bold">
                    [04] TRANSMISSION_PAYLOAD:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter project details, recruitment requirements, or an engineering inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-sm bg-[#161a22] border text-xs font-mono-hud text-foreground placeholder-text-muted/40 focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-brand-orange" : "border-border focus:border-brand-lime"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-brand-orange font-mono-hud">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm font-mono-hud font-extrabold text-xs uppercase bg-brand-lime text-black hover:bg-white disabled:opacity-50 transition-all shadow-tactile cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <span>ENCRYPTING &amp; DISPATCHING...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>DISPATCH TRANSMISSION &rarr;</span>
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
