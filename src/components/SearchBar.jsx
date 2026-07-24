function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-4xl">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-4 shadow-2xl">
        <span className="mr-3 text-2xl">🔍</span>

        <input
          type="text"
          placeholder="Search PDFs, code, websites, notes..."
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-slate-500"
        />

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition">
          AI Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;