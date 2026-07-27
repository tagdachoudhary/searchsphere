function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 shadow-lg shadow-blue-500/20">
            🔍
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight">
            SearchSphere
          </h1>

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-300">
            BETA
          </span>

        </div>

        <div className="hidden items-center gap-8 text-slate-300 md:flex">

          <a href="#" className="transition hover:text-white">
            Features
          </a>

          <a href="#" className="transition hover:text-white">
            Technology
          </a>

          <a href="#" className="transition hover:text-white">
            Pricing
          </a>

          <a href="#" className="transition hover:text-white">
            GitHub
          </a>

        </div>

        <div className="flex gap-3">

          <button className="rounded-xl border border-slate-700 px-5 py-3 hover:border-blue-500">
            Sign In
          </button>

          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105">
            Launch App
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;