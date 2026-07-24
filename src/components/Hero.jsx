import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">

      <p className="mb-4 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        🚀 AI-Powered Universal Search
      </p>

      <h1 className="max-w-5xl text-6xl font-extrabold leading-tight md:text-7xl">
        Search <span className="text-blue-500">Everything</span>.
        <br />
        Understand Anything.
      </h1>

      <p className="mt-8 max-w-3xl text-xl text-slate-400">
        Search across PDFs, documentation, codebases, websites,
        notes and knowledge using one intelligent AI-powered search bar.
      </p>

      <SearchBar />

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">
          Get Started
        </button>

        <button className="rounded-xl border border-slate-700 px-6 py-3 hover:bg-slate-800">
          View Demo
        </button>
      </div>

    </section>
  );
}

export default Hero;