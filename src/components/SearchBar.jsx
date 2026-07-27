import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full">

      <div className="rounded-[28px] border border-slate-700/70 bg-slate-900/70 p-3 backdrop-blur-xl shadow-2xl">

        <div className="flex items-center gap-3">

          <span className="text-2xl">🔍</span>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search PDFs, GitHub, websites, documentation..."
            className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-slate-500"
          />

          <button className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800">
            📎
          </button>

          <button className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800">
            🎤
          </button>

          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold transition-all duration-300 hover:scale-105">
            ✨ AI Search
          </button>

        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">

          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
            📄 PDFs
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
            💻 GitHub
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
            🌐 Websites
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
            📚 Docs
          </span>

          <div className="ml-auto rounded-lg border border-slate-700 px-3 py-1 text-xs text-slate-400">
            Ctrl + K
          </div>

        </div>

      </div>

    </div>
  );
}

export default SearchBar;