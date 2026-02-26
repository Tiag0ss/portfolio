
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';

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

export default async function HomePage() {
  // fetch public repos from GitHub user
  const res = await fetch('https://api.github.com/users/Tiag0ss/repos', {
    headers: { 'User-Agent': 'Next.js Portfolio' },
    next: { revalidate: 3600 },
  });
  const allRepos: Array<{
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    fork: boolean;
  }> = await res.json();

  const repos = allRepos.filter(r => !r.fork);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center bg-gradient-to-br from-gray-900 to-gray-950 pb-12">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tiag0ss
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            Transforming ideas into digital experiences
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-block bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">Frontend & Backend Developer</span>
            <span className="inline-block bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">Open Source Enthusiast</span>
            <span className="inline-block bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">Just a random guy</span>
          </div>
          <div className="space-x-4 mb-4">
            <a href="https://www.instagram.com/tiagohomem/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Instagram</a>
            <a href="https://twitter.com/tiag0sa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">X</a>
            <a href="https://github.com/Tiag0ss" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">GitHub</a>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none select-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-gray-950"></div>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          Passionate about building scalable web applications, automation, and creative digital solutions. Experienced in full-stack development, cloud, and open source. Always learning, always building. Strong skills in React, Next.js, Node.js, TypeScript, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-400">20</span>
            <span className="text-gray-400">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-pink-400">20+</span>
            <span className="text-gray-400">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-purple-400">∞</span>
            <span className="text-gray-400">Learning</span>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto py-8 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <span key={tech.name} className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
              <span>{tech.icon}</span> {tech.name}
            </span>
          ))}
        </div>
      </section>


      {/* Other Services & Links */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">Other Services & Links</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <a
            href="https://ophiussa.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-br from-blue-900 to-gray-900 rounded-2xl border border-blue-800 shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:border-blue-400 transition-transform group"
          >
            <div className="text-4xl mb-4 group-hover:text-blue-400 transition-colors">🎮</div>
            <div className="font-bold text-lg mb-2 text-white group-hover:text-blue-400 transition-colors">Ophiussa</div>
            <div className="text-gray-400 text-sm mb-2 text-center">Discord bot for new game releases</div>
            <span className="text-xs text-blue-300 mt-auto">ophiussa.eu</span>
          </a>
          <a
            href="https://loquentiabot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-br from-purple-900 to-gray-900 rounded-2xl border border-purple-800 shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:border-purple-400 transition-transform group"
          >
            <div className="text-4xl mb-4 group-hover:text-purple-400 transition-colors">🤖</div>
            <div className="font-bold text-lg mb-2 text-white group-hover:text-purple-400 transition-colors">LoquentiaBot</div>
            <div className="text-gray-400 text-sm mb-2 text-center">Twitch bot for streamers</div>
            <span className="text-xs text-purple-300 mt-auto">loquentiabot.com</span>
          </a>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Opensource Portfolio Showcase</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all overflow-hidden"
            >
              <div className="h-full flex flex-col justify-between">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors truncate">{repo.name}</h3>
                  {repo.description && (
                    <p className="text-gray-400 text-sm line-clamp-3 min-h-[48px]">{repo.description}</p>
                  )}
                </div>
                <div className="bg-gray-950 px-6 py-3 border-t border-gray-800 text-xs text-gray-500 flex items-center justify-between">
                  <span>GitHub Project</span>
                  <svg className="w-4 h-4 ml-2 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4 text-gray-400">Want to collaborate or have a question? Reach out via social media!</p>
        <div className="space-x-4">
          <a href="https://www.instagram.com/tiagohomem/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Instagram</a>
          <a href="https://twitter.com/tiag0sa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">X</a>
          <a href="https://github.com/Tiag0ss" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">GitHub</a>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tiag0ss. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
