"use client";

import React, { useEffect, useState } from "react";
import { GithubProfile, fetchGithubActivity } from "@/lib/github";
import { PERSONAL_INFO } from "@/data/content";
import { Github, Star, GitFork, ExternalLink, Code2, Terminal } from "lucide-react";

export default function GithubActivitySection() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchGithubActivity(PERSONAL_INFO.githubUsername);
        setProfile(data);
      } catch (err) {
        // Fallback handled in helper
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section id="github-activity" className="py-24 relative border-b border-border bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
              <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
                SECTION [07] // GITHUB TELEMETRY &amp; REPOSITORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-foreground tracking-tight">
              Open-Source Activity
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime text-xs font-mono-hud text-foreground hover:text-brand-lime transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>@{PERSONAL_INFO.githubUsername} &rarr;</span>
          </a>
        </div>

        {/* Telemetry Meter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-4 rounded-sm bg-[#11141a] border border-border">
            <div className="text-[10px] font-mono-hud text-brand-lime font-bold uppercase">
              PUBLIC REPOSITORIES
            </div>
            <div className="text-3xl font-display font-extrabold text-foreground mt-1">
              {loading ? "--" : profile?.public_repos}
            </div>
          </div>

          <div className="p-4 rounded-sm bg-[#11141a] border border-border">
            <div className="text-[10px] font-mono-hud text-brand-lime font-bold uppercase">
              FOLLOWERS
            </div>
            <div className="text-3xl font-display font-extrabold text-foreground mt-1">
              {loading ? "--" : profile?.followers}
            </div>
          </div>

          <div className="p-4 rounded-sm bg-[#11141a] border border-border">
            <div className="text-[10px] font-mono-hud text-brand-lime font-bold uppercase">
              FOLLOWING
            </div>
            <div className="text-3xl font-display font-extrabold text-foreground mt-1">
              {loading ? "--" : profile?.following}
            </div>
          </div>

          <div className="p-4 rounded-sm bg-[#11141a] border border-border">
            <div className="text-[10px] font-mono-hud text-brand-lime font-bold uppercase">
              API TELEMETRY
            </div>
            <div className="flex items-center gap-2 text-brand-lime font-mono-hud font-bold text-sm mt-3">
              <span className="w-2 h-2 rounded-none bg-brand-lime animate-pulse inline-block" />
              <span>LIVE_SYNCED</span>
            </div>
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile?.repos.slice(0, 6).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime/80 hover:bg-[#161a22] transition-all flex flex-col justify-between group shadow-cad"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-brand-lime" />
                    <h3 className="font-mono-hud font-bold text-sm text-foreground group-hover:text-brand-lime transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-lime transition-transform flex-shrink-0" />
                </div>

                <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4 font-sans">
                  {repo.description || "Production code repository & architectural prototype."}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono-hud text-text-muted">
                <span className="flex items-center gap-1.5 text-foreground/90 font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-lime inline-block" />
                  {repo.language || "TypeScript"}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-brand-orange" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-text-muted" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
