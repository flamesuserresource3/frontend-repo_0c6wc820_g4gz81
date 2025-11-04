import { useState } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-tight text-white">
            <span className="px-2 py-1 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">FS</span>
            <span className="ml-2 text-white/90">Futuristic Square</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/20" />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
              <Mail size={16} /> Hire Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-white/85 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <a href="#contact" className="flex-1 text-center rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
                  <Mail size={16} className="inline mr-2" /> Hire Me
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex-1 text-center rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
                  <Github size={16} className="inline mr-2" /> GitHub
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
