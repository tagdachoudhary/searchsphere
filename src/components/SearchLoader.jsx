const SearchLoader = () => {
  return (
    <div className="min-h-screen bg-[#030712] px-8 py-12">
      <div className="mx-auto max-w-5xl animate-pulse">

        {/* Heading */}
        <div className="h-12 w-2/3 rounded-xl bg-zinc-800"></div>
        <div className="mt-4 h-6 w-1/3 rounded-lg bg-zinc-900"></div>

        {/* AI Summary Card */}
        <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-8">

          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-cyan-500/30"></div>

            <div className="flex-1">
              <div className="h-6 w-48 rounded bg-zinc-700"></div>
              <div className="mt-3 h-4 w-72 rounded bg-zinc-800"></div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="h-4 w-full rounded bg-zinc-800"></div>
            <div className="h-4 w-11/12 rounded bg-zinc-800"></div>
            <div className="h-4 w-10/12 rounded bg-zinc-800"></div>
            <div className="h-4 w-9/12 rounded bg-zinc-800"></div>
          </div>
        </div>

        {/* Search Result Cards */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
          >
            <div className="h-4 w-40 rounded bg-cyan-900"></div>

            <div className="mt-4 h-8 w-3/4 rounded bg-zinc-700"></div>

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-zinc-800"></div>
              <div className="h-4 w-11/12 rounded bg-zinc-800"></div>
              <div className="h-4 w-9/12 rounded bg-zinc-800"></div>
            </div>

            <div className="mt-8 h-12 w-40 rounded-xl bg-cyan-900"></div>
          </div>
        ))}

        {/* Footer Loading */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400"></span>
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-cyan-400"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-cyan-400"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SearchLoader;