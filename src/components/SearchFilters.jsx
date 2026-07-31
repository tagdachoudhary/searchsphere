import { useState } from "react";

function SearchFilters() {

  const [active, setActive] = useState("All");

  const filters = [
    "All",
    "GitHub",
    "PDFs",
    "Docs",
    "YouTube",
  ];

  return (

    <div className="flex flex-wrap gap-4">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
            active === filter
              ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
              : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white"
          }`}
        >
          {filter}
        </button>

      ))}

    </div>

  );

}

export default SearchFilters;