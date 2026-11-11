"use client";

import React from "react";
import { EDUCATION, CERTIFICATIONS } from "@/data/content";
import { GraduationCap, Award, CheckCircle2, ShieldCheck, MapPin, Calendar } from "lucide-react";

export default function EducationCertSection() {
  return (
    <section id="education" className="py-24 relative border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#e50914]" />
            <span className="text-xs uppercase font-medium tracking-widest text-[#a0a0a0]">
              Academic &amp; Professional Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.06]">
              <GraduationCap className="w-5 h-5 text-[#e50914]" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Formal Education
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-[#121212] border border-white/[0.06] hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {edu.institution}
                      </h4>
                      <div className="text-sm text-neutral-300 mt-1 font-medium">
                        {edu.degree}
                      </div>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-neutral-300 flex-shrink-0 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#e50914]" />
                      {edu.periodOrYear}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t border-white/[0.06] text-xs text-[#a0a0a0]">
                    {edu.grade && (
                      <span className="text-[#e50914] font-semibold">
                        Grade: {edu.grade}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.details && (
                    <p className="mt-3 text-xs text-[#a0a0a0] leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.06]">
              <Award className="w-5 h-5 text-[#e50914]" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Cloud &amp; Industry Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-[#121212] border border-white/[0.06] hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#e50914] flex-shrink-0" />
                        <h4 className="text-base font-semibold text-white">
                          {cert.title}
                        </h4>
                      </div>
                      <div className="text-xs text-[#a0a0a0] mt-1.5 pl-6">
                        Issuer: <strong className="text-neutral-200">{cert.issuer}</strong>
                      </div>
                      {cert.score && (
                        <div className="text-xs text-[#e50914] font-medium pl-6 mt-1">
                          Score: {cert.score}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-neutral-400 px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] flex-shrink-0">
                      {cert.completionDate}
                    </span>
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-lg bg-[#121212] border border-red-500/20 text-xs text-[#a0a0a0] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#e50914] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block mb-0.5">
                    Cloud &amp; Systems Readiness
                  </span>
                  Comprehensive coursework across Amazon Web Services infrastructure (VPC, EC2, IAM, S3, networking, security controls) and IBM cognitive foundations.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
