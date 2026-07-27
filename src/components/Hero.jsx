function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#030712] px-6">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Glow */}
      <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="absolute right-[-150px] bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[160px]" />

      <div className="relative z-10 flex max-w-6xl flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 backdrop-blur-md">
          🚀 AI-Powered Universal Search
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Search{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
            Everything
          </span>
          <br />
          Understand Anything.
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
          Search PDFs, websites, GitHub repositories, documentation, notes,
          and knowledge using one intelligent AI-powered search engine.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-3 text-white transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">
            View Demo
          </button>

        </div>

        <p className="mt-8 text-sm text-slate-500">
          Trusted by developers • students • researchers
        </p>

      </div>

    </section>
  );
}

export default Hero;