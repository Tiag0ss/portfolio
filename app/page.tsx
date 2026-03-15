
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import RepoGrid from './RepoGrid';

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '⏭️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'Tailwind', icon: '🌬️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'C#', icon: '💠' },
  { name: 'SQL Server', icon: '🗄️' },
  { name: 'SAP HANA', icon: '🔶' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'MySQL', icon: '🐬' },
];

const stats = [
  { value: '20+', label: 'Projects', accent: 'from-cyan-400 to-blue-500' },
  { value: '24/7', label: 'Ideas logged', accent: 'from-fuchsia-400 to-pink-500' },
  { value: '∞', label: 'Next experiments', accent: 'from-violet-400 to-purple-500' },
];

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/tiagohomem/', accent: 'hover:border-pink-400 hover:text-pink-300' },
  { name: 'X', href: 'https://twitter.com/tiag0sa', accent: 'hover:border-cyan-400 hover:text-cyan-300' },
  { name: 'GitHub', href: 'https://github.com/Tiag0ss', accent: 'hover:border-violet-400 hover:text-violet-300' },
];

const spotlightProjects = [
  {
    name: 'Ophiussa',
    href: 'https://ophiussa.eu',
    icon: '🎮',
    description: 'A bot and platform built to track new releases and keep gaming communities updated in real time.',
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    border: 'border-cyan-500/30 hover:border-cyan-300/80',
    glow: 'shadow-cyan-500/20',
  },
  {
    name: 'LoquentiaBot',
    href: 'https://loquentiabot.com',
    icon: '🤖',
    description: 'A Twitch bot project focused on interaction, utility and experiments around live communities.',
    accent: 'from-fuchsia-500/20 via-violet-500/10 to-transparent',
    border: 'border-fuchsia-500/30 hover:border-fuchsia-300/80',
    glow: 'shadow-fuchsia-500/20',
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

export default function HomePage() {

  return (
    <main className="min-h-screen overflow-hidden bg-[#05010e] text-slate-100 font-sans">
      <div className="cyber-scanlines relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-12rem] top-[-10rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/16 blur-[120px]" />
          <div className="absolute right-[-10rem] top-16 h-[28rem] w-[28rem] rounded-full bg-cyan-500/14 blur-[120px]" />
          <div className="absolute bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-violet-500/14 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
          <div className="absolute inset-y-0 left-[-10%] w-[40%] -skew-x-12 bg-gradient-to-r from-fuchsia-500/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(12,8,24,0),rgba(5,1,14,0.97)_72%)]" />
        </div>

        <section className="mx-auto grid min-h-screen max-w-7xl gap-14 overflow-hidden px-6 pb-16 pt-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:px-10 lg:pt-28 xl:gap-20">
          <div className="relative z-10 flex flex-col justify-center lg:pr-6 xl:pr-12">
           <p className="mb-6 text-xs uppercase tracking-[0.45em] text-fuchsia-300/80">Tiag0ss // full-stack systems</p>

            <h1 className="max-w-4xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:max-w-5xl lg:text-[6.8rem]">
              Tiag0ss
              <span className="mt-3 block bg-gradient-to-r from-fuchsia-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                open-source code, tools and experiments kept online.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A portfolio centered on public builds: repositories, bots, utilities and ongoing experiments across web, automation and backend systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/Tiag0ss"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/50 bg-fuchsia-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-100 shadow-[0_0_30px_rgba(217,70,239,0.24)] transition hover:-translate-y-0.5 hover:bg-fuchsia-500/20"
              >
                Enter the archive
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.instagram.com/tiagohomem/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
              >
                Follow the signal
                <span aria-hidden="true">✦</span>
              </a>
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap gap-3">
              <span className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-100">Frontend + Backend</span>
              <span className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">Open Source</span>
              <span className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-100">Automation Systems</span>
            </div>

            <div className="relative z-10 mt-14 grid max-w-3xl gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
              <div className="cyber-panel rounded-[1.35rem] px-5 py-5">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/80">Open-source focus</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Public GitHub work, community bots and software experiments with real usage behind them.
                </p>
              </div>
              <div className="cyber-panel rounded-[1.35rem] px-5 py-5 lg:mt-4">
                <p className="text-[11px] uppercase tracking-[0.32em] text-fuchsia-200/80">Current lane</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Bots, web apps, integrations and tools worth shipping in public.</p>
              </div>
            </div>
          </div>

          <div className="relative z-0 flex items-center justify-center lg:justify-end lg:pt-16 xl:pt-24">
            <div className="relative isolate w-full max-w-xl overflow-hidden rounded-[1.75rem] lg:mr-0 xl:mr-4">
              <div className="cyber-panel relative overflow-hidden rounded-[1.75rem] p-6 xl:translate-y-6">
                <div className="mb-6 h-px w-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/80 to-cyan-400/0" />
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200/80">Neural Grid</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Portfolio Feed Online</h2>
                  </div>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Live Snapshot
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className={`inline-flex rounded-full bg-gradient-to-r ${stat.accent} px-3 py-1 text-xs font-semibold text-white`}>
                        LIVE
                      </div>
                      <div className="mt-4 text-3xl font-black text-white">{stat.value}</div>
                      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 via-[#12091f] to-cyan-500/10 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200/70">Current Focus</p>
                      <p className="mt-2 text-base text-slate-200">
                        Building and maintaining open-source projects, useful bots and software experiments that keep evolving in public.
                      </p>
                    </div>
                    <div className="grid h-16 w-16 place-items-center rounded-[1.25rem] border border-cyan-300/20 bg-slate-950/70 text-2xl text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.22)]">
                      ⌁
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.25rem] border border-fuchsia-500/15 bg-fuchsia-500/[0.05] p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-fuchsia-200/70">Signal 01</p>
                    <p className="mt-3 text-sm font-medium text-white">Public repos</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-cyan-500/15 bg-cyan-500/[0.05] p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-200/70">Signal 02</p>
                    <p className="mt-3 text-sm font-medium text-white">Community bots</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-violet-500/15 bg-violet-500/[0.05] p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-violet-200/70">Signal 03</p>
                    <p className="mt-3 text-sm font-medium text-white">New releases</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition ${link.accent}`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid items-start gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="cyber-panel rounded-[1.75rem] p-8 backdrop-blur-2xl [clip-path:polygon(0_0,calc(100%-28px)_0,100%_28px,100%_100%,0_100%)] lg:sticky lg:top-10">
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-200">About</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">An open-source portfolio with public work at the center.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                This page tracks repositories, bots, automations and software experiments that are already out in the open. The point is the work itself: what exists, what ships and what keeps improving.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {capabilities.map((capability, index) => (
                <div
                  key={capability.label}
                  className={`cyber-panel rounded-[1.5rem] p-6 backdrop-blur-2xl [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)] ${
                    index === 0 ? 'lg:col-span-2 lg:mt-0' : index === 1 ? 'lg:col-span-2 lg:mt-6' : 'lg:col-span-2 lg:mt-2'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">{capability.label}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{capability.description}</p>
                </div>
              ))}

              {spotlightProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-[1.75rem] border bg-[#090312]/80 p-8 backdrop-blur-2xl transition hover:-translate-y-1 ${project.border} ${project.glow} shadow-[0_0_45px_rgba(15,23,42,0.7)] ${
                    index === 0 ? 'lg:col-span-4 lg:mt-4' : 'lg:col-span-2 lg:mt-0 lg:self-end'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`} />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 text-4xl">{project.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                      Open project
                      <span className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="cyber-panel rounded-[1.75rem] p-8 backdrop-blur-2xl [clip-path:polygon(0_0,calc(100%-32px)_0,100%_32px,100%_100%,32px_100%,0_calc(100%-32px))]">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-200">Stack</p>
                <h2 className="mt-3 text-3xl font-bold text-white">The stack behind the builds, experiments and side quests.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                The usual weapons: frontend, backend, automation, containers, databases and whatever else the project demands.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group rounded-[1.25rem] border border-white/10 bg-[#090312]/80 p-5 transition hover:-translate-y-1 hover:border-fuchsia-400/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.12)] ${
                    index % 4 === 1 ? 'xl:translate-y-4' : index % 4 === 2 ? 'xl:-translate-y-3' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-500">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="mt-6 text-lg font-semibold text-white group-hover:text-cyan-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Open Source</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Open-source work pulled straight from GitHub.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              Live repositories, updated from GitHub and placed here as part of the portfolio record.
            </p>
          </div>

          <RepoGrid />
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-500/10 via-[#090312]/90 to-cyan-500/10 p-8 shadow-[0_0_50px_rgba(168,85,247,0.18)] backdrop-blur-2xl sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-[80px]" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-[80px]" />
            <div className="relative z-10 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Signal Links</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Elsewhere on the network.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Links to the platforms where updates, public releases and project traces keep appearing.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-xl transition ${link.accent}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 pb-10 pt-4 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="cyber-panel relative overflow-hidden rounded-[1.75rem] px-6 py-6 sm:px-8 sm:py-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/80 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
              <div className="absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-fuchsia-200/80">Archive footer</p>
                  <div className="mt-3 flex flex-col gap-3">
                    <div>
                      <p className="text-lg font-semibold text-white">Tiag0ss // open-source archive</p>
                      <p className="mt-1 text-sm leading-7 text-slate-400">
                        © {new Date().getFullYear()} Tiag0ss. Public builds, bots and experiments kept online.
                      </p>
                    </div> 
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3 md:ml-auto md:items-end md:border-l md:border-fuchsia-500/10 md:pl-10 lg:pl-14">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Support free projects</p>
                  <form action="https://www.paypal.com/donate" method="post" target="_blank" className="w-full md:w-auto">
                    <input type="hidden" name="hosted_button_id" value="JBKGCMAWUWCCJ" />
                    <button
                      type="submit"
                      className="inline-flex w-full min-w-[220px] items-center justify-center gap-3 rounded-xl border border-fuchsia-400/40 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_30px_rgba(217,70,239,0.16)] transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:shadow-[0_0_36px_rgba(34,211,238,0.18)] md:w-auto"
                      title="Donate to help continue doing free projects!"
                    >
                      <span className="text-fuchsia-300">◈</span>
                      Donate
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
