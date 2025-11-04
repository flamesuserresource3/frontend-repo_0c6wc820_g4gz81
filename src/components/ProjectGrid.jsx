import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Neon Analytics',
    description:
      'Interactive dashboards with real-time data and 3D visual layers for an immersive analytics experience.',
    tags: ['React', 'Three.js', 'Tailwind'],
    link: '#',
    source: '#',
  },
  {
    title: 'Quantum UI Kit',
    description:
      'A modular, square-first component library with elegant motion and accessibility baked in.',
    tags: ['TypeScript', 'Radix', 'Framer Motion'],
    link: '#',
    source: '#',
  },
  {
    title: 'Pulse Commerce',
    description:
      'High-performance storefront with edge rendering, smart caching, and delightful micro-interactions.',
    tags: ['Next.js', 'Edge', 'Stripe'],
    link: '#',
    source: '#',
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-sm border border-violet-400/30 bg-violet-500/10 px-2 py-0.5 text-xs text-violet-200">
      {children}
    </span>
  );
}

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative bg-[#0b0b12] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(139,92,246,0.12),transparent),radial-gradient(800px_400px_at_90%_0%,rgba(217,70,239,0.10),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A selection of work that blends aesthetics with performance and clean architecture.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-violet-300/80">
            <Layers size={18} />
            <span className="text-sm">Square-first design system</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-lg border border-white/10 bg-white/5 p-5 transition hover:translate-y-[-2px] hover:bg-white/10 hover:border-white/20"
            >
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 rounded-sm border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 transition"
                >
                  Live <ExternalLink size={14} />
                </a>
                <a
                  href={p.source}
                  className="inline-flex items-center gap-1 rounded-sm border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 transition"
                >
                  Code <Github size={14} />
                </a>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-md opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
