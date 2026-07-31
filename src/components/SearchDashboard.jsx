import Sidebar from "./Sidebar";
import SearchFilters from "./SearchFilters";
import SearchCategories from "./SearchCategories";
import useSearch from "../hooks/useSearch";

const SearchDashboard = ({ searchQuery }) => {
  const {
    results,
    peopleAlsoAsk,
    relatedSearches,
    loading,
    error,
  } = useSearch(searchQuery);

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

          {/* AI Summary */}
          <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🤖</span>

              <div>
                <h2 className="text-2xl font-bold">
                  AI Summary
                </h2>

                <p className="text-gray-400">
                  AI integration coming next...
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-gray-300">
              SearchSphere has successfully fetched live search
              results. The next milestone is replacing this text with
              an AI-generated summary using an LLM.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="mt-10 text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>

              <p className="mt-4 text-gray-400">
                Searching...
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-10 rounded-xl border border-red-500 bg-red-500/10 p-6 text-red-300">
              {error}
            </div>
          )}

          {/* Search Results */}
          {!loading && !error && (
            <div className="mt-10 space-y-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="break-all text-sm text-cyan-400">
                        {result.link}
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        {result.title}
                      </h2>
                    </div>

                    <div className="rounded-full bg-green-500/20 px-4 py-2 text-green-300">
                      #{result.position}
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-gray-400">
                    {result.snippet}
                  </p>

                  <a
                    href={result.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-lg border border-cyan-500 px-5 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                  >
                    🌐 Visit Website
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* People Also Ask */}
          {peopleAlsoAsk.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-3xl font-bold">
                People Also Ask
              </h2>

              <div className="space-y-4">
                {peopleAlsoAsk.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
                  >
                    {item.question}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Searches */}
          {relatedSearches.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-3xl font-bold">
                Related Searches
              </h2>

              <div className="flex flex-wrap gap-3">
                {relatedSearches.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-cyan-500 px-4 py-2"
                  >
                    {item.query}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchDashboard;