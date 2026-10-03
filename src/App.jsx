import { useEffect, useState } from "react";

import { getSearchHistory } from "./services/historyApi";
import {
  getBookmarks,
  addBookmark,
  deleteBookmark,
} from "./services/bookmarkApi";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/Footers";

import Sidebar from "./components/Sidebar";
import SearchDashboard from "./components/SearchDashboard";
import SearchLoader from "./components/SearchLoader";

import CTA from "./components/CTA";
import DashboardPreview from "./components/DashboardPreview";
import HowItWorks from "./components/HowItWorks";
import TrustedBy from "./components/TrustedBy";

const API_URL =
  import.meta.env.VITE_API_URL;

const createTab = () => ({
  id: Date.now() + Math.random(),
  query: "",
  backStack: [],
  forwardStack: [],
});

function App() {
  const [tabs, setTabs] = useState(() => [createTab()]);
  const [activeTabId, setActiveTabId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [history, setHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  // LOAD HISTORY
  const loadHistory = async () => {
    try {
      const data = await getSearchHistory();

      setHistory(data.history || []);

      console.log(
        "✅ Search history loaded:",
        data.history || []
      );
    } catch (error) {
      console.error(
        "❌ Failed to load search history:",
        error
      );
    }
  };

  // LOAD BOOKMARKS
  const loadBookmarks = async () => {
    try {
      const data = await getBookmarks();

      setBookmarks(data.bookmarks || []);

      console.log(
        "✅ Bookmarks loaded:",
        data.bookmarks || []
      );
    } catch (error) {
      console.error(
        "❌ Failed to load bookmarks:",
        error
      );
    }
  };

  // INITIAL LOAD
  useEffect(() => {
    loadHistory();
    loadBookmarks();
  }, []);

  // REFRESH HISTORY AFTER SEARCH
  useEffect(() => {
    const handleHistoryUpdate = () => {
      loadHistory();
    };

    window.addEventListener(
      "searchsphere-history-updated",
      handleHistoryUpdate
    );

    return () => {
      window.removeEventListener(
        "searchsphere-history-updated",
        handleHistoryUpdate
      );
    };
  }, []);

  // SET FIRST TAB AS ACTIVE
  useEffect(() => {
    if (!activeTabId && tabs.length > 0) {
      setActiveTabId(tabs[0].id);
    }
  }, [activeTabId, tabs]);

  const activeTab =
    tabs.find(
      (tab) => tab.id === activeTabId
    ) || tabs[0];

  const searchQuery =
    activeTab?.query || "";

  // SEARCH
  const handleSearch = (query) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery || !activeTab) {
      return;
    }

    console.log(
      "APP SEARCH:",
      trimmedQuery
    );

    setIsLoading(true);

    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id !== activeTab.id) {
          return tab;
        }

        if (
          tab.query.toLowerCase() ===
          trimmedQuery.toLowerCase()
        ) {
          return tab;
        }

        return {
          ...tab,

          backStack: tab.query
            ? [
                ...tab.backStack,
                tab.query,
              ]
            : tab.backStack,

          forwardStack: [],

          query: trimmedQuery,
        };
      })
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // CREATE NEW TAB
  const createNewTab = () => {
    const newTab = createTab();

    setTabs((prevTabs) => [
      ...prevTabs,
      newTab,
    ]);

    setActiveTabId(newTab.id);
    setIsLoading(false);
  };

  // SWITCH TAB
  const switchTab = (tabId) => {
    setActiveTabId(tabId);
    setIsLoading(false);
  };

  // CLOSE TAB
  const closeTab = (tabId) => {
    setTabs((prevTabs) => {
      const remainingTabs =
        prevTabs.filter(
          (tab) => tab.id !== tabId
        );

      if (remainingTabs.length === 0) {
        const freshTab = createTab();

        setActiveTabId(freshTab.id);

        return [freshTab];
      }

      if (tabId === activeTabId) {
        const closedIndex =
          prevTabs.findIndex(
            (tab) => tab.id === tabId
          );

        const newActiveTab =
          remainingTabs[
            Math.max(
              0,
              closedIndex - 1
            )
          ] || remainingTabs[0];

        setActiveTabId(
          newActiveTab.id
        );
      }

      return remainingTabs;
    });

    setIsLoading(false);
  };

  // GO BACK
  const goBack = () => {
    if (
      !activeTab ||
      activeTab.backStack.length === 0
    ) {
      return;
    }

    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id !== activeTab.id) {
          return tab;
        }

        const previousQuery =
          tab.backStack[
            tab.backStack.length - 1
          ];

        return {
          ...tab,

          backStack:
            tab.backStack.slice(0, -1),

          forwardStack: [
            ...tab.forwardStack,
            tab.query,
          ],

          query: previousQuery,
        };
      })
    );

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // GO FORWARD
  const goForward = () => {
    if (
      !activeTab ||
      activeTab.forwardStack.length === 0
    ) {
      return;
    }

    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id !== activeTab.id) {
          return tab;
        }

        const nextQuery =
          tab.forwardStack[
            tab.forwardStack.length - 1
          ];

        return {
          ...tab,

          forwardStack:
            tab.forwardStack.slice(0, -1),

          backStack: [
            ...tab.backStack,
            tab.query,
          ],

          query: nextQuery,
        };
      })
    );

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // DELETE HISTORY ITEM
  const deleteHistoryItem = async (
    historyId
  ) => {
    try {
      const response = await fetch(
        `${API_URL}/api/history/${historyId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to delete history item"
        );
      }

      setHistory((prev) =>
        prev.filter(
          (item) =>
            item.id !== historyId
        )
      );

      console.log(
        "✅ History item deleted"
      );
    } catch (error) {
      console.error(
        "❌ DELETE HISTORY ERROR:",
        error
      );
    }
  };

  // CLEAR HISTORY
  const clearHistory = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/history`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to clear history"
        );
      }

      setHistory([]);

      console.log(
        "✅ Search history cleared"
      );
    } catch (error) {
      console.error(
        "❌ CLEAR HISTORY ERROR:",
        error
      );
    }
  };

  // OPEN HISTORY ITEM
  const openHistoryItem = (
    query
  ) => {
    handleSearch(query);
  };

  // ADD BOOKMARK
  const handleAddBookmark = async ({
    title,
    link,
    snippet,
  }) => {
    try {
      const data =
        await addBookmark({
          title,
          link,
          snippet,
        });

      if (data.bookmark) {
        setBookmarks((prev) => [
          data.bookmark,
          ...prev,
        ]);
      }

      console.log(
        "✅ Bookmark added:",
        data.bookmark
      );
    } catch (error) {
      console.error(
        "❌ ADD BOOKMARK ERROR:",
        error
      );
    }
  };

  // DELETE BOOKMARK
  const handleDeleteBookmark = async (
    bookmarkId
  ) => {
    try {
      await deleteBookmark(
        bookmarkId
      );

      setBookmarks((prev) =>
        prev.filter(
          (bookmark) =>
            bookmark.id !== bookmarkId
        )
      );

      console.log(
        "✅ Bookmark removed"
      );
    } catch (error) {
      console.error(
        "❌ DELETE BOOKMARK ERROR:",
        error
      );
    }
  };

  // OPEN BOOKMARK
  const openBookmark = (link) => {
    window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar
        onSearch={handleSearch}
        currentQuery={searchQuery}
      />

      <div className="flex min-h-[calc(100vh-73px)]">

        {/* SIDEBAR */}
        <Sidebar
          tabs={tabs}
          activeTabId={activeTabId}
          onSelectTab={switchTab}
          onNewTab={createNewTab}
          onCloseTab={closeTab}
          history={history}
          onHistorySelect={
            openHistoryItem
          }
          onDeleteHistory={
            deleteHistoryItem
          }
          onClearHistory={
            clearHistory
          }
          bookmarks={bookmarks}
          onBookmarkSelect={
            openBookmark
          }
          onDeleteBookmark={
            handleDeleteBookmark
          }
        />

        {/* MAIN CONTENT */}
        <div className="min-w-0 flex-1">

          {/* TAB BAR */}
          <div className="sticky top-[73px] z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl">

            <div className="flex items-center gap-2 overflow-x-auto px-4 py-2">

              {tabs.map(
                (tab, index) => {
                  const isActive =
                    tab.id ===
                    activeTabId;

                  return (
                    <div
                      key={tab.id}
                      className={`group flex min-w-[180px] max-w-[280px] items-center rounded-xl border transition-all ${
                        isActive
                          ? "border-cyan-500/50 bg-zinc-900"
                          : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                      }`}
                    >

                      <button
                        onClick={() =>
                          switchTab(
                            tab.id
                          )
                        }
                        className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 text-left"
                      >

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
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
                              ? "font-semibold text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {tab.query ||
                            "New Tab"}
                        </span>

                      </button>

                      <button
                        onClick={() =>
                          closeTab(
                            tab.id
                          )
                        }
                        className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
                        title="Close tab"
                      >
                        ×
                      </button>

                    </div>
                  );
                }
              )}

              <button
                onClick={
                  createNewTab
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-xl text-gray-400 transition hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"
                title="New Tab"
              >
                +
              </button>

            </div>
          </div>

          {/* PAGE CONTENT */}

          {isLoading ? (
            <SearchLoader />
          ) : searchQuery ? (
            <SearchDashboard
              searchQuery={
                searchQuery
              }
              onBack={goBack}
              onForward={
                goForward
              }
              canGoBack={
                activeTab?.backStack
                  .length > 0
              }
              canGoForward={
                activeTab?.forwardStack
                  .length > 0
              }
              bookmarks={
                bookmarks
              }
              onAddBookmark={
                handleAddBookmark
              }
              onDeleteBookmark={
                handleDeleteBookmark
              }
            />
          ) : (
            <>
              <Hero
                onSearch={
                  handleSearch
                }
              />

              <DashboardPreview />

              <HowItWorks />

              <Features />

              <TrustedBy />

              <Stats />

              <CTA />
            </>
          )}

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;