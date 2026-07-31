import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    onSearch(trimmedQuery);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="flex items-center rounded-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-lg shadow-2xl overflow-hidden transition-all duration-300 hover:border-blue-500">

        <input
          type="text"
          placeholder="Search anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="flex-1 bg-transparent text-white placeholder-gray-400 px-6 py-5 text-lg outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-5 font-semibold text-white transition-all duration-300"
        >
          Search
        </button>

      </div>
    </div>
  );
};

export default SearchBar;