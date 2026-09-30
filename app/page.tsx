import FloatingChrome from './FloatingChrome';
import RepoGrid from './RepoGrid';

const techStack = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Tailwind',
  'Docker',
  'C#',
  'SQL Server',
  'SAP HANA',
  'JavaScript',
  'MySQL',
];

const stats = [
  { value: '9+', label: 'Open-source projects' },
  { value: '24/7', label: 'Ideas logged' },
  { value: '∞', label: 'Next experiments' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Tiag0ss' },
  { name: 'Instagram', href: 'https://www.instagram.com/tiagohomem/' },
  { name: 'X', href: 'https://twitter.com/tiag0sa' },
];

const spotlightProjects = [
  {
    name: 'Hypezero',
    href: 'https://www.hypezero.net/',
    tag: 'Product',
    description:
      'Game release radar — track hype, filters and community signals around new releases in real time.',
    cta: 'Visit site',
  },
  {
    name: 'Myelin',
    href: 'https://pmdemo.tiag0ss.dev',
    tag: 'Demo',
    description: 'Project management app for tasks, planning and collaboration. Demo login: admin / admin1',
    cta: 'Open demo',
  },
  {
    name: 'Synapse',
    href: 'https://synapsedemo.tiag0ss.dev',
    tag: 'Demo',
    description: 'Markdown vaults with wikilinks, whiteboards, public wikis and optional push to Myelin.',
    cta: 'Open demo',
  },
];

const capabilities = [
  {
    label: 'Repos',
    title: 'Open-source work in public',
    description: 'Public repositories, experiments and utilities that stay visible instead of living in private folders.',
  },
  {
    label: 'Bots',
    title: 'Tools built for communities',
    description: 'Discord and Twitch projects shaped by automation, moderation and real utility for active users.',
  },
  {
    label: 'Labs',
    title: 'Experiments that turn into releases',
    description: 'Ideas move from prototypes to usable software, then back into the loop for the next iteration.',
  },
];

const shell = 'mx-auto w-full max-w-6xl px-6 lg:px-8';

export default function HomePage() {
  return (
    <main id="top" className="bg-atmosphere relative min-h-screen overflow-x-hidden text-[var(--fg)]">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine" />
      <div className="orb pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[var(--accent-2)]/10 blur-[100px]" />
      <div className="orb pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-[110px]" style={{ animationDelay: '2s' }} />

      <FloatingChrome />

      <section className={`${shell} relative z-10 flex min-h-[78vh] flex-col justify-center pb-20 pt-28`}>
        <p className="animate-rise text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
          Full-stack systems · open source
        </p>
        <h1 className="animate-rise-delay font-display mt-6 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Tiag0ss
          <span className="mt-4 block text-[1.35rem] font-medium leading-snug tracking-normal text-[var(--muted)] sm:text-2xl lg:text-3xl">
            Open-source code, tools and experiments kept online.
          </span>
        </h1>
        <p className="animate-rise-delay-2 mt-8 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
          A portfolio centered on public builds: repositories, bots, utilities and ongoing experiments across web,
          automation and backend systems.
        </p>
        <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#07060b] transition hover:bg-[var(--accent)]"
          >
            View selected work
          </a>
          <a
            href="https://github.com/Tiag0ss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.04]"
          >
            Browse GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <dl className="stats-row mt-16 max-w-2xl border-t border-[var(--line)] pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{stat.label}</dt>
              <dd className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className={`${shell} relative z-10`}>
        <div className="section-rule" />
      </div>

      <section className={`${shell} relative z-10 py-20`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="lg:w-[42%] lg:shrink-0">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent-2)]">About</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Public work at the center.
            </h2>
          </div>
          <p className="text-base leading-8 text-[var(--muted)] sm:text-lg lg:flex-1">
            This page tracks repositories, bots, automations and software experiments that are already out in the open.
            The point is the work itself: what exists, what ships and what keeps improving. Focus areas include frontend
            and backend systems, open source, and automation.
          </p>
        </div>

        <div className="row-cards mt-14">
          {capabilities.map((capability) => (
            <div
              key={capability.label}
              className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6 sm:p-7"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">{capability.label}</p>
              <h3 className="font-display mt-4 text-lg font-semibold text-white">{capability.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className={`${shell} relative z-10 py-20`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent)]">Selected work</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Products and demos</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)] sm:text-right">
            Live projects and demos you can open and explore.
          </p>
        </div>

        <div className="row-cards mt-12">
          {spotlightProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[220px] flex-col rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--accent)]/40 hover:bg-white/[0.03]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{project.tag}</p>
              <h3 className="font-display mt-4 text-2xl font-semibold text-white transition group-hover:text-[var(--accent)]">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition group-hover:text-[var(--accent)]">
                {project.cta}
                <span className="transition group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="stack" className={`${shell} relative z-10 py-20`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent-2)]">Stack</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tools behind the builds
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)] sm:text-right">
            Frontend, backend, automation, containers and databases — whatever the project demands.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2.5">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-[var(--line)] bg-white/[0.02] px-4 py-2 text-sm text-[var(--fg)] transition hover:border-[var(--accent)]/35 hover:text-white"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section id="open-source" className={`${shell} relative z-10 py-20`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent)]">Open source</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From GitHub, live
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)] sm:text-right">
            Public repositories pulled from GitHub as part of the portfolio record.
          </p>
        </div>

        <div className="mt-12">
          <RepoGrid />
        </div>
      </section>

      <section id="contact" className={`${shell} relative z-10 py-20`}>
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] px-8 py-12 sm:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent)]">Elsewhere</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find updates and releases
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
            Platforms where public releases, project traces and day-to-day updates keep appearing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[var(--accent)]/40 hover:bg-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className={`${shell} relative z-10 border-t border-[var(--line)] py-10`}>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-base font-semibold text-white">Tiag0ss</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} · Public builds, bots and experiments kept online.
            </p>
          </div>
          <form action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="hosted_button_id" value="JBKGCMAWUWCCJ" />
            <button
              type="submit"
              className="rounded-md border border-[var(--line)] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[var(--accent-2)]/40 hover:bg-white/[0.06]"
              title="Donate to help continue doing free projects!"
            >
              Support free projects
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
