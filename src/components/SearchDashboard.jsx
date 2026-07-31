import Sidebar from "./Sidebar";
import SearchFilters from "./SearchFilters";
import SearchCategories from "./SearchCategories";
import useSearch from "../hooks/useSearch";

const SearchDashboard = ({ searchQuery }) => {
  const { results, summary, loading, error } = useSearch(searchQuery);

  return (
    <div className="flex min-h-screen bg-[#030712] text-white">
      <Sidebar />

      <main className="flex-1 px-10 py-10">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <h1 className="text-5xl font-bold">
            Results for{" "}
            <span className="text-cyan-400">
              "{searchQuery}"
            </span>
          </h1>

          <p className="mt-3 text-lg text-gray-400">
            Live Google search results powered by SearchSphere AI.
          </p>

          {/* Filters */}
          <div className="mt-8">
            <SearchFilters />
          </div>

          {/* Categories */}
          <div className="mt-10">
            <SearchCategories />
          </div>

          {/* Loading */}
          {loading && (
            <div className="mt-12 text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>

              <p className="mt-4 text-gray-400 text-lg">
                Generating AI Summary...
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-10 rounded-2xl border border-red-500 bg-red-500/10 p-6 text-red-300">
              {error}
            </div>
          )}

          {/* AI Summary */}
          {!loading && !error && summary && (
            <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 shadow-2xl backdrop-blur-xl">

              <div className="border-b border-cyan-500/20 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl">
                    🤖
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      AI Summary
                    </h2>

                    <p className="mt-1 text-gray-400">
                      AI-generated summary • Powered by Gemini
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-2xl">✨</span>

                    <h3 className="text-xl font-semibold text-cyan-400">
                      Key Insights
                    </h3>
                  </div>

                  <div className="whitespace-pre-line leading-9 text-gray-200">
                    {summary}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          {!loading && !error && (
            <div className="mt-12 space-y-7">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="break-all text-sm text-cyan-400">
                        {result.link}
                      </p>

                      <h2 className="mt-3 text-2xl font-bold transition group-hover:text-cyan-400">
                        {result.title}
                      </h2>
                    </div>

                    {result.position && (
                      <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                        #{result.position}
                      </div>
                    )}
                  </div>

                  <p className="mt-6 leading-8 text-gray-400">
                    {result.snippet}
                  </p>

                  <a
                    href={result.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
                  >
                    🌐 Visit Website
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchDashboard;