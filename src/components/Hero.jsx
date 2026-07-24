function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-extrabold tracking-tight">
        SearchSphere X
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        One search bar for PDFs, code, websites, notes, and AI-powered answers.
      </p>

      <div className="mt-10 flex w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-2">
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 bg-transparent px-4 py-3 outline-none"
        />

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;