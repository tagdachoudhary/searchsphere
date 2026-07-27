import { useState } from "react";
import { Search } from "lucide-react";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur border-b border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Search<span className="text-blue-400">Sphere</span>
        </h1>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-gray-400">
          <button className="hover:text-white transition">Features</button>
          <button className="hover:text-white transition">Technology</button>
          <button className="hover:text-white transition">About</button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2">

          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-56 bg-transparent text-white outline-none placeholder:text-gray-500"
          />

          <button
            onClick={handleSearch}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition"
          >
            Search
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;