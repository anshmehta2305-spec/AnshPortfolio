"use client";

import React, { useEffect, useState } from "react";
import { GithubProfile, fetchGithubActivity } from "@/lib/github";
import { PERSONAL_INFO } from "@/data/content";
import { Github, Star, GitFork, ExternalLink, Activity, Code } from "lucide-react";

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
    <section id="github-activity" className="py-24 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                <Github className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider">
                07 // Open Source & Public Repositories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Live GitHub Activity
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl">
              Public codebases, architectural prototypes, and automated test harnesses maintained on GitHub by{" "}
              <strong className="text-foreground">@{PERSONAL_INFO.githubUsername}</strong>.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-border hover:border-accent-cyan/40 text-xs font-mono-hud text-foreground hover:text-accent-cyan transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{PERSONAL_INFO.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub HUD Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl glass-panel border border-border text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-accent-cyan">
              {loading ? "--" : profile?.public_repos}
            </div>
            <div className="text-xs font-mono-hud text-text-muted mt-1 uppercase">
              Public Repos
            </div>
          </div>
          <div className="p-4 rounded-xl glass-panel border border-border text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              {loading ? "--" : profile?.followers}
            </div>
            <div className="text-xs font-mono-hud text-text-muted mt-1 uppercase">
              Followers
            </div>
          </div>
          <div className="p-4 rounded-xl glass-panel border border-border text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              {loading ? "--" : profile?.following}
            </div>
            <div className="text-xs font-mono-hud text-text-muted mt-1 uppercase">
              Following
            </div>
          </div>
          <div className="p-4 rounded-xl glass-panel border border-border text-center">
            <div className="flex items-center justify-center gap-1.5 text-accent-emerald text-sm font-semibold font-mono-hud mt-2">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span>ACTIVE</span>
            </div>
            <div className="text-xs font-mono-hud text-text-muted mt-2 uppercase">
              API Status
            </div>
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile?.repos.slice(0, 6).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-panel border border-border/80 hover:border-accent-cyan/40 hover:bg-surface-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-accent-cyan" />
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-accent-cyan transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                </div>

                <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
                  {repo.description || "Production code repository & architectural prototype."}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono-hud text-text-muted">
                <span className="flex items-center gap-1 text-foreground/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  {repo.language || "TypeScript"}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-text-muted" />
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
