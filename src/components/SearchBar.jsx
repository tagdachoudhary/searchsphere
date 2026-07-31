import { useEffect, useRef, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(saved);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setShowHistory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleSearch = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    let updatedHistory = history.filter(
      (item) => item !== trimmedQuery
    );

    updatedHistory.unshift(trimmedQuery);

    updatedHistory = updatedHistory.slice(0, 6);

    localStorage.setItem(
      "searchHistory",
      JSON.stringify(updatedHistory)
    );

    setHistory(updatedHistory);
    setShowHistory(false);

    onSearch(trimmedQuery);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-4xl mx-auto mt-10"
    >
      <div className="flex overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/80 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-cyan-500">

        <input
          type="text"
          placeholder="Search anything..."
          value={query}
          onFocus={() => setShowHistory(true)}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="flex-1 bg-transparent px-6 py-5 text-lg text-white placeholder-gray-400 outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-cyan-500 px-8 py-5 font-semibold text-black transition hover:bg-cyan-400"
        >
          Search
        </button>
      </div>

      {showHistory && history.length > 0 && (
        <div className="absolute left-0 right-0 z-50 mt-3 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl">

          <div className="border-b border-zinc-700 px-5 py-3 text-sm font-semibold text-cyan-400">
            Recent Searches
          </div>

          {history.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setQuery(item);
                setShowHistory(false);
                onSearch(item);
              }}
              className="block w-full border-b border-zinc-800 px-5 py-4 text-left text-gray-300 transition hover:bg-zinc-800 last:border-none"
            >
              🔍 {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;