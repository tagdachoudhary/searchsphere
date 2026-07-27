import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-6">
      <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-2xl p-2 shadow-xl">

        <Search
          className="ml-4 text-gray-400"
          size={24}
        />

        <input
          type="text"
          placeholder="Search anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="flex-1 bg-transparent text-white px-5 py-4 outline-none placeholder-gray-500"
        />

        <button
          onClick={handleSearch}
          className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Search
        </button>

      </div>
    </div>
  );
};

export default SearchBar;