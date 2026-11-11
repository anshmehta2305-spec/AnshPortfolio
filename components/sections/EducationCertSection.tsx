"use client";

import React from "react";
import { EDUCATION, CERTIFICATIONS } from "@/data/content";
import { GraduationCap, Award, CheckCircle, ShieldCheck } from "lucide-react";

export default function EducationCertSection() {
  return (
    <section id="education" className="py-24 relative border-b border-border bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="pb-3 border-b border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
                <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
                  SECTION [05] // ACADEMIC RECORD
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-foreground">
                Formal Education
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime/40 transition-colors shadow-cad"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="text-[10px] font-mono-hud text-brand-lime font-bold">
                        INSTITUTION // 0{idx + 1}
                      </div>
                      <h3 className="text-lg font-display font-extrabold uppercase text-foreground">
                        {edu.institution}
                      </h3>
                    </div>
                    <span className="text-xs font-mono-hud font-bold px-2 py-0.5 bg-black/50 border border-border text-brand-lime">
                      {edu.periodOrYear}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-foreground/90 font-mono-hud">
                    {edu.degree}
                  </div>

                  {edu.grade && (
                    <div className="mt-1 text-xs font-mono-hud font-bold text-brand-lime">
                      RECORD: {edu.grade}
                    </div>
                  )}

                  <div className="text-[11px] font-mono-hud text-text-muted mt-1">
                    LOCATION: {edu.location}
                  </div>

                  {edu.details && (
                    <p className="mt-3 text-xs text-text-muted leading-relaxed border-t border-border/60 pt-2.5">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="pb-3 border-b border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-brand-orange inline-block" />
                <span className="text-xs font-mono-hud text-brand-orange uppercase font-bold tracking-widest">
                  SECTION [06] // INDUSTRY CREDENTIALS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-foreground">
                Cloud &amp; AI Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-sm bg-[#11141a] border border-border hover:border-brand-orange/40 transition-colors shadow-cad"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-lime inline-block" />
                        <h3 className="text-base font-display font-extrabold uppercase text-foreground">
                          {cert.title}
                        </h3>
                      </div>
                      <div className="text-xs font-mono-hud text-text-muted mt-1 pl-3.5">
                        ISSUER: <strong className="text-foreground">{cert.issuer}</strong>
                      </div>
                      {cert.score && (
                        <div className="text-xs font-mono-hud text-brand-lime font-bold pl-3.5 mt-1">
                          SCORE BENCHMARK: {cert.score}
                        </div>
                      )}
                    </div>
                    <span className="text-[11px] font-mono-hud text-text-muted px-2 py-0.5 bg-[#161a22] border border-border flex-shrink-0">
                      {cert.completionDate}
                    </span>
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-sm bg-[#161a22] border border-brand-lime/30 text-xs font-mono-hud text-text-muted">
                <span className="text-brand-lime font-bold block mb-1">
                  // CLOUD &amp; SYSTEMS READINESS AUDIT:
                </span>
                Comprehensive training across Amazon Web Services infrastructure (VPC, EC2, IAM, S3, networking, security controls) and IBM cognitive foundations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
