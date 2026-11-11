export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

export interface GithubProfile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  repos: GithubRepo[];
}

const FALLBACK_PROFILE: GithubProfile = {
  public_repos: 12,
  followers: 4,
  following: 8,
  avatar_url: "https://avatars.githubusercontent.com/u/123456789?v=4",
  html_url: "https://github.com/anshmehta2305-spec",
  bio: "Full-Stack Developer | B.Tech CSE (Final Year) | MERN & Python/FastAPI",
  repos: [
    {
      id: 1,
      name: "avenor-salon",
      description: "Responsive 3D single-page site for luxury men's grooming brand built with React 18, Three.js, GSAP & Tailwind.",
      html_url: "https://github.com/anshmehta2305-spec/avenor-salon",
      stargazers_count: 5,
      forks_count: 1,
      language: "JavaScript",
      updated_at: "2026-10-25T14:20:00Z",
      topics: ["react", "threejs", "gsap", "tailwind", "webgl"],
    },
    {
      id: 2,
      name: "portfolio-pro",
      description: "White-label mutual fund distribution platform with 37 pages, 17 REST APIs, and 13 financial calculators.",
      html_url: "https://github.com/anshmehta2305-spec/portfolio-pro",
      stargazers_count: 8,
      forks_count: 2,
      language: "TypeScript",
      updated_at: "2026-11-05T09:12:00Z",
      topics: ["nextjs14", "prisma", "postgresql", "fintech", "nextauth"],
    },
    {
      id: 3,
      name: "ai-legal-text-clustering",
      description: "Indian Penal Code classification NLP pipeline with FastAPI, Scikit-Learn, TOTP 2FA and FIR generator.",
      html_url: "https://github.com/anshmehta2305-spec/ai-legal-clustering",
      stargazers_count: 4,
      forks_count: 1,
      language: "Python",
      updated_at: "2026-09-18T18:45:00Z",
      topics: ["python", "fastapi", "machine-learning", "nlp", "scikit-learn"],
    },
    {
      id: 4,
      name: "online-auction-system",
      description: "Responsive auction marketplace with ACID compliant bidding mechanics and user authentication in PHP/MySQL.",
      html_url: "https://github.com/anshmehta2305-spec/online-auction-system",
      stargazers_count: 3,
      forks_count: 1,
      language: "PHP",
      updated_at: "2026-08-10T11:00:00Z",
      topics: ["php", "mysql", "javascript", "auction-system"],
    },
  ],
};

export async function fetchGithubActivity(username: string): Promise<GithubProfile> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Ansh-Mehta-Portfolio",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });

    if (!userRes.ok) {
      return FALLBACK_PROFILE;
    }

    const userData = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Ansh-Mehta-Portfolio",
        },
        next: { revalidate: 3600 },
      }
    );

    let reposData: GithubRepo[] = [];
    if (reposRes.ok) {
      const rawRepos = await reposRes.json();
      reposData = rawRepos.map((r: any) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        language: r.language,
        updated_at: r.updated_at,
        topics: r.topics || [],
      }));
    }

    return {
      public_repos: userData.public_repos ?? FALLBACK_PROFILE.public_repos,
      followers: userData.followers ?? FALLBACK_PROFILE.followers,
      following: userData.following ?? FALLBACK_PROFILE.following,
      avatar_url: userData.avatar_url ?? FALLBACK_PROFILE.avatar_url,
      html_url: userData.html_url ?? `https://github.com/${username}`,
      bio: userData.bio ?? FALLBACK_PROFILE.bio,
      repos: reposData.length > 0 ? reposData : FALLBACK_PROFILE.repos,
    };
  } catch (error) {
    return FALLBACK_PROFILE;
  }
}
