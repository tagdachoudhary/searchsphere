function CTA() {
    return (
      <section className="relative overflow-hidden px-6 py-28">
  
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
  
        <div className="relative mx-auto max-w-6xl rounded-[36px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-16 text-center shadow-[0_0_80px_rgba(59,130,246,0.15)]">
  
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
            🚀 Ready to Get Started?
          </span>
  
          <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
            Search Smarter.
            <br />
            Work Faster.
          </h2>
  
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            SearchSphere helps developers, students and researchers search
            PDFs, documentation, GitHub repositories, websites and notes
            using one intelligent AI-powered search engine.
          </p>
  
          <div className="mt-12 flex justify-center gap-5">
  
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Launch SearchSphere
            </button>
  
            <button className="rounded-2xl border border-slate-700 px-8 py-4 text-lg transition hover:border-blue-500">
              View Documentation
            </button>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default CTA;