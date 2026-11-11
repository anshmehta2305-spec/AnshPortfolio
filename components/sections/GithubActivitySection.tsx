"use client";

import React, { useEffect, useState } from "react";
import { GithubProfile, fetchGithubActivity } from "@/lib/github";
import { PERSONAL_INFO } from "@/data/content";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";

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
    <section id="github-activity" className="py-24 relative border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-white/[0.06] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914]" />
              <span className="text-xs uppercase font-medium tracking-widest text-[#a0a0a0]">
                Open-Source Repositories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub Activity
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#121212] border border-white/10 hover:border-white/30 text-xs font-medium text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-[#e50914]" />
            <span>@{PERSONAL_INFO.githubUsername} &rarr;</span>
          </a>
        </div>

        {/* Telemetry Meter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-lg bg-[#121212] border border-white/[0.06]">
            <div className="text-xs text-[#a0a0a0] font-medium uppercase tracking-wider">
              Public Repositories
            </div>
            <div className="text-3xl font-extrabold text-white mt-2">
              {loading ? "--" : profile?.public_repos}
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[#121212] border border-white/[0.06]">
            <div className="text-xs text-[#a0a0a0] font-medium uppercase tracking-wider">
              Followers
            </div>
            <div className="text-3xl font-extrabold text-white mt-2">
              {loading ? "--" : profile?.followers}
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[#121212] border border-white/[0.06]">
            <div className="text-xs text-[#a0a0a0] font-medium uppercase tracking-wider">
              Following
            </div>
            <div className="text-3xl font-extrabold text-white mt-2">
              {loading ? "--" : profile?.following}
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[#121212] border border-white/[0.06]">
            <div className="text-xs text-[#a0a0a0] font-medium uppercase tracking-wider">
              Sync Status
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-sm mt-3.5">
              <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse inline-block" />
              <span>Live Synced</span>
            </div>
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile?.repos.slice(0, 6).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-[#121212] border border-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#e50914]" />
                    <h3 className="font-semibold text-sm text-white group-hover:text-red-400 transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
                </div>

                <p className="text-xs text-[#a0a0a0] leading-relaxed line-clamp-2 mb-4 font-normal">
                  {repo.description || "Production code repository & architectural prototype."}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#a0a0a0]">
                <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] inline-block" />
                  {repo.language || "TypeScript"}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-neutral-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-neutral-400" />
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
