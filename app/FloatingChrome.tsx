'use client';

import { useEffect, useState } from 'react';

const shell = 'mx-auto w-full max-w-6xl px-6 lg:px-8';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Stack', href: '#stack' },
  { name: 'Open source', href: '#open-source' },
  { name: 'Contact', href: '#contact' },
];

export default function FloatingChrome() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setShowTop(y > 420);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? 'border-b border-[var(--line)] bg-[rgba(7,6,11,0.78)] py-3 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <div className={`${shell} flex items-center justify-between`}>
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
            Tiag0ss
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com/Tiag0ss"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--line)] bg-white/[0.03] px-3.5 py-2 text-sm text-white transition hover:border-[var(--accent)]/40 hover:bg-white/[0.06]"
          >
            GitHub
          </a>
        </div>
      </header>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--line)] bg-[rgba(14,12,20,0.9)] text-white shadow-lg backdrop-blur-md transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)] ${
          showTop ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <span aria-hidden="true" className="text-lg leading-none">
          ↑
        </span>
      </button>
    </>
  );
}
