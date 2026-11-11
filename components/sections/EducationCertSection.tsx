"use client";

import React from "react";
import { EDUCATION, CERTIFICATIONS } from "@/data/content";
import { GraduationCap, Award, MapPin, CheckCircle } from "lucide-react";

export default function EducationCertSection() {
  return (
    <section id="education" className="py-24 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                <GraduationCap className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider">
                05 // Academic Foundations
              </span>
            </div>

            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight">
              Education
            </h2>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-border hover:border-accent-cyan/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-display font-bold text-foreground">
                      {edu.institution}
                    </h3>
                    <span className="text-xs font-mono-hud text-accent-cyan font-semibold">
                      {edu.periodOrYear}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-foreground/90">
                    {edu.degree}
                  </div>

                  {edu.grade && (
                    <div className="mt-1 text-xs font-mono-hud font-semibold text-accent-emerald">
                      {edu.grade}
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-xs text-text-muted mt-2 font-mono-hud">
                    <MapPin className="w-3.5 h-3.5 text-text-muted/60" />
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && (
                    <p className="mt-3 text-xs text-text-muted leading-relaxed border-t border-border/50 pt-2.5">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-md bg-accent-indigo/10 border border-accent-indigo/30 text-accent-indigo">
                <Award className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono-hud text-accent-indigo uppercase tracking-wider">
                06 // Verified Credentials
              </span>
            </div>

            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight">
              Cloud & AI Certifications
            </h2>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-border hover:border-accent-indigo/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-emerald flex-shrink-0" />
                        <h3 className="text-base font-display font-bold text-foreground">
                          {cert.title}
                        </h3>
                      </div>
                      <div className="text-xs font-mono-hud text-text-muted mt-1.5 pl-6">
                        Issued by: <strong className="text-foreground/90">{cert.issuer}</strong>
                      </div>
                      {cert.score && (
                        <div className="text-xs font-mono-hud text-accent-emerald font-semibold pl-6 mt-1">
                          {cert.score}
                        </div>
                      )}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-hud bg-surface border border-border text-text-muted flex-shrink-0">
                      {cert.completionDate}
                    </span>
                  </div>
                </div>
              ))}

              {/* AWS & IBM Validation Banner */}
              <div className="p-4 rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 text-xs font-mono-hud text-text-muted leading-relaxed">
                <strong className="text-accent-cyan font-bold block mb-1">
                  Cloud & Cognitive Readiness
                </strong>
                Credentials demonstrate rigorous grasp of AWS Infrastructure (EC2, S3, IAM, VPC), high-availability cloud security best practices, and foundational AI/ML architectures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
