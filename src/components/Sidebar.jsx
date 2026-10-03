const Sidebar = ({
  tabs = [],
  activeTabId,
  onSelectTab,
  onNewTab,
  onCloseTab,

  history = [],
  onHistorySelect,
  onDeleteHistory,
  onClearHistory,

  bookmarks = [],
  onBookmarkSelect,
  onDeleteBookmark,
}) => {
  return (
    <aside className="hidden min-h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950/95 backdrop-blur-xl lg:flex">

      {/* LOGO */}
      <div className="border-b border-zinc-800 px-8 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Search
          <span className="text-cyan-400">
            Sphere
          </span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          AI Powered Search Engine
        </p>
      </div>

      {/* TABS */}
      <div className="border-b border-zinc-800 px-5 py-5">

        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Tabs
          </h2>

          <button
            onClick={onNewTab}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-gray-400 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            title="New Tab"
          >
            +
          </button>
        </div>

        <div className="max-h-48 space-y-2 overflow-y-auto pr-1">

          {tabs.map((tab, index) => {
            const isActive =
              tab.id === activeTabId;

            return (
              <div
                key={tab.id}
                className={`group flex items-center rounded-xl border ${
                  isActive
                    ? "border-cyan-500/30 bg-cyan-500/10"
                    : "border-transparent hover:bg-zinc-900"
                }`}
              >

                <button
                  onClick={() =>
                    onSelectTab(tab.id)
                  }
                  className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-left"
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-zinc-800 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span
                    className={`truncate text-sm ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-400"
                    }`}
                  >
                    {tab.query || "New Tab"}
                  </span>
                </button>

                <button
                  onClick={() =>
                    onCloseTab(tab.id)
                  }
                  className="mr-2 hidden h-6 w-6 items-center justify-center rounded-md text-gray-600 transition hover:bg-red-500/10 hover:text-red-400 group-hover:flex"
                  title="Close tab"
                >
                  ×
                </button>

              </div>
            );
          })}

        </div>
      </div>

      {/* HISTORY */}
      <div className="border-b border-zinc-800 px-5 py-5">

        <div className="mb-3 flex items-center justify-between">

          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Search History
          </h2>

          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="text-xs text-gray-600 transition hover:text-red-400"
            >
              Clear
            </button>
          )}

        </div>

        <div className="max-h-52 space-y-2 overflow-y-auto pr-1">

          {history.length === 0 ? (
            <div className="rounded-xl border border-dashed border-zinc-800 p-4 text-center">
              <p className="text-xs text-gray-600">
                No searches yet
              </p>
            </div>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                className="group flex items-center rounded-xl transition hover:bg-zinc-900"
              >

                <button
                  onClick={() =>
                    onHistorySelect(item.query)
                  }
                  className="min-w-0 flex-1 truncate px-3 py-2.5 text-left text-sm text-gray-400 transition hover:text-cyan-400"
                  title={item.query}
                >
                  🔍 {item.query}
                </button>

                <button
                  onClick={() =>
                    onDeleteHistory(item.id)
                  }
                  className="mr-2 hidden h-6 w-6 items-center justify-center rounded-md text-gray-600 transition hover:bg-red-500/10 hover:text-red-400 group-hover:flex"
                  title="Delete history item"
                >
                  ×
                </button>

              </div>
            ))
          )}

        </div>
      </div>

      {/* BOOKMARKS */}
      <div className="border-b border-zinc-800 px-5 py-5">

        <div className="mb-3 flex items-center justify-between">

          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Bookmarks
          </h2>

          <span className="text-xs text-gray-600">
            {bookmarks.length}
          </span>

        </div>

        <div className="max-h-60 space-y-2 overflow-y-auto pr-1">

          {bookmarks.length === 0 ? (
            <div className="rounded-xl border border-dashed border-zinc-800 p-4 text-center">
              <p className="text-xs text-gray-600">
                No bookmarks yet
              </p>
            </div>
          ) : (
            bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="group flex items-center rounded-xl transition hover:bg-zinc-900"
              >

                <button
                  onClick={() =>
                    onBookmarkSelect(bookmark.link)
                  }
                  className="min-w-0 flex-1 px-3 py-2.5 text-left"
                  title={bookmark.title}
                >
                  <div className="flex items-center gap-2">

                    <span className="shrink-0 text-sm">
                      🔖
                    </span>

                    <span className="truncate text-sm text-gray-400 transition group-hover:text-cyan-400">
                      {bookmark.title}
                    </span>

                  </div>
                </button>

                <button
                  onClick={() =>
                    onDeleteBookmark(bookmark.id)
                  }
                  className="mr-2 hidden h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-600 transition hover:bg-red-500/10 hover:text-red-400 group-hover:flex"
                  title="Remove bookmark"
                >
                  ×
                </button>

              </div>
            ))
          )}

        </div>
      </div>

      {/* AI CARD */}
      <div className="m-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-indigo-500/15 p-6">

        <div className="mb-3 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-2xl">
            🤖
          </div>

          <div>
            <h2 className="font-bold text-white">
              SearchSphere AI
            </h2>

            <p className="text-xs text-gray-400">
              Gemini Powered
            </p>
          </div>

        </div>

        <p className="text-sm leading-6 text-gray-400">
          Search across Google, GitHub,
          documentation and AI-generated
          summaries in one place.
        </p>

      </div>

    </aside>
  );
};

export default Sidebar;