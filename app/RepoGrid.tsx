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
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-8 text-center text-sm text-[var(--muted)]">
        Loading repositories...
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-8 text-center text-sm text-[var(--muted)]">
        Repository data is temporarily offline. Try again shortly.
      </div>
    );
  }

  return (
    <div className="card-list">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[180px] flex-col rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5 transition hover:border-[var(--accent)]/35 hover:bg-white/[0.03]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-white transition group-hover:text-[var(--accent)]">
              {repo.name}
            </h3>
            <span className="shrink-0 text-[var(--muted)] transition group-hover:text-[var(--accent)]" aria-hidden="true">
              ↗
            </span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">
            {repo.description ?? 'Open-source work focused on utility, experimentation and continuous evolution.'}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--muted)]/80">GitHub</p>
        </a>
      ))}
    </div>
  );
}
