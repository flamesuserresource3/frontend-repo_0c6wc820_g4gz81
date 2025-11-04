import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden bg-[#0b0b12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b12]/40 via-[#0b0b12]/40 to-[#0b0b12]" />

      <div className="relative z-10 h-full">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-sm bg-gradient-to-br from-violet-400 to-fuchsia-500" />
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Elegant Tech Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
            I craft modern, performant web experiences with a focus on clarity, precision, and immersive interactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-violet-600 to-fuchsia-500 px-5 py-3 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:brightness-110 transition"
            >
              <Rocket size={18} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-white/90 hover:bg-white/15 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
