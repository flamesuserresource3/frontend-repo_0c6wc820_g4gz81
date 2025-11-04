import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0b12] py-24 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_80%_20%,rgba(124,58,237,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-violet-300">
          <Mail size={18} />
          <span className="text-sm">Let’s build something remarkable</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Have a project in mind or just want to say hi? Drop a message and I’ll get back to you soon.
        </p>

        <form
          className="mt-8 grid grid-cols-1 gap-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks! Your message has been staged locally. Connect a backend to send it.');
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Your name"
              className="rounded-md border border-white/15 bg-[#0f0f17] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/60"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="rounded-md border border-white/15 bg-[#0f0f17] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/60"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="rounded-md border border-white/15 bg-[#0f0f17] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/60"
          />
          <textarea
            required
            rows={5}
            placeholder="Your message"
            className="rounded-md border border-white/15 bg-[#0f0f17] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/60"
          />

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-white/50">I usually reply within 1–2 business days.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-violet-600 to-fuchsia-500 px-5 py-3 text-white hover:brightness-110 transition"
            >
              <Send size={16} /> Send message
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-xs text-white/40">© {new Date().getFullYear()} Your Name — Built with care.</p>
      </div>
    </section>
  );
}
