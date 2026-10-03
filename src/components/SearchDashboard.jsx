import SearchFilters from "./SearchFilters";
import SearchCategories from "./SearchCategories";
import useSearch from "../hooks/useSearch";

const SearchDashboard = ({
  searchQuery,
  onBack,
  onForward,
  canGoBack,
  canGoForward,
  bookmarks = [],
  onAddBookmark,
  onDeleteBookmark,
}) => {
  const {
    results,
    summary,
    loading,
    error,
  } = useSearch(searchQuery);

  const isBookmarked = (link) => {
    return bookmarks.some(
      (bookmark) => bookmark.link === link
    );
  };

  return (
    <main className="min-w-0 px-6 py-8 lg:px-10">

      {/* BACK / FORWARD */}
      <div className="mb-8 flex items-center gap-3">

        <button
          onClick={onBack}
          disabled={!canGoBack}
          className={`rounded-xl border px-5 py-3 font-semibold transition ${
            canGoBack
              ? "border-zinc-700 bg-zinc-900 text-white hover:border-cyan-400 hover:text-cyan-400"
              : "cursor-not-allowed border-zinc-800 bg-zinc-900/50 text-zinc-600"
          }`}
        >
          ← Back
        </button>

        <button
          onClick={onForward}
          disabled={!canGoForward}
          className={`rounded-xl border px-5 py-3 font-semibold transition ${
            canGoForward
              ? "border-zinc-700 bg-zinc-900 text-white hover:border-cyan-400 hover:text-cyan-400"
              : "cursor-not-allowed border-zinc-800 bg-zinc-900/50 text-zinc-600"
          }`}
        >
          Forward →
        </button>

      </div>

      {/* TITLE */}
      <div className="mb-8">

        <p className="mb-2 text-sm text-gray-500">
          Search Results
        </p>

        <h1 className="break-words text-3xl font-bold text-white">
          Results for{" "}
          <span className="text-cyan-400">
            "{searchQuery}"
          </span>
        </h1>

      </div>

      {/* FILTERS */}
      <div className="mb-6">
        <SearchFilters />
      </div>

      {/* CATEGORIES */}
      <div className="mb-8">
        <SearchCategories />
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex min-h-[300px] items-center justify-center">

          <div className="text-center">

            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-zinc-800 border-t-cyan-400" />

            <p className="text-gray-400">
              Searching the web...
            </p>

          </div>

        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-5">

          <p className="font-semibold text-red-400">
            Search Error
          </p>

          <p className="mt-2 text-sm text-red-300/80">
            {error}
          </p>

        </div>
      )}

      {/* AI SUMMARY */}
      {!loading &&
        !error &&
        summary && (
          <section className="mb-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10 p-6">

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-xl">
                🤖
              </div>

              <div>

                <h2 className="font-bold text-white">
                  SearchSphere AI
                </h2>

                <p className="text-xs text-gray-500">
                  AI Generated Summary
                </p>

              </div>

            </div>

            <div className="whitespace-pre-line text-sm leading-7 text-gray-300">
              {summary}
            </div>

          </section>
        )}

      {/* RESULTS */}
      {!loading &&
        !error &&
        results.length > 0 && (
          <section className="space-y-5">

            {results.map((result, index) => {

              const bookmarked =
                isBookmarked(result.link);

              return (
                <article
                  key={`${result.link}-${index}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-cyan-500/30 hover:bg-zinc-900/60"
                >

                  {/* RESULT HEADER */}
                  <div className="mb-2 flex items-center justify-between gap-4">

                    <div className="text-xs text-gray-600">
                      Result{" "}
                      {result.position || index + 1}
                    </div>

                    {/* BOOKMARK */}
                    <button
                      onClick={() => {

                        if (bookmarked) {

                          const bookmark =
                            bookmarks.find(
                              (item) =>
                                item.link === result.link
                            );

                          if (bookmark) {
                            onDeleteBookmark(
                              bookmark.id
                            );
                          }

                          return;
                        }

                        onAddBookmark({
                          title: result.title,
                          link: result.link,
                          snippet: result.snippet,
                        });
                      }}
                      className={`shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                        bookmarked
                          ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-400 hover:bg-red-500/10 hover:text-red-400"
                          : "border-zinc-700 bg-zinc-900 text-gray-400 hover:border-yellow-500/40 hover:bg-yellow-500/10 hover:text-yellow-400"
                      }`}
                      title={
                        bookmarked
                          ? "Remove bookmark"
                          : "Save bookmark"
                      }
                    >
                      {bookmarked
                        ? "🔖 Saved"
                        : "🔖 Bookmark"}
                    </button>

                  </div>

                  {/* TITLE */}
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    {result.title}
                  </a>

                  {/* LINK */}
                  <p className="mt-2 truncate text-sm text-green-500/70">
                    {result.link}
                  </p>

                  {/* SNIPPET */}
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {result.snippet}
                  </p>

                  {/* VISIT */}
                  <div className="mt-5">

                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/20"
                    >
                      Visit Website →
                    </a>

                  </div>

                </article>
              );
            })}

          </section>
        )}

      {/* NO RESULTS */}
      {!loading &&
        !error &&
        results.length === 0 && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-10 text-center">

            <p className="text-gray-400">
              No search results found.
            </p>

          </div>
        )}

    </main>
  );
};

export default SearchDashboard;