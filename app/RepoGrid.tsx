'use client';

import { useEffect, useState } from 'react';

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
};

async function fetchPublicRepos(): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(`https://api.github.com/users/Tiag0ss/repos?type=public&per_page=100&page=${page}`, {
      headers: { 'User-Agent': 'Next.js Portfolio' },
      cache: 'no-store',
    });

    if (!res.ok) {
      break;
    }

    const batch: GitHubRepo[] = await res.json();
    repos.push(...batch);

    if (batch.length < 100) {
      break;
    }

    page += 1;
  }

  return repos.filter((repo) => !repo.fork);
}

export default function RepoGrid() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const data = await fetchPublicRepos();
      if (!cancelled) {
        setRepos(data);
        setLoading(false);
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-center text-slate-400 backdrop-blur-2xl">
        Loading repositories...
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-center text-slate-400 backdrop-blur-2xl">
        Repository data is temporarily offline. The visual shell is ready — the GitHub feed just needs a fresh signal.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {repos.map((repo, index) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden rounded-[1.75rem] border border-fuchsia-500/15 bg-[#090312]/85 p-6 shadow-[0_0_45px_rgba(15,23,42,0.7)] transition hover:-translate-y-1 hover:border-cyan-400/60 ${
            index === 0 ? 'xl:col-span-2' : index === 2 || index === 5 ? 'xl:-mt-4' : index === 4 ? 'xl:mt-6' : ''
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.18),transparent_30%)] opacity-80" />
          <div className="cyber-glow absolute left-6 top-0 h-px w-24 bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                Repo
              </span>
              <span className="text-slate-500 transition group-hover:text-cyan-300">↗</span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300">{repo.name}</h3>
            <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-400">
              {repo.description ?? 'Open-source work focused on utility, experimentation and continuous evolution.'}
            </p>
            <div className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
              GitHub archive node
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
